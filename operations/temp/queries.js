import { gql } from '@apollo/client';

/*
  Get countries
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

export const GET_TEST_DATA = gql`
  query Tests {
    tests {
      id
      name
      isActive
    }
  }
`;
