import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Set background color based on resolved theme (or assume dark mode if not mounted)
  const cardBgColor =
    !mounted || resolvedTheme === "dark"
      ? "bg-slate-800 hover:bg-slate-700 text-white"
      : "bg-slate-50 hover:bg-slate-100 text-black";

  return (
    <div
      className={`w-full p-4 rounded-lg transition-all ease-out duration-300 transform hover:scale-105 link ${cardBgColor}`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-60 text-xl">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      </p>
    </div>
  );
};

export default ServiceCard;