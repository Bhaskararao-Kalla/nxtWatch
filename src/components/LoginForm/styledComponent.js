import styled from 'styled-components'

export const LoginPageBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 320px;
  max-height: 45vh;
  padding: 20px;
  padding-bottom: 40px;
  box-shadow: 12px 12px 55px rgb(220, 220, 220);
  //   filter: drop-shadow(12px 12px 55px rgb(220, 220, 220));
  border-radius: 5px;
`
export const LoginFormLogo = styled.img`
  height: 36px;
  width: 118px;
  align-self: center;
  margin-bottom: 15px;
`
export const Label = styled.label`
  font: bold 13px 'Roboto';
  color: #cccccc;
  margin-bottom: 4px;
`

export const Input = styled.input`
  border: 2px solid #cccccc;
  color: #383838;
  border-radius: 4px;
  padding-right: 10px;
  padding-left: 10px;
  height: 36px;
  margin-bottom: 10px;
  outline: none;
`

export const ShowPasswordLabelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Checkbox = styled.input`
  height: 14px;
  width: 14px;
`

export const ShowPassword = styled(Label)`
  color: #212121;
  font: 500 13px 'Roboto';
`
export const SubmitButton = styled.button`
  height: 36px;

  outline: none;
  cursor: pointer;
  border: none;
  background-color: #3b82f6;
  border-radius: 6px;
  color: #ffffff;
  margin-top: 0px;
  margin-top: 16px;
`

export const ErrorMsg = styled.p`
  font: 400 12px 'Roboto';
  color: #ff0b37;
  margin: 0px;
`
