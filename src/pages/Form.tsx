import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@/components/ui/Form/Input";
import { Select } from "@/components/ui/Form/Select";
import { TextArea } from "@/components/ui/Form/TextArea";

import type { FormValues } from "@/components/types/Form";

const Form: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <section className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <Input
            label="FirstName"
            register={register}
            required
            maxLength={8}
            placeholder="Tanaka"
            errors={errors}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <Input
            label="LastName"
            register={register}
            required
            maxLength={8}
            placeholder="Yukio"
            errors={errors}
          />
        </div>
      </section>

      <section className="mb-6">
        <Input
          label="Email"
          register={register}
          required
          maxLength={200}
          placeholder="ab.cdef@gmail.com"
          errors={errors}
        />
      </section>

      <section className="mb-6">
        <Input
          label="Tel"
          register={register}
          required
          maxLength={12}
          placeholder="08011112222"
          errors={errors}
        />
      </section>

      <section className="mb-6">
        <Select label="Product" {...register("Product")} />
      </section>

      <section className="mb-6">
        <TextArea
          label="Inquiry"
          register={register}
          maxLength={2000}
          required
          errors={errors}
        />
      </section>

      <button
        type="submit"
        className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
