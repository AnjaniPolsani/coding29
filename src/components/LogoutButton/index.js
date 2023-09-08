// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('./login')
  }
  return <button onClick={onClickLogout}>Logout</button>
}
export default withRouter(LogoutButton)
