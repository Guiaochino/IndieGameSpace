import React from "react";
import { Button } from "../globalStyles";
import { GiCrystalBars, GiCutDiamond, GiRock, GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { FeaturedSection, FeaturedWrapper, FeaturedHeading, FeaturedContainer,
        FeaturedCard, FeaturedCardInfo, FeaturedCardIcon, FeaturedCardPlan,
        FeaturedCardCost, FeaturedCardLength, FeaturedCardFeatures, 
        FeaturedCardFeature } from "./Featured.elements";

function Featured() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <FeaturedSection>
                <FeaturedWrapper>
                    <FeaturedHeading>Featured Games</FeaturedHeading>
                    <FeaturedContainer>
                        <FeaturedCard to='/sign-up'>
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
                                <Button primary> &nbsp;Go to Game&nbsp; </Button>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                        <FeaturedCard to='/sign-up'>
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
                                <Button primary> &nbsp;Go to Game&nbsp; </Button>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                        <FeaturedCard to='/sign-up'>
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
                                <Button primary> &nbsp;Go to Game&nbsp; </Button>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                    </FeaturedContainer>
                </FeaturedWrapper>
            </FeaturedSection>
        </IconContext.Provider>
    );
}

export default Featured;