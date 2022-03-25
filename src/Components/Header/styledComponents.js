import styled from 'styled-components'

export const HeaderContainer= styled.div `
height:20vh;
background-color:#fbfbfb;
`
export const NavContainer=styled.nav `
display:flex;
justify-content:space-between;
width:100%;
padding-top:8px;
padding-bottom:8px;
position:fixed;
border: solid 1px #d7dfe9;
background-color: #ffffff;
`
export const ImageLogo=styled.img `
height:70px;
width:110px;
cursor:pointer;
`
export const LogoTitleContainer=styled.div `
display:flex;
align-items:center;
`
export const Title=styled.h1 `
  font-family: HKGrotesk;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #171f46;
  margin-left:15px;
  letter-spacing: normal;
`
export const OptionsContainer=styled.div `
display:flex;
align-items:center;
margin-right:20px;
`
export const OptionTitle1=styled.h1 `
  font-family: HKGrotesk;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #0b69ff;
  cursor:pointer;
  margin-right:25px;
`
export const OptionTitle2=styled.h1 `
  font-family: HKGrotesk;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #7e858e;
  margin-right:75px;
  cursor:pointer;
`
export const ProfileContainer=styled.div `
display:flex;
align-items:center;
margin-right:20px;
`
export const ProfileName=styled.h1 `
  font-family: HKGrotesk;
  font-size: 18px;
  font-weight: 500;
  
  font-style: normal;
  color: #171f46;
  `
export const ProfileImage=styled.img `
height:40px;
width:40px;
margin-left:20px;
cursor:pointer;
`
export const SelectContainer=styled.select `
background-color:#fbfbfb;
border: solid 1px #d7dfe9;
height:30px;
width:100px;
cursor:pointer;
outline:none;
`
export const Option=styled.option `
font-family: HKGrotesk;
font-size: 12px;
font-weight: 500;
padding:10px;
`