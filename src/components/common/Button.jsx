import React from "react";
import { Button } from "../../styles/components/button";
import { useState } from "react";

const ContactBt = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Button
      btnhovered={isHovered.toString()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </Button>
  );
};

export default ContactBt;
