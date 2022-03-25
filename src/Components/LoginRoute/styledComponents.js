import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f1f7ff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  border-radius: 8px;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
`
export const LogoImage = styled.img`
  width: 90px;
  height: 90px;
`
export const Span = styled.span`
  width: 134px;
  text-align: center;
  font-family: 'Rubik';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #171f46;
  font-weight: 400;
  margin-top: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const Label = styled.label`
  width: 66px;
  height: 16px;
  margin: 0 254px 8px 0;
  font-family: 'HKGrotesk';
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  color: #7e858e;
`
export const Input = styled.input`
  width: 320px;
  height: 40px;
  margin: 8px 0 0;
  padding: 8px 161px 8px 16px;
  border-radius: 2px;
  border: solid 1px #7e858e;
  background-color: #ffffff;
  outline: none;
  color: #171f46;
`
export const LoginButton = styled.button`
  width: 320px;
  height: 40px;
  margin-top: 30px;
  border-radius: 4px;
  background-color: #0b69ff;
  cursor: pointer;
  outline: none;
  font-family: 'Rubik';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  border: none;
  color: #ffffff;
`
export const Account = styled.span`
  width: 200px;
  height: 24px;
  font-family: 'HKGrotesk';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #171f46;
`
export const SignUp = styled.span`
  color: #0b69ff;
`
export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
