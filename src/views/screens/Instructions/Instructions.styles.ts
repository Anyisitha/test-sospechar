import styled from "styled-components";
import tw from "twin.macro";

export const StyledBackground = styled.div<{background: string}>`
    ${tw`w-screen h-screen flex items-end justify-center`}
    background: url(${({background}) => background}) no-repeat;
    background-size: 100% 100%;
    background-position: top center;

    @media (max-width: 1200px) {
        background-size : cover;
    }
`;

export const StyledContentMobile = styled.div`
    ${tw`flex justify-center gap-8 absolute w-[50%] top-[73vh]`}

    @media (min-width: 1200px) {
        ${tw`bottom-[15vh]`}
    }   

    @media (min-width: 1024px) and (max-width: 1200px) {
        ${tw`top-[70vh]`}
    }
`;

export const StyledButtonsImage = styled.img``;

export const StyledTableContent = styled.div`
    ${tw`w-full h-full flex justify-center items-end`}
`;

export const StyledImageTable = styled.img``;