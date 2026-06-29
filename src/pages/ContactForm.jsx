import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import InputField from "../components/InputField";
import "./ContactForm.css";
import z from "zod";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [submitLabel, setSubmitLabel] = useState("Enviar");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const serviceId = import.meta.env.VITE_SERVICEID;
  const templateId = import.meta.env.VITE_TEMPLATEID;
  const publicKey = import.meta.env.VITE_APIKEY;

  const options = ["Recrutador", "Cliente", "Estudante", "Desenvolvedor"];
  const schema = z.object({
    name: z.string("O campo nome é obrigatório").trim().min(2, "Insira no mínimo dois caracteres").regex(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, "Por favor, insira somente letras."),
    email: z.email("Por favor, insira um e-mail válido"),
    contactRole: z.enum(options, "Por favor, selecione uma opção"),
    description: z.string("O campo mensagem é obrigatório").trim().min(10, "Insira uma mensagem com pelo menos 10 caracteres."),
  });

  const { handleSubmit, reset, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { 
      name: "",
      email: "",
      contactRole: options[0],
      description: "",
    },
  });

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
            return ( error?.text || "Não foi possível enviar a sua mensagem. Tente novamente mais tarde");
          },
        },
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
        <InputField id="name" name="name" label="Insira o seu nome:" type="text" control={control} autoComplete="name" />

        <InputField id="email" name="email" label="Insira o seu e-mail:" type="email" control={control} autoComplete="email" />

        <InputField id="contactRole" name="contactRole" variant="select" label="Qual perfil melhor descreve você:" control={control} options={options}/>

        <InputField id="description" name="description" variant="textarea" label="Insira a sua mensagem:" control={control}/>

      </form>
      <button
        className={`border border-amber-50 rounded-lg container-shadow bg-(--background-icones) p-1 w-50 cursor-pointer 
          ${!isSubmitDisabled ? "hover:scale-105 active:scale-95 transition-all duration-200 text-white" : "text-gray-300"}`}
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
