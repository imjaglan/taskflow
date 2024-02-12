import React from "react";
import { SideBar } from "../_components/SideBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <SideBar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
