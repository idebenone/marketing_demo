import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pepcorns | About Us",
  description:
    "Pepcorns enables everyday people to become angel investors by giving them access to startup investment opportunities",
};

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default LandingLayout;
