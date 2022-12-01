import React from "react";
import {
  Container,
  Description,
  Title,
  TitleContainer,
} from "../Introduction/styles";

export const Projects = () => {
  return (
    <div>
      <Container>
        <TitleContainer>
          <Title>Projetos</Title>
        </TitleContainer>
        <Description>
          Aqui estão alguns projetos desenvolvidos por mim. Para ter uma visão
          mais completa de cada trabalho você pode dar uma passadinha no meu
          repositório do GitHub.
        </Description>
      </Container>
    </div>
  );
};
