"use client";
import React, { useEffect, useState } from "react";
import { GiMoon } from "react-icons/gi";
import { GiOrange } from "react-icons/gi";
import { useTheme } from "next-themes";

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <GiOrange
            className="text-xl cursor-pointer hover:text-red-600"
            onClick={() => setTheme("light")}
          />
        ) : (
          <GiMoon
            className="text-xl cursor-pointer hover:text-red-600"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}

export default DarkModeSwitch;
