"use client";
import FormWrapper from "@/components/elements/form/FormWrapper";
import Input from "@/components/elements/form/Input";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  console.log(email, password, number, name);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <FormWrapper handleSubmit={handleLogin} method="Login">
      <Input name="email" type="email" value={email} setValue={setEmail} />
      <Input name="Name" value={name} setValue={setName} />
      <Input name="number" type="number" value={number} setValue={setNumber} />
      <Input
        name="password"
        type="password"
        value={password}
        setValue={setPassword}
      />
    </FormWrapper>
  );
};

export default page;
