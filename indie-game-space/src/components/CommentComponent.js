// This Component is a Comment Template for every comment in the game in the data base

// Import Dependencies
// Icons
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import { commentContainer, upperDisplay, lowerDisplay, imageContainer, textContainer, nameStyle, messageStyle,upvoteContainer, downvoteContainer } from "./Comment.elements"


// CommentDisplay contains the following
// Image, Name, message - upper
// upvote, number of upvote, downvote, number of downvote - lower

// This is a comment DISPLAY
const CommentDisplay = (props) => {
    return(
        <commentContainer>

            <upperDisplay>
                <imageContainer src="" alt=""/>
                <textContainer>
                    <nameStyle></nameStyle>
                    <messageStyle></messageStyle>
                </textContainer>
            </upperDisplay>

            <lowerDisplay>
                <upvoteContainer>
                    <FaRegThumbsUp />
                </upvoteContainer>
                <downvoteContainer>
                    <FaRegThumbsDown />
                </downvoteContainer>
            </lowerDisplay>
        </commentContainer>
    );
}


// CommentForms contains the following
// image, name, message - uper
// comment button - lower

// This is for comment FORMS
const CommentForm = () => {
    // return(
    //     // TODO: Structure for Forms when Commenting
    // )
}

export default { CommentDisplay, CommentForm };