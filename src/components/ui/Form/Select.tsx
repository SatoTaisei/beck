import React from "react";
import { UseFormRegister } from "react-hook-form";

import type { FormValues } from "@/components/types/Form";

export const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<FormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <label
    className="flex flex-col text-sm font-medium text-gray-900"
    htmlFor={label}
  >
    {label}
    <select
      id={label}
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
    >
      <option value="A001">A001</option>
      <option value="A002">A002</option>
      <option value="A003">A003</option>
      <option value="A004">A004</option>
      <option value="A005">A005</option>
      <option value="A006">A006</option>
      <option value="A007">A007</option>
      <option value="A008">A008</option>
      <option value="A009">A009</option>
      <option value="A010">A010</option>
      <option value="A011">A011</option>
      <option value="A012">A012</option>
      <option value="A013">A013</option>
      <option value="A014">A014</option>
      <option value="A015">A015</option>
      <option value="A016">A016</option>
    </select>
  </label>
));
Select.displayName = "Select";
