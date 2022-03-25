import {CardContainer,Title,PostContent,TagsContainer,ProfileApproveContainer,ProfileImageNameContainer,ProfileImageLogo,ProfleName,ApproveButton,TagsAndCountContainer,CommentsCountContainer,CommensCount} from './styledComponents'
import { BiMessageDetail } from "react-icons/bi";
import TagItem from '../TagItem'
const DataComponent =props=>{
    const {trueDetails} = props
    const {commentsCount,tags,postId,postedTime,userId,userName,profilePic,postContent,reactionsCount,tagId,tagName,title}=trueDetails

    return(
        <CardContainer>
            <Title>{title}</Title>
            <PostContent numberOfLines={2}>{postContent}</PostContent>
            <TagsAndCountContainer>
            <TagsContainer>
                {tags.map(each=>(
                    <TagItem key={each.tagId} tagDetails={each}/>
                ))}
            </TagsContainer>
            <CommentsCountContainer>
                    <BiMessageDetail size="20px" color="#0b69ff"/>
                    <CommensCount>{commentsCount}</CommensCount>
            </CommentsCountContainer>
            </TagsAndCountContainer>
            
            <ProfileApproveContainer>
                <ProfileImageNameContainer>
                    <ProfileImageLogo src={profilePic}/>
                    <ProfleName>{userName}</ProfleName>
                </ProfileImageNameContainer>
                <ApproveButton>Approve</ApproveButton>
            </ProfileApproveContainer>
        </CardContainer>
    )
}
export default DataComponent