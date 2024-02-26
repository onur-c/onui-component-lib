import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative mx-auto max-w-2xl space-y-20">{children}</main>
  );
};

export default Container;
