"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Logo } from "./logo";
import { ChevronsLeft } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "SHE.E.O",
    href: "/knowledgebase#sheeo",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "FAQ",
    href: "/knowledgebase#faq",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Knowledge Base",
    href: "/knowledgebase",
    description: "Visually or semantically separates content.",
  },
  {
    title: "About",
    href: "/about",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Flashcards",
    href: "/knowledgebase#flashcards",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavBar() {
  const [state, setState] = React.useState(false);
  return (
    <>
      <div className="hidden sm:flex p-3 md:px-6 lg:px-12 w-full justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex flex-row gap-2">
          <Button variant="ghost">Startups</Button>
          <Button variant="ghost">Raise Funds</Button>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-row gap-2">
          <ModeToggle />
          <Button variant="outline">Sign in</Button>
        </div>
      </div>

      <div className="sm:hidden p-2 flex justify-between">
        <Button variant="outline" size="sm" onClick={() => setState(!state)}>
          <HamburgerMenuIcon />
        </Button>

        <div className="flex flex-row gap-2">
          <ModeToggle />
          <Button variant="outline">Sign in</Button>
        </div>
      </div>

      <div className={`${state ? "block" : "hidden"}`}>
        <div className="absolute top-0 right-0 p-4 z-[99999] h-full w-full bg-background">
          <div className="flex flex-row justify-between items-center">
            <Logo />
            <CrossCircledIcon
              onClick={() => setState(!state)}
              className="w-6 h-6 cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <a href="https://app.pepcorns.com/campaigns">
              <p>Startups</p>
            </a>
            <a href="https://cmp.pepcorns.com">
              <p>Raise Funds</p>
            </a>
            <Link href="/knowledgebase#sheeo">
              <p>SHE.E.O</p>
            </Link>
            <Link href="/knowledgebase#sheeo">
              <p>Knowledgebase</p>
            </Link>
            <Link href="/about">
              <p>About</p>
            </Link>
            <Link href="/knowledgebase#flashcards">
              <p>Flashcards</p>
            </Link>
            <Link href="/knowledgebase#faq">
              <p>FAQ</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
