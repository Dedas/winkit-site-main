import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Who, Why, Contact, Projects, About } from 'components/landing';

const Index = () => {
  return (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Who />
    <Why />
    <Contact />
    <About />
  </Layout>
  )}
export default Index;
