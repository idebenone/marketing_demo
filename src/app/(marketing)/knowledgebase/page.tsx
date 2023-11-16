import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Investors } from "./_components/investors";
import { Companies } from "./_components/companies";
import { FAQ } from "./_components/faq";

export default function KnowledgeBase() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-2">
        <Tabs defaultValue="investors" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="investors">Investors</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="sheeo">SHE.E.O</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="investors">
            <Investors />
          </TabsContent>
          <TabsContent value="companies">
            <Companies />
          </TabsContent>
          <TabsContent value="sheeo">SHEEO</TabsContent>
          <TabsContent value="faq">
            <FAQ />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
