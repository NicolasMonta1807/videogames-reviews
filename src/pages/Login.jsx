import { useEffect, useState } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../utils/loginUtils'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import UserForm from '../components/UserForm'

const Login = () => {
  const navigate = useNavigate()
  const user = useSelector(({ user }) => user)

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })

  const { handleLogin, loginData, loginError } = useLogin()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (loginData) {
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      navigate('/')
    }
    if (loginError) {
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }, [loginData, loginError])

  return (
    <Container fluid='md' className='my-auto vh-90 p-5'>
      <h1 className='text-center mb-3 p-10'>Login</h1>
      {loginError && (
        <Alert key='danger' variant='danger' show={error}>
          Login Failed. Please check your username and password.
        </Alert>
      )}
      <UserForm
        validationSchema={validationSchema}
        handleSubmit={handleLogin}
        submitText='Login'
      />
      <p>
        Not a member yet? <Link to='/register'>Sign up</Link>
      </p>
    </Container>
  )
}

export default Login
