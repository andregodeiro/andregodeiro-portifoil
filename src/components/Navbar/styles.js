import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: white;
  padding: 5px;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const Logo = styled.span`
  font-size: 28px;
  font-weight: 400;
  color: #08366e;
  padding: 10px;
`;

export const LinksList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  justify-content: end;
  margin-right: 30px;
`;

export const Link = styled.li`
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  border-radius: 12px;

  :hover {
    background-color: #08366e;
    color: white;
    transition: 350ms;
  }
`;
