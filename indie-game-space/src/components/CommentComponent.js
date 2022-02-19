// This Component is a Comment Template for every comment in the game in the data base

// Import Dependencies
// Icons
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import { CommentContainer, UpperDisplay, LowerDisplay, ImageContainer, TextContainer, NameStyle, MessageStyle, UpvoteContainer, Count, DownvoteContainer, FormField } from "./Comment.elements"


// CommentDisplay contains the following
// Image, Name, message - upper
// upvote, number of upvote, downvote, number of downvote - lower

// This is a comment DISPLAY
const CommentDisplay = (props) => {
    return(
        <CommentContainer>
            
            <UpperDisplay>

                <ImageContainer src={props.image} alt="default"/>

                <TextContainer>
                    <NameStyle></NameStyle>
                    <MessageStyle></MessageStyle>
                </TextContainer>

            </UpperDisplay>

            <LowerDisplay>

                <UpvoteContainer>
                    <FaRegThumbsUp />
                    <Count></Count>
                </UpvoteContainer>

                <DownvoteContainer>
                    <FaRegThumbsDown />
                    <Count></Count>
                </DownvoteContainer>

            </LowerDisplay>
        </CommentContainer>
    );
}


// CommentForms contains the following
// image, name, message - uper
// comment button - lower

// This is for comment FORMS
const CommentForm = (props) => {
    return(
        <CommentContainer>

            <UpperDisplay>
                
                <ImageContainer src="" alt=""/>

                <FormField>

                    <input type="text" maxlength="25" palceholder="Name" />
                    <textarea rows="" cols=""/>

                </FormField>

            </UpperDisplay>

            <LowerDisplay>
                <button>Comment</button>
            </LowerDisplay>

        </CommentContainer>
    );
}

const Comment = { CommentDisplay, CommentForm }

export default Comment;