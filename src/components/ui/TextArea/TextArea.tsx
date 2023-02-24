import { FormComponentsProps } from "@/components/types/Form";

export const TextArea = ({
  label,
  register,
  required,
  maxLength,
  errors,
}: FormComponentsProps) => {
  return (
    <label
      className="flex flex-col text-sm font-medium text-gray-900"
      htmlFor={label}
    >
      {label}
      <textarea
        rows={10}
        id={label}
        {...register(label, { required, maxLength: maxLength })}
        className={`block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1 ${
          errors.inquiryText && `border-red-500`
        }`}
        placeholder="Please enter your inquiry."
      />
      {errors.inquiryText && (
        <p className="text-red-500 text-sm font-bold mt-1">
          Inquiry is required.
        </p>
      )}
    </label>
  );
};
