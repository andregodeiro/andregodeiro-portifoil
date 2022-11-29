import styled from "styled-components";

export const IconsGrid = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
`;

export const IconAnchor = styled.a`
  cursor: default;
`;

export const Icon = styled.img`
  cursor: pointer;
  border-radius: 50px;

  :hover {
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  }
`;
