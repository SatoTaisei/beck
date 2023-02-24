import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  tel: number;
  productName: string;
  inquiryText: string;
};

export type FormComponentsProps = {
  label: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  required: boolean;
  maxLength?: number;
  placeholder?: string;
  errors: FieldErrors<FormValues>;
};
