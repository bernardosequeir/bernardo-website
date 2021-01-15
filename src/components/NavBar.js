import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/layout.module.scss'
const NavBar = ({ title, toggle }) => {


  return (
    <nav className={styles.navBar}>
      <div className={styles.name}>

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
      </div>
      <div className={styles.buttons}>
        <Link to="/portfolio/"><p className={styles.button}>Portfolio</p></Link>
        <Link to="/blog-posts/"><p className={styles.button}>Blog Posts</p></Link>
        {/*         <button className={`${styles.button} ${styles.darkMode}`} onClick={toggle}> <FontAwesomeIcon icon={faSun} /> </button>
 */}      </div>
      {/*   <div className={styles.size}>
        <p className={styles.button}> <FontAwesomeIcon icon={faSearchPlus} /> </p>
        <p className={styles.button} css={css`padding-left: 10px`}> <FontAwesomeIcon icon={faSearchMinus} /> </p>
      </div> */}
    </nav>

  )

}


export default NavBar   