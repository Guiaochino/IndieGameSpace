// This wil be the container for the listview of the games published in website
// This container contains (GameImage, GameName, GameDeveloper, GameDescription, Ratings)
import { GameListContainer, ImageContainer, GameName, GameDeveloper, GameDescription, Ratings } from "./GameListContainer.elements";

const gameListContainer = (props) => {
    return (

        <GameListContainer>
            <ImageContainer src={props.image} alt={props.gameName}/>
            <div>
                <GameName>{props.gameTitle}</GameName>
                <GameDeveloper>{props.developerName}</GameDeveloper>
                <GameDescription>{props.description}</GameDescription>
            </div>
            <Ratings>{props.ratings}</Ratings>
        </GameListContainer>

    )
};

export default gameListContainer;