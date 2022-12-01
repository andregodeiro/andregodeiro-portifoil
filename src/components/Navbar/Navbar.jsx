import React from "react";
import { ReactLogo } from "../ReactLogo/ReactLogo";
import {
  Link,
  LinksList,
  Logo,
  LogoContainer,
  NavbarContainer,
  ResumeAnchor,
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
        <Link>
          {" "}
          <ResumeAnchor
            href="https://drive.google.com/file/d/1JblhUa3n7TczfCGnjG-qr4KE6cu0Lhnj/view?usp=share_link"
            target="_blank"
          >
            Currículo
          </ResumeAnchor>
        </Link>
        <Link>Projetos</Link>
      </LinksList>
    </NavbarContainer>
  );
};
