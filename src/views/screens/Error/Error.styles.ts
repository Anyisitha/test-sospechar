import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div<{background: string;}>`
    ${tw`w-screen h-screen flex items-center justify-center`}
    background: url(${({background}) => background}) no-repeat;
    background-size: 100% 100%;
    background-position: top center;
`;