import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import UserForm from '../components/UserForm'
import { useRegister } from '../utils/loginUtils'
import { sendAlert, sendConfirmation } from '../reducers/notificationReducer'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })

  const { handleRegister, registerData, registerError } = useRegister()

  useEffect(() => {
    if (registerData) {
      dispatch(sendConfirmation('Thank you for signing up. Now you can log in.'))
      navigate('/login')
    }
    if (registerError) {
      dispatch(sendAlert(registerError.message))
    }
  }, [registerData, registerError])

  return (
    <Container fluid='md' className='my-auto vh-90 p-5'>
      <h1 className='text-center mb-3 p-10'>Sign Up</h1>
      <UserForm
        validationSchema={validationSchema}
        handleSubmit={handleRegister}
        submitText='Sign Up'
      />
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </Container>
  )
}

export default Register
