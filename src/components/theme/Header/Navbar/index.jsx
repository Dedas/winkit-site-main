import React from 'react';
import { Link } from 'gatsby';
import { ContainerNavbar } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Logo } from './styles';
import { contentfulNavbar } from 'data/contentful-navbar';
import Sticky from 'react-sticky-el';

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
      <Link to="/" >
        <Logo>
            <img src={navbarData.logo.file.url} />
        </Logo> 
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  </Sticky>
);

export default Navbar;
