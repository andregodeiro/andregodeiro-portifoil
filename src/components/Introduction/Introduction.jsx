import React from "react";
import {
  IntroContainer,
  IntroDescription,
  IntroTitle,
  IntroTitleContainer,
} from "./styles";

export const Introduction = () => {
  return (
    <IntroContainer>
      <IntroTitleContainer>
        <IntroTitle>Quem é o Andre?</IntroTitle>
      </IntroTitleContainer>
      <IntroDescription>
        Um desenvolvedor apaixonado por tecnologia e inovação. Focado em
        FrontEnd, possuo muita afinidade com HTML5, CSS3 e Javascript, além da
        biblioteca React. Tenho interesse em UI/UX Design e sempre tento aplicar
        esses conceitos nos meus projetos, pretendendo, também, me aprofundar
        mais nisso no futuro. Ainda não possuo experiência e estou em busca de
        ingressar profissionalmente na área.
      </IntroDescription>
    </IntroContainer>
  );
};
