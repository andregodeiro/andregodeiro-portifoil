import React from "react";
import { ReactLogo } from "../ReactLogo/ReactLogo";
import {
  Link,
  LinksList,
  Logo,
  LogoContainer,
  NavbarContainer,
} from "./styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <ReactLogo />
        <Logo>André Godeiro</Logo>
      </LogoContainer>
      <LinksList>
        <Link>Quem sou eu</Link>
        <Link>Currículo</Link>
        <Link>Projetos</Link>
      </LinksList>
    </NavbarContainer>
  );
};
