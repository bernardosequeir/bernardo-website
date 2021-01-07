/* eslint-disable react/display-name */
import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styles from './layout.module.scss';

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
    <div className={styles.wrapper}>


      <div className={styles.main}>
        <Link to="/">
          <h2
            className={styles.subheading2}
            css={css`
            display: inline-block;
          `}
          >
            {data.site.siteMetadata.title}
          </h2>
        </Link>
        <Link
          className={styles.button}
          to="/about/"
          css={css`
          float: right;
        `}
        >
          About
      </Link>
        {children}
      </div >
    </div>
  );
};
