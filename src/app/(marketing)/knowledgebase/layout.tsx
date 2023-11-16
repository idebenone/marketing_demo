import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pepcorns | Knowledge Base",
  description: "Everything you need to know about Raising funds and Investing!",
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default LandingLayout;
