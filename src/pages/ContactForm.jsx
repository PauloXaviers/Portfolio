import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [submitLabel, setSubmitLabel] = useState("Enviar");
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const schema = z.object({
    name: z.string().min(2, "O campo nome é obrigatório"),
    email: z.email("Por favor, insira um e-mail válido"),
    contactRole: z.enum(
      ["recruiter", "client", "student", "developer"],
      "Por favor, selecione no mínimo uma opção"
    ),
    message: z.string().min(10, "Insira uma mensagem com pelo menos 10 caracteres."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (form) => {
    console.log(form);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen h-auto mt-20 md:mt-10 md:h-screen gap-15">
      <h1 className="text-2xl md:text-3xl text-white">Página de contato</h1>
      <form
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center w-[80%] md:w-[50%] gap-5"
      >
        <label className="text-white text-sm md:text-[17px]" htmlFor="name">
          Nome:
        </label>
        <input className={`${errors.name ? " contact-input-error" : "contact-input"}`} id="name" {...register("name")} />
        {errors.name && <p className="text-red-500 text-[12px] md:text-[14px]">{errors.name.message}</p>}

        <label className="text-white text-sm md:text-[17px]" htmlFor="email">
          E-mail:
        </label>
        <input className={`${errors.email ? " contact-input-error" : "contact-input"}`} id="email" {...register("email")} />
        {errors.email && <p className="text-red-500 text-[12px] md:text-[14px]">{errors.email.message}</p>}

        <label className="text-white text-sm md:text-[17px]" htmlFor="contactRole">
          Qual perfil melhor descreve você?
        </label>
        <select
          {...register("contactRole")}
          id="contactRole"
          className="contact-input w-40! text-sm shadow-none!"
        >
          <option value="recruiter">Recrutador</option>
          <option value="client">Cliente</option>
          <option value="student">Estudante</option>
          <option value="developer">Desenvolvedor</option>
        </select>
        {errors.contactRole && <p className="text-red-500 text-[12px] md:text-[14px]">{errors.contactRole.message}</p>}

        <label className="text-white text-sm md:text-[17px]" htmlFor="message">
          Insira a sua mensagem:
        </label>
        <textarea
          id="message"
          {...register("message")}
          className={`${errors.message ? "border-red-500! shadow-red-500!" : "border-white!"} border rounded-md! min-h-40 contact-input max-h-60! focus:shadow-[0px_0px_10px_#5c6162]!`}
        />
        {errors.message && <p className="text-red-500 text-[12px] md:text-[14px]">{errors.message.message}</p>}
      </form>
      <input
        className="text-white border border-amber-50 rounded-lg container-shadow bg-(--background-card) p-1 w-50"
        form="contactForm"
        type="submit"
        value={submitLabel}
        disabled={isInputDisabled}
      />
    </section>
  );
};
export default ContactForm;
