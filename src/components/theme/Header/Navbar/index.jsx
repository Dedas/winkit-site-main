import React from 'react';
import { Link } from 'gatsby';
import { ContainerNavbar } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Logo } from './styles';
import { contentfulNavbar } from 'data/contentful-navbar';
import Sticky from 'react-sticky-el';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const stickyStyleCSS = {
  background: "white",
  borderBottom: "solid",
  borderWidth: "thin",
  borderColor: "lightgray",
  zIndex: 3
};

export const Navbar = ({navbarData = contentfulNavbar()}) => (
  <Sticky stickyStyle={stickyStyleCSS}>
    <Wrapper as={ContainerNavbar}>
        <Logo>
          <AnchorLink href="#intro"><img src={navbarData.logo.file.url} /></AnchorLink>
        </Logo> 
      <NavbarLinks desktop />
    </Wrapper>
  </Sticky>
);

export default Navbar;
