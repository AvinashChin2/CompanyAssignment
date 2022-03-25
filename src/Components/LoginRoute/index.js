import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  FormContainer,
  LogoImage,
  Span,
  InputContainer,
  LoginButton,
  Account,
  SignUp,
  Label,
  Input,
  ErrorMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  renderSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  renderSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <Label htmlFor="username">USERNAME</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <Label htmlFor="password">PASSWORD</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.renderSubmitSuccess(data.jwt_token)
    } else {
      this.renderSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LogoImage src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1647848747/iB_HUBSlogo_ylumwl.svg" />
          <Span>Hi there, login</Span>
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          <Account>
            Don’t have an account?
            <SignUp>Signup</SignUp>
          </Account>
        </FormContainer>
      </LoginContainer>
    )
  }
}
export default LoginRoute
