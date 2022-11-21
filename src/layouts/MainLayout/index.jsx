const MainLayout = ({ children }) => {
  return (
    <main className="w-screen h-screen grid grid-cols-4 items-center justify-center gap-5 p-5">
      {children}
    </main>
  );
};
export default MainLayout;
