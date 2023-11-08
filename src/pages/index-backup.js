import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Mentions, Who, Why, Contact, Projects, About, Maintenance } from 'components/landing';

const Index = () => {
  return (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Who />
    <Why />
    <Contact />
    <Mentions />
    <About />
  </Layout>
  )}
export default Index;
