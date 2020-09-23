/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <h1 className="headline1">About {data.site.siteMetadata.title}</h1>
    <p className="body-1">
      Hi! This is my blog. I'm currently finishing up my degree in Computer
      Science. I'm still a noob in infosec and english is not my first language
      so please excuse any basic mistake in grammar. I will mostly be writing
      about security CTFs and books here, catch me on twitter at @bernardoseqsec
      for all the other stuff.
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
