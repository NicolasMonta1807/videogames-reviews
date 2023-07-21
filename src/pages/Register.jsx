import { useState, useEffect } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import UserForm from '../components/UserForm'
import { useRegister } from '../utils/loginUtils'

const Register = () => {
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })

  const { handleRegister, registerData, registerError } = useRegister()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (registerData) {
      navigate('/login')
    }
    if (registerError) {
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
  }, [registerData, registerError])

  return (
    <Container fluid='md' className='my-auto vh-90 p-5'>
      <h1 className='text-center mb-3 p-10'>Sign Up</h1>
      {registerError && (
        <Alert key='danger' variant='danger' show={error}>
          {`Sign up failed. ${registerError.message}.`}
        </Alert>
      )}
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
