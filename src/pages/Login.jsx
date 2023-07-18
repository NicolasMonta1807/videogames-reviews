import React, { useEffect } from 'react'
import { Form, Button, InputGroup, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import * as formik from 'formik'
import * as yup from 'yup'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../services/loginService'

const Login = () => {
  const { Formik } = formik
  const navigate = useNavigate()

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })

  const [login, result] = useMutation(LOGIN)

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value
      window.localStorage.setItem('token', token)
      navigate('/')
    }
  }, [result.data])

  const handleLogin = (values) => {
    login({ variables: { ...values } })
  }

  return (
    <Container fluid='md' className='my-auto vh-90 p-5'>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => handleLogin(values)}
        initialValues={{
          username: '',
          password: ''
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId='validationFormikUsername'>
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className='mb-3' controlId='validationFormikPassword'>
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <p>Not a member yet? <Link to='/register'>Sign up</Link> </p>
            <Button type='submit'>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Login
