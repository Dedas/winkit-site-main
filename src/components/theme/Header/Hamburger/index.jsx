import React from 'react';
import { Wrapper, Bar } from './styles';
import Sticky from 'react-sticky-el';

const Hamburger = ({ sidebar, toggle }) => (
  <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </Wrapper>
);

export default Hamburger;
