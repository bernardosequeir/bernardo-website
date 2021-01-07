import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from '../components/layout.module.scss'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1 className="title" >{post.frontmatter.title}</h1>
        <div
          className={`body1  ${styles.blogPost}`}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
