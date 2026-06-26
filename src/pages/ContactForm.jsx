import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ContactForm.css";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [submitLabel, setSubmitLabel] = useState("Enviar");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const serviceId = import.meta.env.VITE_SERVICEID;
  const templateId = import.meta.env.VITE_TEMPLATEID;
  const publicKey = import.meta.env.VITE_APIKEY;

  const schema = z.object({
    name: z.string().trim().min(2, "O campo nome é obrigatório. Insira no mínimo dois caracteres"),
    email: z.email("Por favor, insira um e-mail válido"),
    contactRole: z.enum(["recruiter", "client", "student", "developer"]),
    message: z.string().trim().min(10, "Insira uma mensagem com pelo menos 10 caracteres."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (formData) => {
    setIsSubmitDisabled(true);
    setSubmitLabel("Enviando...");
    try {
      const response = await toast.promise(
        emailjs.send(serviceId, templateId, formData, { publicKey }),
        {
          loading: "Carregando",
          success: "Enviado com sucesso!",
          error: (error) => {
            console.log(error);
            return (
              error?.text || "não foi possível enviar a sua mensagem. Tente novamente mais tarde"
            );
          },
        }
      );
      console.log(response.status, response.text);
      reset();
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitLabel("Enviar");
      setIsSubmitDisabled(false);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen h-auto mt-20 md:mt-10 gap-15">
      <h1 className="text-2xl md:text-3xl text-white">Entre em contato</h1>
      <form
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center w-[80%] md:w-[50%] gap-5"
      >
        <label className="text-white text-sm md:text-[17px]" htmlFor="name">
          Nome:
        </label>
        <input
          className={`${errors.name ? " contact-input-error" : "contact-input"}`}
          required
          type="text"
          id="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          autoComplete="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-[12px] md:text-[14px]" id="name-error">
            {errors.name.message}
          </p>
        )}

        <label className="text-white text-sm md:text-[17px]" htmlFor="email">
          E-mail:
        </label>
        <input
          className={`${errors.email ? " contact-input-error" : "contact-input"} lowercase`}
          type="email"
          id="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-[12px] md:text-[14px]" id="email-error">
            {errors.email.message}
          </p>
        )}

        <label className="text-white text-sm md:text-[17px]" htmlFor="contactRole">
          Qual perfil melhor descreve você?
        </label>
        <select
          {...register("contactRole")}
          id="contactRole"
          className="contact-input w-40! text-sm shadow-none!"
          aria-invalid={!!errors.contactRole}
          aria-describedby={errors.contactRole ? "contactRole-error" : undefined}
          required
        >
          <option value="recruiter">Recrutador</option>
          <option value="client">Cliente</option>
          <option value="student">Estudante</option>
          <option value="developer">Desenvolvedor</option>
        </select>
        {errors.contactRole && (
          <p className="text-red-500 text-[12px] md:text-[14px]" id="contactRole-error">
            {errors.contactRole.message}
          </p>
        )}

        <label className="text-white text-sm md:text-[17px]" htmlFor="message">
          Sua mensagem:
        </label>
        <textarea
          id="message"
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
          className={`${
            errors.message ? "border-red-500! shadow-red-500!" : "border-white!"
          } border rounded-md! min-h-40 contact-input max-h-60! focus:shadow-[0px_0px_10px_#5c6162]!`}
        />
        {errors.message && (
          <p className="text-red-500 text-[12px] md:text-[14px]" id="message-error">
            {errors.message.message}
          </p>
        )}
      </form>
      <button
        className={`border border-amber-50 rounded-lg container-shadow bg-(--background-icones) p-1 w-50 cursor-pointer ${
          !isSubmitDisabled
            ? "hover:scale-105 active:scale-95 transition-all duration-200 text-white"
            : "text-gray-300"
        }`}
        form="contactForm"
        type="submit"
        disabled={isSubmitDisabled}
        aria-busy={isSubmitDisabled}
      >
        {submitLabel}
      </button>
    </section>
  );
};
export default ContactForm;
