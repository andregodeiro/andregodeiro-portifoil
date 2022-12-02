import React from "react";
import {
  Container,
  Description,
  Title,
  TitleContainer,
} from "../Introduction/styles";
import { Project } from "../ProjectCard/Project";

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
        <Project
          title={"connectLab"}
          description={
            "O objetivo do projeto era criar uma aplicação que integrasse os dispositivos smart do usuário, facilitando e unificando o seu gerenciamento. O usuário pode criar uma conta, parear seus dispositivos e gerenciá-los."
          }
          image={"Imagem"}
        />
      </Container>
    </div>
  );
};
