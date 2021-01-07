/* eslint-disable react/display-name */
import React from 'react';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from '../components/layout.module.scss'

export default ({ data }) => (
  <Layout>
    <div>
      <h2
        //className={styles.headline}
        css={css`
          display: inline-block;
          margin-top: 40px;
        `}
      >
        Blog Posts
      </h2>
      {data.allMarkdownRemark.edges
        .filter(({ node }) => node.fields.slug.includes('complete'))
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
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p className={styles.label}>{node.excerpt}</p>
            </Link>
          </div>
        ))}
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
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
