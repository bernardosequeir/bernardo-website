/* eslint-disable react/display-name */
import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, Link, graphql } from 'gatsby';
import '../styles/global.scss';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="main">
      <Link to="/">
        <h3
          className="display-1"
          css={css`
            display: inline-block;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        className="button"
        to="/about/"
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  );
};
