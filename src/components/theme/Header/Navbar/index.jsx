import React from 'react';
import { Link } from 'gatsby';
import { ContainerNavbar } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Logo } from './styles';
import { contentfulNavbar } from 'data/contentful-navbar';

const Navbar = ({navbarData = contentfulNavbar(), sticky}) => (
  <Wrapper className={sticky ? "sticky" : "notsticky"} as={ContainerNavbar}>
    <Link to="/" >
       <Logo>
       {sticky ?  <img src={navbarData.logo.file.url} /> : null}
      </Logo> 
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
