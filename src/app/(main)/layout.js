import Footer from "@/components/partials/footer/Footer";
import Header from "@/components/partials/header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="font-montserrat">
      <Header />
      <div className="min-h-[calc(100dvh-143px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
