import { Footer } from "../_components/footer";
import { NavBar } from "../_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="w-full">
        <NavBar />
        <div className="pt-16">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default LandingLayout;
