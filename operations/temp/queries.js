import { gql } from "@apollo/client";

/*
  Get user account
 */

export const GET_COUNTRIES = gql`
    query Countries {
        countries {
            code
            name
            emoji
        }
    }
`;
