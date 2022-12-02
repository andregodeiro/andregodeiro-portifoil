import React from "react";
import { ProjContainer, ProjDescription, ProjImage, ProjTitle } from "./styles";

export const Project = ({ title, description, image }) => {
  return (
    <ProjContainer>
      <ProjTitle>{title}</ProjTitle>
      <ProjDescription>{description}</ProjDescription>
      <ProjImage src="https://i.imgur.com/GQNn5zh.png"></ProjImage>
    </ProjContainer>
  );
};
