import Image from "next/image";
import React from "react";
import GradientImage from "@/assets/gradient-bg.jpg";

const BgGradient = () => {
  return <Image fill={true} alt="Gradient Background" src={GradientImage} />;
};

export default BgGradient;
