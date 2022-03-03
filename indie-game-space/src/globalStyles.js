import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: boreder-box;
    margim: 0;
    padding: 0;
    font-family: 'Montserrat'. sans-serif;
}
`;

export const Container = styled.div`
    width: 80%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 991px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

export const Button = styled.button`
    order-radius: 4px;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
    white-space: nowrap;
    padding: &{({big}) (big ? '12px 63px' : '10px 10px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    utline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
        wodth: 100%;
    }
`;

export default GlobalStyle;