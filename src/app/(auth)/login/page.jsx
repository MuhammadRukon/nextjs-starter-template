"use client";
import FormWrapper from "@/components/elements/form/FormWrapper";
import Input from "@/components/elements/form/Input";

const page = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <FormWrapper handleSubmit={handleLogin} method="Login">
      <Input name="email" type="email" className="focus:outline-none border" />
      <Input
        name="password"
        type="password"
        className="focus:outline-none border"
      />
    </FormWrapper>
  );
};

export default page;
