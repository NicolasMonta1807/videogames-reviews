import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../utils/loginUtils'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import UserForm from '../components/UserForm'
import { sendAlert, sendConfirmation } from '../reducers/notificationReducer'

const Login = () => {
  const navigate = useNavigate()
  const user = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })

  const { handleLogin, loginData, loginError } = useLogin()

  useEffect(() => {
    if (loginData) {
      dispatch(sendConfirmation(`Logged in as ${user.username}`))
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      navigate('/')
    }
    if (loginError) {
      dispatch(sendAlert('Log in failed. Please check your username and password'))
    }
  }, [loginData, loginError])

  return (
    <Container fluid='md' className='my-auto vh-90 p-5'>
      <h1 className='text-center mb-3 p-10'>Login</h1>
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
