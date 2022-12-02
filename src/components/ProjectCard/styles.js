import styled from "styled-components";

export const ProjContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 42px;
`;

export const ProjTitle = styled.h5`
  color: white;
  font-size: 30px;
`;

export const ProjDescription = styled.span`
  color: white;
  font-size: 24px;
  width: 70%;
  text-align: justify;
`;

export const ProjCarousel = styled.div`
  max-width: 1000px;

  img {
    width: 1000px;
    height: 500px;
  }
`;

export const ProjImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
