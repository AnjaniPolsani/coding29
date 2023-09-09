// Write your JS code here
import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onClickLogin = async () => {
    
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username:"rahul", password="rahul@2021"}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <h1>Please Login</h1>
        <button onClick={this.onClickLogin}>Login with sample creds</button>
      </>
    )
  }
}
export default Login
