"use client";
import { CpuIcon, BrainCog, CarFront, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const StartupsSec = () => {
  const startups = [
    {
      cardIcon: <CpuIcon className="h-24 w-24 text-green-700" />,
      cardHead: "Hardware & IOT",
      cardContent: "",
      cardQuantity: "10",
    },
    {
      cardIcon: <BrainCog className="h-24 w-24 text-green-700" />,
      cardHead: "Artificial Intelligence",
      cardContent:
        "The startups need to successfully pass our comprehensive due diligence process.",
      cardQuantity: "10",
    },
    {
      cardIcon: <CarFront className="h-24 w-24 text-green-700" />,
      cardHead: "Mobility",
      cardContent:
        "Every time you invest, you earn multiple rewards in in the form of merchandise, coupons and more.",
      cardQuantity: "10",
    },
    {
      cardIcon: <Leaf className="h-24 w-24 text-green-700" />,
      cardHead: "Biotechnology",
      cardContent:
        "Every time you invest, you earn multiple rewards in in the form of merchandise, coupons and more.",
      cardQuantity: "10",
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <p className="text-2xl md:text-4xl font-semibold">
        250+ Startups to pick from
      </p>
      <p className="text-sm md:text-lg text-muted-foreground">
        We have startups from every emerging field you can imagine. We go
        through a vetting process for each one.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-12">
        {startups.map((val, ind) => (
          <Card key={ind}>
            <CardHeader>
              <CardTitle className="flex justify-center w-full">
                {val.cardIcon}
              </CardTitle>
              <CardTitle className="text-xl line-clamp-1 sm:text-3xl">
                {val.cardHead}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-muted-foreground">
                {val.cardQuantity}+
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="mt-6">
        See More
      </Button>
    </div>
  );
};
