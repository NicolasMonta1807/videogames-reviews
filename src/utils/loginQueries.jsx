import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation loginMutation($username: String!, $password: String!) {
    login (
      username: $username,
      password: $password
    ) {
      value
    }
  }
`
