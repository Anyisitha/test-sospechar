import { IStyledImage } from "models/interfaces/Home.interfaces";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledFrontPage = styled.div.attrs({
    id: "portada"
}) <{ background: string; }>`
    ${tw`w-[100vw] h-screen flex items-end overflow-hidden`}
    background: url(${({ background }) => background}) no-repeat;
    background-size: 100% 100%;
    background-position: top center;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        background-size: cover;
    }
`;

export const StyledContent = styled.div`
    ${tw`flex justify-center items-end w-full`}
`;

export const StyledContentStartButton = styled.div`
    ${tw`w-full absolute bottom-[10%] flex justify-center`}
`;

export const StyledContentImage = styled.img`
    ${tw`w-[80%]`}
`;

export const StyledStartButtonContentImage = styled.img`
    ${tw`w-[30%]`}
`;

export const StyledPrincipalBannerContainer = styled.div`
    ${tw`flex justify-center w-full`}
`;

export const StyledPrincipalBannerImage = styled.img`
    ${tw`w-[80%]`}
`;

export const StyledStartButtonImage = styled.img`
    ${tw`w-[60%]`}
`;


export const StyledCharactersMobileContainer = styled.div`
    ${tw`flex justify-center w-full`}
`;

export const StyledCharactersMobileImage = styled.img`
`;