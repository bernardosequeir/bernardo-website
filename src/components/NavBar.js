import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/layout.module.scss'
const NavBar = ({ title }) => {


  return (
    <nav className={styles.navBar}>
      <Link to="/">
        <h2
          className={styles.subheading2}
          css={css`
            display: inline-block;
            font-size: 1.0rem;
          `}
        >
          {title}
        </h2>
      </Link>
      <Link to="/blog-posts/"><p className={styles.button}>Blog Posts</p></Link>
      <Link to="/portfolio/"><p className={styles.button}>Portfolio</p></Link>
      <p className={styles.button}> <FontAwesomeIcon icon={faSun} /> </p>
      <div className={styles.size}>
        <p className={styles.button}> <FontAwesomeIcon icon={faSearchPlus} /> </p>
        <p className={styles.button} css={css`padding-left: 10px`}> <FontAwesomeIcon icon={faSearchMinus} /> </p>
      </div>
    </nav>

  )

}


export default NavBar   