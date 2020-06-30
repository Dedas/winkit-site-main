import React from 'react';
import { Link } from 'gatsby';
import { ContainerNavbar } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Logo } from './styles';
import { contentfulNavbar } from 'data/contentful-navbar';

export const Navbar = ({navbarData = contentfulNavbar()}) => (
  <Wrapper as={ContainerNavbar}>
    <Link to="/" >
       <Logo>
          <img src={navbarData.logo.file.url} />
      </Logo> 
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
