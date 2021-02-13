import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';

const Index = () => {
  return (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
  )}
export default Index;
