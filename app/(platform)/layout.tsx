import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <Toaster />
      <div>{children}</div>;
    </ClerkProvider>
  );
};

export default Layout;
