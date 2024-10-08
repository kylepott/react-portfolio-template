import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);

    // Check for system preference for dark mode and set it
    if (!theme) {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, [theme, setTheme]);

  // Determine the correct logo to display based on the resolved theme
  const logoSrc = mounted
    ? `/images/${resolvedTheme === "dark" ? "white.svg" : "black.svg"}`
    : `/images/black.svg`;

  // Determine the correct icon (sun or moon) to display based on the theme
  const themeIconSrc = mounted
    ? `/images/${resolvedTheme === "dark" ? "sun.svg" : "moon.svg"}`
    : `/images/moon.svg`; // Default to moon icon

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                  >
                    <img className="h-6" src={logoSrc} alt="Logo" />
                  </Button>
                )}
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={themeIconSrc}
                      alt="Theme Toggle"
                      style={{
                        filter:
                          resolvedTheme === "light"
                            ? "invert(1) brightness(50%)" // Darken moon in light mode
                            : "none", // No filter in dark mode (sun will be default color)
                      }}
                    />
                  </Button>
                )}
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                resolvedTheme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => window.open("mailto:hello@decise.io")}
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@decise.io")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@decise.io")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex`}
        style={{
          backgroundColor: "transparent", // Transparent background
          width: "100%",
          height: "60px", // Set your preferred header height
          padding: "10px 20px", // Add padding if necessary
        }}
      >
        {mounted && resolvedTheme && data.darkMode && (
          <img className="h-6" src={logoSrc} alt="Logo" />
        )}

        {!isBlog ? (
          <div className="flex">
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            {mounted && resolvedTheme && data.darkMode && (
              <Button
                onClick={() =>
                  setTheme(resolvedTheme === "light" ? "dark" : "light")
                }
              >
                <img
                  className="h-6"
                  src={`/images/${resolvedTheme === "dark" ? "sun.svg" : "moon.svg"}`}
                  alt="Theme Toggle"
                  style={{
                    filter:
                      resolvedTheme === "light"
                        ? "invert(1) brightness(50%)" // Darken moon in light mode
                        : "none", // No filter in dark mode
                  }}
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => window.open("mailto:hello@decise.io")}>
              Contact
            </Button>

            {mounted && resolvedTheme && data.darkMode && (
              <Button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
              >
                <img
                  className="h-6"
                  src={`/images/${resolvedTheme === "dark" ? "sun.svg" : "moon.svg"}`}
                  alt="Theme Toggle"
                  style={{
                    filter:
                      resolvedTheme === "light"
                        ? "invert(1) brightness(50%)" // Darken moon in light mode
                        : "none", // No filter in dark mode
                  }}
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;