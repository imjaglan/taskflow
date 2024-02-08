import React from "react";
import NavBar from "./_components/NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
