import React from "react";
import { OrgControl } from "./_components/OrgControl";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default Layout;
