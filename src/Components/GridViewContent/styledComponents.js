import styled from 'styled-components'

export const ViewContainer=styled.div `
display:flex;
flex-direction:column;

`
export const SearchPostContainer=styled.div`
border: 1px solid #d7dfe9;
padding:20px;
display:flex;
justify-content:space-evenly;
`
export const SearchBoxContainer=styled.div `
border:1px solid #d7dfe9;
padding:10px 15px 10px 15px;
background-color:transparent;
border-radius:5px;
align-items:center;
display:flex;
width:60%;
`
export const SearchInput=styled.input `
border:none;
outline:none;
background-color:transparent;
color:rgba(126, 133, 142, 0.6);
font-family:"HKGrotesk";
font-size:14px;
margin-left:13px;
opacity:80%;
width:100%;
`
export const ButtonPostContainer=styled.div `
display:flex;
align-items:center;
`
export const WriteButton=styled.button `
display:flex;
background-color:#0b69ff;
font-family:HKGrotesk-SemiBold;
font-size:15px;
color:#ffffff;
outline:none;
border:none;
cursor:pointer;
padding:10px 15px 10px 15px;
border-radius:5px;
`
export const ProfileImage=styled.img `
height:40px;
width:40px;
margin-left:20px;
cursor:pointer;
`
export const MainContent=styled.div `
display:flex;
flex-direction:column;
margin-left:20px;
align-items:flex-start;
`
export const MainHeading=styled.h1 `
font-family:HKGrotesk;
font-size:32px;
font-weight:500;
color:#171f46;
`
export const CardListContainer=styled.ul`
display:flex;
align-items:center;
list-style-type:none;
padding:10px;
flex-wrap:wrap;
justify-content:space-evenly;
`
export const NoItemsContainer=styled.div `
display:flex;
flex-direction:row;
justify-content:center;
width:100%;
height:100%;
`
export const NotFoundImage=styled.img `
height:300px;
width:1000px
text-align:center;
align-self:center;
margin-left:50px;
`