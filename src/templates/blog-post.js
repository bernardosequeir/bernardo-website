import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from '../styles/layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/core';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Layout>
      <div>
        <h3 className={styles.subheading1} >{post.frontmatter.title}</h3>
        <div
          className={`body1  ${styles.blogPost}`}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className={styles.topButtonWrapper}>
          <button onClick={backToTop} id={styles.topButton} title="Go to top"> <FontAwesomeIcon icon={faLevelUpAlt} css={css`transform: scaleX(-1);`} /> Back to top <FontAwesomeIcon icon={faLevelUpAlt} css={css`transform: scaleX(1);`} /> </button>
        </div>
      </div>
    </Layout>
  );
};


export default BlogPost
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
