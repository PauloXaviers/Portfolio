import { useController } from "react-hook-form";

const InputField = ({
  variant,
  control,
  name,
  id,
  label,
  options,
  type,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  const renderField = () => {
    switch (variant) {
      case "select":
        return (
          <select
            {...field}
            {...rest}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            id={id}
            className="contact-input w-40! text-sm shadow-none!"
          >
            {options?.map((value, index) => (
              <option key={`${value}-${index}`} value={value}>
                {value}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            {...field}
            {...rest}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            type={type}
            id={id}
            className={`${
              error ? "border-red-500! shadow-red-500!" : "border-white!"
            } border rounded-md! min-h-40 contact-input max-h-60! focus:shadow-[0px_0px_10px_#5c6162]!`}
          />
        );
      default:
        return (
          <input
            {...field}
            {...rest}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            type={type}
            id={id}
            className={`${error ? " contact-input-error" : "contact-input"} ${type === "email" && "lowercase"} w-full`}
          />
        );
    }
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <label className="text-white text-sm md:text-[17px]" htmlFor={id}>
        {label}
      </label>
      {renderField()}
      {error && ( <span id={`${name}-error`} className="text-red-500 text-[12px] md:text-[14px]">{error.message}</span> )}
    </div>
  );
};

export default InputField;
