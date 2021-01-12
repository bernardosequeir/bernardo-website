/* eslint-disable react/display-name */
import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import styles from '../styles/layout.module.scss';
import NavBar from './NavBar';

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
    <div className={styles.layoutWrapper}>


      <div className={styles.main}>
        <NavBar title={data.site.siteMetadata.title}/>
        {children}
      </div >
    </div>
  );
};
