const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;
