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

export const REGISTER = gql`
  mutation registerMutation($username: String!, $password: String!) {
    createUser (
      username: $username,
      password: $password
    ) {
      username,
      id
    }
  }
`
