import React from "react";
import { MenuContainer, MenueList, StyledLink } from "../styles/layout/header";

const Menue = () => {
  return (
    <MenuContainer>
      <MenueList>
        <StyledLink to="/">Home</StyledLink>
      </MenueList>
      <MenueList>
        <StyledLink to="/about">About</StyledLink>
      </MenueList>
      <MenueList>
        <StyledLink to="/projects">Projects</StyledLink>
      </MenueList>
      <MenueList>
        <StyledLink to="/services">Services</StyledLink>
      </MenueList>
      <MenueList>
        <StyledLink to="/contact">Contact</StyledLink>
      </MenueList>
      <MenueList>
        <StyledLink to="/careers">Careers</StyledLink>
      </MenueList>
      <MenueList>
        <StyledLink to="/blog">Blog</StyledLink>
      </MenueList>
    </MenuContainer>
  );
};

export default Menue;
