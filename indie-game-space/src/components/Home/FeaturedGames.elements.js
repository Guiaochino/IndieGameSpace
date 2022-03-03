import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FeaturedSection = styled.div`
    padding: 100px 0 160 px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    margin-bottom: 50px;
`;

export const FeaturedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 960px) {
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const FeaturedHeading = styled.h1`
    color: #333333;
    font-size: 48px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const FeaturedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const FeaturedCard = styled(Link)`
    background: #0a5d64;
    box-shadow: 0 6px 20px rgba(61, 92, 87, 0.8);
    width: 280px;
    height: 500px;
    text-decoration: none; border-radius: 4px;

    &:nth-child(2) {
        margin: 24px;
    }

    &:hover {
        border-radius: 15px 80px;
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }

    @media screen and (max-width: 960px) {
        width: 90%;

        &:hover {
            transform: none;
        }
    }
`;

export const FeaturedCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    padding: 24px;
    align-items: center;
    color: #fff;
`;

export const FeaturedCardIcon = styled.div`
    margin: 24px 0;
`;

export const FeaturedCardPlan = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
`;

export const FeaturedCardCost = styled.h4`
    font-size: 40px;
`;

export const FeaturedCardLength = styled.p`
    font-size: 14px;
    margin-bottom: 24px;
`;

export const FeaturedCardFeatures = styled.li`
    margin: 16px 0 16px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a9b3c1;
`;

export const FeaturedCardFeature = styled.li`
    margin-bottom: 10px;
`;