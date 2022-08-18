import styled from "styled-components";
import tw from "twin.macro";

export const StyledContent = styled.div<{
    background: string;
}>`
    ${tw`w-screen h-screen flex justify-center items-end`}
    background: url(${({background}) => background}) no-repeat;
    background-size: 100% 100%;
    background-position: top center;
`
