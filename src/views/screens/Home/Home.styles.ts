import { IStyledImage } from "models/interfaces/Home.interfaces";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledFrontPage = styled.div.attrs({
    id: "portada"
}) <{ background: string; }>`
    ${tw`w-[100vw] h-screen flex items-end overflow-hidden`}
    background: url(${({ background }) => background}) no-repeat;
    background-size: cover;
    background-position: top center;
    flex-wrap: wrap;
`;

export const StyledContent = styled.div<{type?: string}>`
    ${tw`w-full`}
    ${({type}) => type === "characters" ? tw`flex justify-between` : ""}

    .heart {
        ${tw`flex items-end justify-center w-[33%]`}

        @media (max-width: 1024px) {
            ${tw`w-[50%]`}
        }
    }

    .preStart {
        ${tw`hidden`}

        @media (max-width: 1024px) {
            ${tw`flex`}
        }
    }

    .start {
        ${tw`w-[34%] flex justify-center items-center`}

        img {
            ${tw`h-[79px]`}
        }

        @media (max-width: 1024px) {
            ${tw`hidden`}
        }
    }

    .character {
        ${tw`flex items-end justify-center w-[33%]`}

        @media (max-width: 1024px) {
            ${tw`w-[50%]`}
        }
    }
`;

export const StyledImage = styled.img<IStyledImage>`
    ${({ type }) =>
        type === "Principal Banner"
            ? tw`w-[800px]`
            : type === "Character"
                ? tw`w-[360px]`
                : type === "others" 
                    ? tw`w-[400px]`
                    : tw`w-[400px]`
    }

    .preStart {
        ${({type}) => type === "Principal Banner" ? tw`my-16` : ""}
    }

    @media (max-width: 1024px){
        ${({ type }) =>
            type === "Principal Banner"
                ? tw`w-[300px]`
                : type === "Character"
                    ? tw`w-[500px]`
                    : type === "others" 
                        ? tw`w-[200px]`
                        : tw`w-full`
        }
    }
`;