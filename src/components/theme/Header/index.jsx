import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay, stickyCSS } from './styles';
import Sticky from 'react-sticky-el';

export const Header = () => {
  const [sidebar, toggle] = useState(false);
  const sticklyStyleCSS = {
    background: "white",
    borderBottom: "solid",
    borderWidth: "thin",
    borderColor: "lightgray"
  };

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
          <Sticky stickyStyle={sticklyStyleCSS}>
            <Navbar />
          </Sticky>
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
