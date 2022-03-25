import styled from 'styled-components'

export const CardContainer=styled.li`
list-style-type:none;
border:1px solid #d7dfe9;
display:flex;
flex-direction:column;
align-items:flex-start;
width:250px;
height:320px;
border-radius:8px;
margin-bottom:20px;
padding:20px;
cursor:pointer;
`
export const Title=styled.h1 `
font-family:HKGrotesk;
font-size:15px;
font-weight:600;
color:#171f46;
overflow: hidden;
text-align:left;
margin-right:40px;
overflow:hidden;
-webkit-line-clamp: 3;
display: -webkit-box;
-webkit-box-orient: vertical;
`
export const PostContent=styled.p `
font-family:HKGrotesk;
font-size:12px;
font-weight:500;
color:#171f46;
overflow: hidden;
text-align:left;
margin-right:40px;
text-overflow: ellipsis;
width:60%;
-webkit-line-clamp: 3;
display: -webkit-box;
-webkit-box-orient: vertical;
`
export const TagsContainer=styled.div `
display:flex;
align-items:center;
`
export const ProfileApproveContainer=styled.div `
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
`
export const ProfileImageNameContainer=styled.div `
display:flex;
align-items:center;
margin-top:10px;
`
export const ProfileImageLogo=styled.img `
height:30px;
width:30px;
border-radius:20px;
`
export const ProfleName=styled.p `
font-family:HKGrotesk;
font-size:14px;
font-weight:500;
color:#7e858e;
letter-spacing: normal;
margin-left:10px;
`
export const ApproveButton=styled.button `
  font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #ffffff;
  border-radius: 4px;
  background-color: #0b69ff;
  border:none;
  outline:none;
  padding:8px;
  cursor:pointer;
`
export const TagsAndCountContainer=styled.div `
display:flex;
align-items:center;
width:100%;
justify-content:space-between;
`
export const CommentsCountContainer=styled.div `
display:flex;
align-items:center;
`
export const CommensCount=styled.p `
font-family: HKGrotesk;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  color:#171f46;
  margin-left:5px;
`
