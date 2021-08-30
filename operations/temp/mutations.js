import { gql } from '@apollo/client';

/*
  Get countries
 */

export const CREATE_TEST = gql`
  mutation Test($name: String, $isActive: Boolean) {
    createTest(input: { data: { name: $name, isActive: $isActive } }) {
      test {
        name
        isActive
      }
    }
  }
`;
