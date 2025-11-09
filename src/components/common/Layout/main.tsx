import type { ReactNode } from "react";
import MainFooter from "../Footer/main";
import MainHeader from "../Header/main";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-primary-500 flex flex-col">
      <MainHeader />
      <main className="pt-16 flex-grow">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
