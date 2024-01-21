import React from "react";
import { House } from "../../models";
import { GradientBar } from "../GradientBar";
import "./HouseBadge.css";

interface HouseBadgeProps extends House {
  className?: string;
}

export const HouseBadge = (props: HouseBadgeProps) => {
  const { name, animal, founder, houseColours, className } = props;

  return (
    <div className={`card-container ${className}`}>
      <div className="flex-row justify-between align-center mb-2">
        <h3>{name}</h3>
        <span className="font-xs">{animal}</span>
      </div>
      <GradientBar className="mb-2" colors={houseColours || ""} />
      <div className="font-sm">
        Founder: <b>{founder}</b>
      </div>
    </div>
  );
};
