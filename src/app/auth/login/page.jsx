"use client";
import Input from "@/components/partials/elements/input/Input";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("rendered");
  return (
    <div className="max-w-96">
      <form onSubmit={handleSubmit}>
        <Input name="name" className="focus:outline-none border" />
        <Input
          name="number"
          type="number"
          className="focus:outline-none border"
        />
        <Input
          name="email"
          type="email"
          className="focus:outline-none border"
        />
        <Input
          name="password"
          type="password"
          className="focus:outline-none border"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder={"Cofirm Password"}
          className="focus:outline-none border"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default page;
