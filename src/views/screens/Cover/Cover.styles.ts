import styled from "styled-components";
import tw from "twin.macro";

export const StyledBackgroundCover = styled.div<{background: string}>`
    ${tw`w-screen h-screen`}
    background: url(${({background}) => background}) no-repeat;
    background-size: 100% 100%;
    background-position: top center;

    @media (max-width: 1200px) {
        ${tw`flex justify-center items-end`}
        background-size: cover;
        flex-wrap: wrap;
    }
`;

export const StyledContent = styled.div`
    ${tw`flex justify-center items-end`}
`;

export const StyledContentNextButton = styled.div`
    ${tw`absolute flex justify-center bottom-[15vh] w-full cursor-pointer`}

    
`;

export const StyledImageDesktop = styled.img`
    ${tw`w-[163.8vh]`}
`;

export const StyledImageNextImageDesktop = styled.img`
    ${tw`w-[44vh]`}
`;

export const StyledContentMobile = styled.div`

`;

export const StyledContentTableMobile = styled.img`

`;