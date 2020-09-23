/* eslint-disable react/display-name */
import React from 'react';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <div>
      <h1
        className="headline"
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Blog Posts
      </h1>
      {data.allMarkdownRemark.edges
        .filter(({ node }) => node.fields.slug.includes('complete'))
        .map(({ node }) => (
          <div key={node.id} className="posts">
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                className="subhead-1"
                css={css`
                  margin-bottom: 1rem};
                `}
              >
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p className="label">{node.excerpt}</p>
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
