import { FC } from "react";
import { StyledContainer } from "./Error.styles";
/** Assets */
import Background from "assets/images/cover/BackgroundCover.png";
import ErrorImage from "assets/images/Error.svg";
import { useNavigate } from "react-router-dom";

const Error: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const goToPage = () => navigate("/final");
  return (
    <StyledContainer background={Background}>
      <img src={ErrorImage} alt="Error" className="h-screen" onClick={goToPage}/>
    </StyledContainer>
  );
};

export default Error;
