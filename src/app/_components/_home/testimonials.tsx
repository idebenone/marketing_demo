"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Arya Rajurkar",
      message:
        "One of the best startup investment platforms in Indi I’m a student and can invest right from ₹1000 itself. Very nice.",
    },
    {
      name: "Shubhangi Sarin",
      message:
        "Pepcorns has a great user interface, which made the whole process a lot smoother for me.",
    },
    {
      name: "Ankur Pathak",
      message:
        "An exceptional experience with Pepcorns. Their expertise in identifying promising startups and providing strategic investments has yielded impressive returns.",
    },
    {
      name: "Richa Dubey",
      message:
        "Pepcorns is an amazing platform for investment. It not just provides a great opportunity for the startups but also for us as investors by serving as a one-stop solution.",
    },
    {
      name: "Yana Gupta",
      message:
        "In my opinion, in the dynamic world of startup investments, finding a company that stands out from the crowd can be a challenging task.",
    },
    {
      name: "Alok M",
      message:
        "Great user interface. All details on a single page give easy access about the company. Pitches heading is very well thought. Will recommend to my friends to explore.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="text-2xl md:text-4xl font-semibold">
          Customer Testimonials
        </p>
        <p className="text-sm md:text-lg text-muted-foreground">
          Hear it from the Investors of our Startup Community
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {testimonials.map((val, ind) => (
            <Card key={ind} className="min-h-[150px] lg:max-w-[400px]">
              <CardHeader>
                <CardTitle className="text-xl  sm:text-3xl">
                  {val.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" text-muted-foreground">"{val.message}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
