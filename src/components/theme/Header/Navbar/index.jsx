import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Logo } from './styles';
import contentfulNavbar from 'data/contentful-navbar';

const Navbar = ({navbarData = contentfulNavbar()}) => (
  <Wrapper as={Container}>
    <Link to="/" >
      <Logo>
        <img src={navbarData.logo.file.url} />
      </Logo>
    </Link>
    <Link style = {{flex: "auto"}} to="/">{navbarData.title}</Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
