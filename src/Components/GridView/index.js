
import {Component} from 'react'
import GridViewContent from '../GridViewContent'
import {GridContainer,LeftContainer,LogoImage,AllDomains,DomainContainer,Icon,Button,ListContainer,ListItem,SeeAllButton,ItemContainer,FollowButton,NumberContainer1,NumberContainer2,Number,NumberAndButton,NumberSpan,ListItem1,AllDomains1,RightContainer} from './styledComponents'

class GridView extends Component{
    state={
        isActive:false
    }

    onClickJavaFollow=()=>{
         const {isActive} = this.state
        this.setState(prevState=>({isActive:!prevState.isActive}))
        console.log(isActive)
    }

    onClickJabongFollow=()=>{
        const {isActive} = this.state
       this.setState(prevState=>({isActive:!prevState.isActive}))
       console.log(isActive)
   }


    onClickReactCancel=()=>{
        const {isActive} = this.state
       this.setState(prevState=>({isActive:!prevState.isActive}))
       console.log(isActive)
   }

        render(){
            const {isActive} = this.state
            const javaFollowText = isActive ? "Cancel" : "Follow"
            const JabongFollowText = isActive ? "Cancel" : "Follow"
            const CancelText = isActive ? "Follow" : "Cancel"
            return(
                <GridContainer>
                    <LeftContainer>
                        <LogoImage src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1647848747/iB_HUBSlogo_ylumwl.svg"/>
                        <AllDomains>ALL DOMAINS</AllDomains>
                        <DomainContainer>
                            <AllDomains>FOLLOWING DOMAINS </AllDomains>
                            <Button type="button"><Icon src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648059579/Arrow_3x_jlqmip.png"/></Button>
                        </DomainContainer>
                        <ListContainer>
                            <ListItem>Video Editing</ListItem>
                            <ListItem>3D Animation</ListItem>
                            <ListItem>UI/UX designers </ListItem>
                        </ListContainer>
                        <SeeAllButton type="button">See all</SeeAllButton>
                        <DomainContainer>
                            <AllDomains>SUGGEST DOMAINS </AllDomains>
                            <Button type="button"><Icon src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648059579/Arrow_3x_jlqmip.png"/></Button>
                        </DomainContainer>
                        <ListContainer>
                            <ItemContainer>
                                <ListItem>Javascript</ListItem>
                                <FollowButton type="button" onClick={this.onClickJavaFollow}>{javaFollowText}</FollowButton>
                            </ItemContainer>
                            <ItemContainer>
                                <ListItem>Jabong</ListItem>
                                <FollowButton type="button" onClick={this.onClickJabongFollow}>{JabongFollowText}</FollowButton>
                            </ItemContainer>
                            <ItemContainer>
                                <ListItem>React</ListItem>
                                <FollowButton type="button" onClick={this.onClickReactCancel}>{CancelText}</FollowButton>
                            </ItemContainer>
                        </ListContainer>
                        <SeeAllButton type="button" >See all</SeeAllButton>
                        <DomainContainer>
                            <AllDomains>MY POSTS </AllDomains>
                            <NumberAndButton>
                            <NumberContainer1><Number>6</Number></NumberContainer1>
                            <Button type="button"><Icon src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648062297/Icon_3x_chufjs.png"/></Button>
                            </NumberAndButton>  
                        </DomainContainer>
                        <DomainContainer>
                            <AllDomains>YOUR PENDINGS </AllDomains>
                            <Button type="button"><Icon src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648059579/Arrow_3x_jlqmip.png"/></Button>
                        </DomainContainer>
                        <ListContainer>
                            <ItemContainer>
                                <ListItem>Vido Editing</ListItem>
                                <NumberContainer2><NumberSpan>1</NumberSpan></NumberContainer2>
                            </ItemContainer>
                            <ItemContainer>
                                <ListItem>3D Animation</ListItem>
                                <NumberContainer2><NumberSpan>6</NumberSpan></NumberContainer2>  
                            </ItemContainer>  
                            <ItemContainer>
                                <ListItem1>3D Animation</ListItem1>
                                <NumberContainer2><NumberSpan>6</NumberSpan></NumberContainer2>  
                            </ItemContainer> 
                        </ListContainer>
                        <SeeAllButton type="button">See all</SeeAllButton>
                        <DomainContainer>
                            <AllDomains1>PENDING FOR REVIEW </AllDomains1>
                            <NumberAndButton>
                            <NumberContainer2><NumberSpan>6</NumberSpan></NumberContainer2>
                            <Button type="button"><Icon src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648062297/Icon_3x_chufjs.png"/></Button>
                            </NumberAndButton>  
                        </DomainContainer>
                        <DomainContainer>
                            <AllDomains1>REQUESTS</AllDomains1>
                            <NumberAndButton>
                            <NumberContainer2><NumberSpan>20</NumberSpan></NumberContainer2>
                            <Button type="button"><Icon src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648062297/Icon_3x_chufjs.png"/></Button>
                            </NumberAndButton>  
                        </DomainContainer>
                    </LeftContainer>
                    <RightContainer>
                        <GridViewContent/>
                    </RightContainer>
                </GridContainer>
            )
        }
        
}
export default GridView