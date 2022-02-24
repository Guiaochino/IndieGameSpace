import React from "react";
import { GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { FeaturedSection, FeaturedWrapper, FeaturedHeading, FeaturedContainer,
        FeaturedCard, FeaturedCardInfo, FeaturedCardIcon, FeaturedCardPlan,
        FeaturedCardCost, FeaturedCardLength, FeaturedCardFeatures, 
        FeaturedCardFeature } from "./FeaturedGames.elements";

function FeaturedGames() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <FeaturedSection>
                <FeaturedWrapper>
                    <FeaturedHeading>Featured Games</FeaturedHeading>
                    <FeaturedContainer>
                        <FeaturedCard to='/game-link'>
                            <FeaturedCardInfo>
                                <FeaturedCardIcon>
                                    <GiRock />
                                </FeaturedCardIcon>
                                <FeaturedCardPlan>Game Developer</FeaturedCardPlan>
                                <FeaturedCardCost>Game Title</FeaturedCardCost>
                                <FeaturedCardLength>Game Genre</FeaturedCardLength>
                                <FeaturedCardFeatures>
                                    <FeaturedCardFeature>Game Info 1</FeaturedCardFeature>
                                    <FeaturedCardFeature>Game Info 2</FeaturedCardFeature>
                                    <FeaturedCardFeature>Game Info 3</FeaturedCardFeature>
                                </FeaturedCardFeatures>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                        <FeaturedCard to='/game-link'>
                            <FeaturedCardInfo>
                                <FeaturedCardIcon>
                                    <GiRock />
                                </FeaturedCardIcon>
                                <FeaturedCardPlan>Game Title</FeaturedCardPlan>
                                <FeaturedCardCost>Game Genre</FeaturedCardCost>
                                <FeaturedCardLength>Game Something idk yet</FeaturedCardLength>
                                <FeaturedCardFeatures>
                                    <FeaturedCardFeature>Game Info 1</FeaturedCardFeature>
                                    <FeaturedCardFeature>Game Info 2</FeaturedCardFeature>
                                    <FeaturedCardFeature>Game Info 3</FeaturedCardFeature>
                                </FeaturedCardFeatures>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                        <FeaturedCard to='/game-link'>
                            <FeaturedCardInfo>
                                <FeaturedCardIcon>
                                    <GiRock />
                                </FeaturedCardIcon>
                                <FeaturedCardPlan>Game Title</FeaturedCardPlan>
                                <FeaturedCardCost>Game Genre</FeaturedCardCost>
                                <FeaturedCardLength>Game Something idk yet</FeaturedCardLength>
                                <FeaturedCardFeatures>
                                    <FeaturedCardFeature>Game Info 1</FeaturedCardFeature>
                                    <FeaturedCardFeature>Game Info 2</FeaturedCardFeature>
                                    <FeaturedCardFeature>Game Info 3</FeaturedCardFeature>
                                </FeaturedCardFeatures>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                    </FeaturedContainer>
                </FeaturedWrapper>
            </FeaturedSection>
        </IconContext.Provider>
    );
}

export default FeaturedGames;