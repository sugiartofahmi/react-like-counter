const CardLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-5 px-10 max-w-lg py-6  rounded-lg shadow-xl bg-blue-200">
      {children}
    </div>
  );
};

export default CardLayout;
