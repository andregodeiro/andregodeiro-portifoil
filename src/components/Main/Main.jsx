import React from "react";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import {
  ContainerImage,
  ContainerIntroduction,
  ContainerMain,
  ContainerTitle,
  SubTitle,
  Title,
} from "./styles";

export const Main = () => {
  return (
    <ContainerMain>
      <ContainerIntroduction>
        <ContainerTitle>
          <Title>Olá!</Title>
          <Title>Eu sou André Godeiro</Title>
          <SubTitle>Desenvolvedor Front-End Junior</SubTitle>
        </ContainerTitle>
        <SocialMedia />
      </ContainerIntroduction>
      <ContainerImage>
        <ProfileImage />
      </ContainerImage>
    </ContainerMain>
  );
};
