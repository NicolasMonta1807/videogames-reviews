import { Formik } from 'formik'
import { Form, InputGroup, Button } from 'react-bootstrap'

const UserForm = ({ validationSchema, handleSubmit, submitText }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{
        username: '',
        password: ''
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched, setTouched }) => (
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
                isInvalid={!!errors.username && touched.username}
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
                isInvalid={!!errors.password && touched.password}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button type='submit'>{submitText}</Button>
        </Form>
      )}
    </Formik>
  )
}

export default UserForm
