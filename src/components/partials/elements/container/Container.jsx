const Container = ({ children, style }) => {
  return (
    <div style={style} className="px-5 lg:max-w-6xl 2xl:max-w-[1400px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
