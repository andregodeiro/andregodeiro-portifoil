import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const Title = styled.h3`
  color: white;
  font-size: 36px;
`;

export const Description = styled.span`
  color: white;
  font-size: 26px;
  width: 70%;
  text-align: justify;
`;
