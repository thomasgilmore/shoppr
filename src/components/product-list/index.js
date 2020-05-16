import gql from "graphql-tag";
import { graphql } from "react-apollo";

const PRODUCTS_QUERY = gql`
  query {
    productsList {
      items {
        id
        createdAt
        name
        price
        description
        image {
          downloadUrl
        }
      }
    }
  }
`;
export default PRODUCTS_QUERY;