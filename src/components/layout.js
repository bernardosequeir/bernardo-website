/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../styles/layout.module.scss';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  const [themePreference, setThemePreference] = useState('Dark')

  useEffect(() => {
    const theme = localStorage.getItem('themePreference')
    if (!theme) {
      setThemePreference('Dark')
      localStorage.setItem('themePreference', themePreference)
    }
    console.log(theme);
  }, [])

  const toggleTheme = () => {
    if (themePreference === 'Dark') {
      setThemePreference('Light')
      localStorage.setItem('themePreference', themePreference)
    } else if (themePreference === 'Light') {
      setThemePreference('Dark')
      localStorage.setItem('themePreference', themePreference)
    }
    console.log(themePreference);
  }
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

  // TODO: SEPARATE THE HEADER FROM THE BODY
  return (
    <div className={themePreference === 'Dark' ? `${styles.layoutWrapper} ${styles.dark}` : `${styles.layoutWrapper} ${styles.light}`}>


      <NavBar title={data.site.siteMetadata.title} toggle={toggleTheme} />
      <div className={styles.main}>
        {children}
      </div >
    </div>
  );
};

export default Layout