import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginPageBgContainer,
  LoginFormContainer,
  LoginFormLogo,
  Label,
  Input,
  ShowPasswordLabelContainer,
  SubmitButton,
  Checkbox,
  ShowPassword,
  ErrorMsg,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    showError: false,
    errorMsg: '',
    userName: '',
    password: '',
  }

  successResponse = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    history.replace('/')
  }

  failureResponse = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  validateLoginDetails = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const data = {username: userName, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData)

    if (response.ok) {
      this.successResponse(responseData.jwt_token)
    } else {
      this.failureResponse(responseData.error_msg)
    }
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeUserName = e => {
    this.setState({userName: e.target.value})
  }

  onChangeShowPassword = e => {
    const {checked} = e.target
    const changeInputType = document.getElementById('password')

    if (checked) {
      changeInputType.type = 'text'
    } else {
      changeInputType.type = 'password'
    }
  }

  render() {
    const {userName, password, showError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginPageBgContainer>
        <LoginFormContainer onSubmit={this.validateLoginDetails}>
          <LoginFormLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Label htmlFor="userName">USERNAME</Label>
          <Input
            id="userName"
            type="text"
            value={userName}
            onChange={this.onChangeUserName}
            placeholder="Username"
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            id="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <ShowPasswordLabelContainer>
            <Checkbox
              id="checkbox"
              type="checkbox"
              onChange={this.onChangeShowPassword}
            />
            <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
          </ShowPasswordLabelContainer>
          <SubmitButton type="submit">Login</SubmitButton>
          {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </LoginFormContainer>
      </LoginPageBgContainer>
    )
  }
}

export default LoginForm
