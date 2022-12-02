import React from "react";
import {
  Container,
  Description,
  Title,
  TitleContainer,
} from "../Introduction/styles";
import { Project } from "../ProjectCard/Project";
import { HeadContainer } from "./styles";

export const Projects = () => {
  return (
    <div>
      <Container>
        <HeadContainer>
          <TitleContainer>
            <Title>Projetos</Title>
          </TitleContainer>
          <Description>
            Aqui estão alguns projetos desenvolvidos por mim. Para ter uma visão
            mais completa de cada trabalho você pode dar uma passadinha no meu
            repositório do GitHub.
          </Description>
        </HeadContainer>
        <Project
          title={"connectLab"}
          description={
            "O objetivo do projeto era criar uma aplicação que integrasse os dispositivos smart do usuário, facilitando e unificando o seu gerenciamento. O usuário pode criar uma conta, parear seus dispositivos e gerencia-los da forma que desejar."
          }
          img1={"https://i.imgur.com/GQNn5zh.png"}
          img2={"https://i.imgur.com/7o7qrtG.png"}
          img3={"https://i.imgur.com/dimaBQE.png"}
          img4={"https://i.imgur.com/dimaBQE.png"}
          img5={"https://i.imgur.com/fkEjP1r.png"}
        />

        <Project
          title={"knowledgeDB"}
          description={
            "Esse foi o meu primeiro projeto mais completo. A aplicação consiste em um banco de dados onde o usuário pode criar cards com dicas sobre programação. Dentre as funcionalidades estão a criação e edição de cards, assim como a possibilidade de excluí-los. Além disso, existe um contador que mostra a quantidade de cards cadastrados e uma barra de busca."
          }
          img1={"https://i.imgur.com/cetXVgn.png"}
          img2={"https://i.imgur.com/CAbMo3Q.png"}
          img3={"https://i.imgur.com/CtLfdUf.png"}
        />

        <Project
          title={"LiveWeather"}
          description={
            "Um projeto simples que mostra o clima da cidade desejada. Além da temperatura são exibidas as máximas e mínimas, além da umidade do ar e a condição das nuvens."
          }
          img1={"https://i.imgur.com/rJE2mbH.png"}
          img2={"https://i.imgur.com/NgLYe7i.png"}
        />
      </Container>
    </div>
  );
};
