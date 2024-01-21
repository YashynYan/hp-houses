import React from "react";
import "./GradientBar.css";

interface GradientBarProps {
  colors: string;
  className?: string;
}

export const GradientBar = (props: GradientBarProps) => {
  const { colors, className } = props;
  const [startColor, endColor] = colors ? colors.split(" and ") : [];

  const gradientFormula = `linear-gradient(to right, ${
    startColor ? startColor : "white"
  } , ${endColor ? endColor : "black"})`;
  return (
    <div
      className={`gradient-bar ${className}`}
      style={{ backgroundImage: gradientFormula }}
    />
  );
};
