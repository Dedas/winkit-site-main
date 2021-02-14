import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Who, Why, Contact, Projects } from 'components/landing';

const Index = () => {
  return (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Who />
    <Why />
    <Contact />
  </Layout>
  )}
export default Index;
