"use client";
import Input from "@/components/partials/elements/input/Input";

const page = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-96">
      <form onSubmit={handleLogin}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default page;
