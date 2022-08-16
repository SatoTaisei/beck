import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

export type FormValues = {
  FirstName: string;
  LastName: string;
  Email: string;
  Tel: number;
  Product: string;
  Inquiry: string;
};

export type FormComponentsProps = {
  label: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  required: boolean;
  maxLength?: number;
  placeholder?: string;
  errors: FieldErrors<FormValues>;
};
