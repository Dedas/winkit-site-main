import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
      <AnchorLink offset="64" href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <AnchorLink href="#mentions">Mentions</AnchorLink>
      <AnchorLink href="#about">About</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
