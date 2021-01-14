import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styles from '../styles/layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Portfolio = ({ data }) => {
  const portfolio = data.markdownRemark
  return (
    <Layout>
      <div>
        <h3 className={styles.subheading1} >{portfolio.frontmatter.projectTitle}</h3>
        <p>
          {portfolio.frontmatter.projectIntro}
        </p>
        <Link to={portfolio.frontmatter.projectLink} target="_blank">
          <button id={styles.portfolioAppButton}>
            Check it out  <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>

      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
     frontmatter {
            projectTitle
            projectIntro
            projectLink
          }
          fields {
            slug
          }
    }
  }
`;

export default Portfolio