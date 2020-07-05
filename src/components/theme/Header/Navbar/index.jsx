import React from 'react';
import { ContainerNavbar } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Logo } from './styles';
import { contentfulNavbar } from 'data/contentful-navbar';
import Sticky from 'react-sticky-el';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const stickyStyleCSS = {
  background: "#ffffff",
  borderBottom: "solid",
  borderWidth: "thin",
  borderColor: "#ffffff",
  boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.11)",
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
