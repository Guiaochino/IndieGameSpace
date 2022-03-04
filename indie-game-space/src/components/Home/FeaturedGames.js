import React from "react";
import { GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { FeaturedSection, FeaturedWrapper, FeaturedHeading, FeaturedContainer,
        FeaturedCard, FeaturedCardInfo, FeaturedCardIcon, FeaturedCardPlan,
        FeaturedCardCost, FeaturedCardLength, FeaturedCardFeatures, 
        FeaturedCardFeature, ImgIcon } from "./FeaturedGames.elements";

function FeaturedGames() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <FeaturedSection>
                <FeaturedWrapper>
                    <FeaturedHeading>Featured Games</FeaturedHeading>
                    <FeaturedContainer>
                        <FeaturedCard to='/gameProfile'>
                            <FeaturedCardInfo>
                                <FeaturedCardIcon>
                                    <ImgIcon src='https://cdn.cloudflare.steamstatic.com/steam/apps/897730/capsule_616x353.jpg?t=1636537260' />
                                </FeaturedCardIcon>
                                <FeaturedCardPlan>FJRD Interactive</FeaturedCardPlan>
                                <FeaturedCardCost> Among Trees </FeaturedCardCost>
                                <FeaturedCardLength> Adventure, Indie, Simulation </FeaturedCardLength>
                                <FeaturedCardFeatures>
                                    <FeaturedCardFeature> Escape to an enchanting,   </FeaturedCardFeature> 
                                    <FeaturedCardFeature> living sandbox surrounded by </FeaturedCardFeature>
                                    <FeaturedCardFeature> wildlife and nature. </FeaturedCardFeature>
                                </FeaturedCardFeatures>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                        <FeaturedCard to='/gameProfile'>
                            <FeaturedCardInfo>
                                <FeaturedCardIcon>
                                <ImgIcon src='https://cdn.cloudflare.steamstatic.com/steam/apps/268910/capsule_616x353.jpg?t=1589281999' />
                                </FeaturedCardIcon>
                                <FeaturedCardPlan> Studio MDHR  </FeaturedCardPlan>
                                <FeaturedCardCost> Cuphead </FeaturedCardCost>
                                <FeaturedCardLength>Action, Indie</FeaturedCardLength>
                                <FeaturedCardFeatures>
                                    <FeaturedCardFeature> Cuphead is a classic run </FeaturedCardFeature>
                                    <FeaturedCardFeature> and gun action game heavily </FeaturedCardFeature>
                                    <FeaturedCardFeature> focused on boss battles. </FeaturedCardFeature>
                                </FeaturedCardFeatures>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                        <FeaturedCard to='/gameProfile'>
                            <FeaturedCardInfo>
                                <FeaturedCardIcon>
                                <ImgIcon src='https://cdn.akamai.steamstatic.com/steam/apps/304430/capsule_616x353.jpg?t=1605518780' />
                                </FeaturedCardIcon>
                                <FeaturedCardPlan> Playdead </FeaturedCardPlan>
                                <FeaturedCardCost> INSIDE </FeaturedCardCost>
                                <FeaturedCardLength> Action, Adventure, Indie </FeaturedCardLength>
                                <FeaturedCardFeatures>
                                    <FeaturedCardFeature> Hunted and alone, a boy finds   </FeaturedCardFeature>
                                    <FeaturedCardFeature> himself drawn into the </FeaturedCardFeature>
                                    <FeaturedCardFeature> center of a dark project. </FeaturedCardFeature>
                                </FeaturedCardFeatures>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                        <FeaturedCard to='/gameProfile'>
                            <FeaturedCardInfo>
                                <FeaturedCardIcon>
                                <ImgIcon src='https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg?t=1579096091' />
                                </FeaturedCardIcon>
                                <FeaturedCardPlan> Toby Fox </FeaturedCardPlan>
                                <FeaturedCardCost> Undertale </FeaturedCardCost>
                                <FeaturedCardLength> Indie, RPG </FeaturedCardLength>
                                <FeaturedCardFeatures>
                                    <FeaturedCardFeature> UNDERTALE! The RPG game      </FeaturedCardFeature>
                                    <FeaturedCardFeature> where you don't </FeaturedCardFeature>
                                    <FeaturedCardFeature> have to destroy anyone. </FeaturedCardFeature>
                                </FeaturedCardFeatures>
                            </FeaturedCardInfo>
                        </FeaturedCard>

                        <FeaturedCard to='/gameProfile'>
                            <FeaturedCardInfo>
                                <FeaturedCardIcon>
                                <ImgIcon src='https://cdn.akamai.steamstatic.com/steam/apps/224760/header.jpg?t=1572375251' />
                                </FeaturedCardIcon>
                                <FeaturedCardPlan> Polytron Corporation </FeaturedCardPlan>
                                <FeaturedCardCost> Fez </FeaturedCardCost>
                                <FeaturedCardLength> Indie </FeaturedCardLength>
                                <FeaturedCardFeatures>
                                    <FeaturedCardFeature> Gomez is a 2D creature    </FeaturedCardFeature>
                                    <FeaturedCardFeature> living in a 2D world. </FeaturedCardFeature>
                                    <FeaturedCardFeature> Or is he?  </FeaturedCardFeature>
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