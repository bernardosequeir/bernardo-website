/* eslint-disable react/display-name */
import React from 'react';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from '../styles/layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'


export default ({ data }) => (
  <Layout style={css`width: 80% !important;`}>
    <div css={css`
      display:grid;
      place-items: center;
    `}>
      <h2
        //className={styles.headline}
        css={css`
          font-size: 4.6rem !important;
          line-height: inherit !important;
          display: inline-block;
          margin-top: 40px;
          margin-bottom: 30px !important;
          text-align: center;
          
        `}
      >
        Hi, I'm Bernardo. And I like to create websites.</h2>
      <h3 css={css`margin-bottom: 1rem!important; `} >This website houses blog posts about programming, web development, and all the other things I'll eventually decide to write about.</h3>
      <h3>Currently looking for work!</h3>
      <Link href="mailto:bernardosequeir@gmail.com" target="_blank">
        <button css={css`    
        box-shadow: -3px 5px white;
        background-color: rgba(255, 255, 255, 0.08); 
        padding: .6rem 1rem;
        border: 1px solid white;
        color: white;
        font-size: 1.5rem;`}>
          Toss me an email <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </button>
      </Link>
    </div>
  </Layout>
);


