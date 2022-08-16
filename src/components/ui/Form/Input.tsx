import type { FormComponentsProps } from "@/components/types/Form";

export const Input = ({
  label,
  register,
  required,
  maxLength,
  placeholder,
  errors,
}: FormComponentsProps) => (
  <label
    className="flex flex-col text-sm font-medium text-gray-900"
    htmlFor={label}
  >
    {label}
    <input
      id={label}
      {...register(label, { required, maxLength: maxLength })}
      className={`block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1 ${
        errors.LastName && `border-red-500`
      }`}
      placeholder={placeholder}
    />
    {errors.LastName && (
      <p className="text-red-500 text-sm font-bold mt-1">
        {label} is required.
      </p>
    )}
  </label>
);
