/* eslint-disable react/display-name */
import React from 'react';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import styles from '../../styles/layout.module.scss'

export default ({ data }) => (
  <Layout>
    <div>
      <h3
        //className={styles.headline}
        css={css`
          display: inline-block;
          margin-top: 40px;
          margin-bottom: 0 !important;
        `}
      >
        Blog Posts
      </h3>
      <div css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
      `}>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => node.fields.slug.includes('portfolio'))
          .map(({ node }) => (
            <div key={node.id} className={styles.posts}>
              <Link
                to={node.fields.slug}
                css={css`
                text-decoration: none;
                color: inherit;
              `}
              >
                <h3
                  className={styles.subhead1}
                  css={css`
                  margin-bottom: 1rem};
                `}
                >
                  {node.frontmatter.projectTitle}
                </h3>
                <p className={styles.label}>{node.frontmatter.projectIntro}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            projectTitle
            projectIntro
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
