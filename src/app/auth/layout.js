import Header from "@/components/partials/header/Header";
const layout = ({ children }) => {
  return (
    <div className="font-montserrat">
      <Header showMenu={false} showButton={false} />
      <div className="min-h-[calc(100dvh-143px)]">{children}</div>
    </div>
  );
};

export default layout;
