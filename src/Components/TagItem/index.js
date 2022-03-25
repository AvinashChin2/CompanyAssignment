import {TagItemContainer,TagName1,TagName2} from './styledComponents'

const TagItem = props =>{
    const {tagDetails} =props
    const{tagId,tagName} = tagDetails
    
    return(
        <TagItemContainer>
            <TagName1>{tagName}</TagName1>
        </TagItemContainer>
    )
}
export default TagItem