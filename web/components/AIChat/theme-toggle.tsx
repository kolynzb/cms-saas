"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiMoonLine, RiSunFill, RiSunLine } from "react-icons/ri";
import { Button } from "./button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [_, startTransition] = React.useTransition();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        startTransition(() => {
          setTheme(theme === "light" ? "dark" : "light");
        });
      }}
    >
      {!theme ? null : theme === "dark" ? (
        <RiMoonLine className="transition-all h-4 w-4 text-gray-600 dark:text-white" />
      ) : (
        <RiSunLine className="transition-all h-4 w-4 text-gray-600 dark:text-white" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
