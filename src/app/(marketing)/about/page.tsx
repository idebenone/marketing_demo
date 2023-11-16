import { Heading } from "./_components/heading";
import Team from "./_components/team";
import { Vision } from "./_components/vision";

const about = () => {
  return (
    <main className="flex flex-col gap-16 px-3">
      <Heading />

      <Vision />

      <Team />
    </main>
  );
};

export default about;
