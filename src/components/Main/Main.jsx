import React from "react";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import {
  ContainerImage,
  ContainerMain,
  ContainerTitle,
  SubTitle,
  Title,
} from "./styles";

export const Main = () => {
  return (
    <ContainerMain>
      <ContainerTitle>
        <Title>Olá!</Title>
        <Title>Eu sou André Godeiro</Title>
        <SubTitle>Desenvolvedor Front-End Junior</SubTitle>
      </ContainerTitle>
      <ContainerImage>
        <ProfileImage />
      </ContainerImage>
    </ContainerMain>
  );
};
