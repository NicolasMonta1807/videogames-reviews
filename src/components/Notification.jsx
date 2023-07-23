import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Notification = () => {
  const { message, error } = useSelector(({ notification }) => notification)

  if (message === null) {
    return null
  }

  return (
    <Alert
      variant={error ? 'danger' : 'success'}
      className='m-3 text-center'
    >
      {message}
    </Alert>
  )
}

export default Notification
