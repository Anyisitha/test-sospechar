import { FC, Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/** Styles */
import {
    StyledCharactersMobileContainer, 
    StyledCharactersMobileImage, 
    StyledContent, 
    StyledContentImage, 
    StyledContentStartButton, 
    StyledFrontPage, 
    StyledPrincipalBannerContainer, 
    StyledPrincipalBannerImage, 
    StyledStartButtonContentImage, 
    StyledStartButtonImage
} from "./Home.styles";
/** Assets */
import BackgroundFrontPage from "assets/images/portada.jpg";
import PrincipalBannerDesktop from "assets/images/PrincipalBannerDesktop.svg";
/** Assets Mobile */
import CharactersMobile from "assets/images/CharactersFrontPage.svg";
import PrincipalBanner from "assets/images/SearchText.svg";
import StartButton from "assets/images/StartText.svg";

/**
 * @class Home - component with home screens for display.
 * @return {JSX.Element} - returning the DOM element containing the component's screen.
 */
const Home: FC = (): JSX.Element => {
  /** States */
  const [width, setWidth] = useState<number>(window.innerWidth);

  /** Effects */
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  /** Navigation */
  const navigate = useNavigate();

  return (
    <StyledFrontPage background={BackgroundFrontPage}>
      {width > 1024 ? (
        <Fragment>
          <StyledContent>
              <StyledContentImage
                src={PrincipalBannerDesktop}
                alt="Principal Banner"
              />
          </StyledContent>
          <StyledContentStartButton>
              <StyledStartButtonContentImage
                src={StartButton}
                alt="Start Test"
                onClick={() => navigate("/cover")}
              />
          </StyledContentStartButton>
        </Fragment>
      ) : (
        <Fragment>
            <StyledPrincipalBannerContainer>
                <StyledPrincipalBannerImage
                    src={PrincipalBanner}
                    alt="Principal Banner"
                />
            </StyledPrincipalBannerContainer>
            <StyledPrincipalBannerContainer>
                <StyledStartButtonImage
                    src={StartButton}
                    alt="Start Button"
                    onClick={() => navigate("/cover")}
                />
            </StyledPrincipalBannerContainer>
            <StyledCharactersMobileContainer>
                <StyledCharactersMobileImage
                    src={CharactersMobile}
                    alt="Characters mobile"
                />
            </StyledCharactersMobileContainer>
        </Fragment>
      )}
    </StyledFrontPage>
  );
};

export default Home;
