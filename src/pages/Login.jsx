import { useEffect, useState } from 'react'
import { Form, Button, InputGroup, Container, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../utils/loginUtils'
import * as Yup from 'yup'
import { Formik } from 'formik'

const Login = () => {
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })

  const { handleLogin, loginData, loginError } = useLogin()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (loginData) {
      const token = loginData.login.value
      window.localStorage.setItem('token', token)
      navigate('/')
    }
  }, [loginData])

  useEffect(() => {
    if (loginError) {
      setError(true)
      setTimeout(() => setError(false), 5000)
    } else {
      setError(false)
    }
  }, [loginError])

  return (
    <Container fluid='md' className='my-auto vh-90 p-5'>

      <Alert key='danger' variant='danger' show={error}>
        Login failed. Please check your username and password.
      </Alert>

      <Formik
        validationSchema={validationSchema}
        onSubmit={handleLogin}
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
            <p>
              Not a member yet? <Link to='/register'>Sign up</Link>
            </p>
            <Button type='submit'>Login</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Login
