import styled from "styled-components";
import tw from "twin.macro";

export const StyledBackgroundQuestions = styled.div<{ background: string; isLoading: boolean; }>`
  ${tw`w-screen h-screen flex items-end`}
  ${({isLoading}) => isLoading ? tw`justify-center` : tw`justify-end`}
  background: url(${({ background }) => background}) no-repeat;
  background-size: 100% 100%;
  background-position: top center;

  @media (max-width: 1199px) {
    background-size: cover;
  }
`;

export const StyledImagesTable = styled.img`
  ${tw`w-[auto] h-screen`}

  @media (max-width: 1199px) {
    ${tw`w-auto h-screen`}
  }
`;

export const StyledResponsesContainer = styled.div`
  ${tw`flex absolute top-[50vh] left-[25vw]`}
  @media (max-width: 1199px) {
    ${tw`flex absolute top-[50vh] left-[-5vh]justify-center items-center w-full`}
  }
`;

export const StyledResponsesImage = styled.img`
  ${tw`w-[50vh]`}
  @media (min-width: 1200px) {
    ${tw`w-[200px]`}
  }
`;
