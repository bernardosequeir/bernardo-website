import { graphql } from "gatsby";

export const GET_TITLE = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;