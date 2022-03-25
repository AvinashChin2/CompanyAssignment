
import {HeaderContainer,NavContainer,ImageLogo,LogoTitleContainer,Title,OptionsContainer,OptionTitle1,OptionTitle2,ProfileContainer,ProfileName,ProfileImage,SelectContainer,Option}from './styledComponents'

const Header=()=>{

        return(
            <HeaderContainer>
                <NavContainer>
                    <LogoTitleContainer>
                        <ImageLogo src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1647848747/iB_HUBSlogo_ylumwl.svg" alt="Logo Image"/>
                        <Title>Reporting Portal</Title>
                    </LogoTitleContainer>
                    <OptionsContainer>
                        <OptionTitle1>Assigned to me</OptionTitle1> 
                        <OptionTitle2>My Observations</OptionTitle2>
                        <ProfileContainer>
                            <ProfileName>Satya</ProfileName>
                            <ProfileImage src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648020659/M_3x_a4aipn.png"/>
                        </ProfileContainer>
                        <SelectContainer>
                        <Option>Grid View</Option>
                        <Option>Table View</Option>
                    </SelectContainer>
                    </OptionsContainer>
                </NavContainer>
                
            </HeaderContainer>
        )
    
}
export default Header