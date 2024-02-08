import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <div>{children}</div>;
    </ClerkProvider>
  );
};

export default Layout;
