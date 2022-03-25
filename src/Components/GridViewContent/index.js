import {Component} from 'react'
import DataComponent from '../DataComponent';
import { AiOutlineSearch } from "react-icons/ai";
import {ViewContainer,NotFoundImage,NoItemsContainer,CardListContainer,SearchPostContainer,SearchBoxContainer,SearchInput,ButtonPostContainer,WriteButton,ProfileImage,MainContent,MainHeading} from './styledComponents'

class GridViewContent extends Component{
    state={
        dataDetails:[],
        searchInput:'',
        isActive:false,
        activeOption:"",
    }

    componentDidMount(){
        this.getApiDetails()
    }

    getApiDetails=async()=>{
        const apiUrl = "https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts"
        const options ={
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
        }
        }
        const response= await fetch(apiUrl,options)
        const data = await response.json()
        console.log(data)
        if (response.ok){
            const updatedData = data.map(each=>({
                commentsCount : each.comments_count,
                postId:each.post_id,
                postedTime:each.posted_at,
                userId:each.posted_by.user_id,
                userName:each.posted_by.username,
                profilePic:each.posted_by.profile_pic,
                postContent:each.post_content,
                reactionsCount:each.reactions.reactions_count,
                tags:each.tags.map(each=>({tagId:each.tag_id,tagName:each.tag_name})),
                title:each.title
            }))
            
            this.setState({dataDetails:updatedData})
            console.log(updatedData)
        }
    }

    onChangeInput=event=>{
        this.setState({searchInput:event.target.value})
    }

    onClickApproveButton=(id)=>{
        const {isActive} = this.state
        this.setState(prevState=>({isActive:!prevState.isActive}))
        console.log(isActive)
    }

    render(){
        const {dataDetails,searchInput,isActive,activeOption} = this.state
        const searchResults = dataDetails.filter(each=>each.title.toLowerCase().includes(searchInput.toLowerCase()))
        const listLength= searchResults.length>0
        return(
            <ViewContainer>
                <SearchPostContainer>
                    <SearchBoxContainer>
                    <AiOutlineSearch size="20px"/>
                        <SearchInput type="search" placeholder="Search" value={searchInput} onChange={this.onChangeInput}/>
                    </SearchBoxContainer>
                    <ButtonPostContainer>
                        <WriteButton>Write Post</WriteButton>
                        <ProfileImage src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648020659/M_3x_a4aipn.png"/>
                    </ButtonPostContainer>
                </SearchPostContainer>
                <MainContent>
                    <MainHeading>Accept Requests</MainHeading>
                    <CardListContainer>
                        {listLength ? <>{searchResults.map(each=>(
                        <DataComponent trueDetails={each} key={each.postId} onClickApproveButton={this.onClickApproveButton} isActive={isActive}/>
                    ))}</>:<NoItemsContainer>
                        <NotFoundImage src="https://res.cloudinary.com/avinashchinthapally/image/upload/v1648231157/PngItem_1069282_eotpgj.png"/>
                        </NoItemsContainer>}
                    
                    </CardListContainer>
                </MainContent>
            </ViewContainer>
        )
    }
}
export default GridViewContent