import { FC } from "react";
/** Styles */
import { StyledContent, StyledFrontPage, StyledImage } from "./Home.styles";
/** Assets */
import BackgroundFrontPage from "assets/images/portada.jpg";
import TextCover from "assets/images/text_cover.png";
import StartCover from "assets/images/start_cover.png";
import Character from "assets/images/character_cover.png";
import Heart from "assets/images/hart.png";

/**
 * @class Home - component with home screens for display.
 * @return {JSX.Element} - returning the DOM element containing the component's screen.
 */
const Home: FC = (): JSX.Element => {
    return (
        <StyledFrontPage background={BackgroundFrontPage}>
            <StyledContent>
                <div className="flex justify-center mt-32">
                    <StyledImage
                        src={TextCover}
                        alt="principal text"
                        type="Principal Banner"
                    />
                </div>
                <div className="flex justify-center preStart">
                    <StyledImage
                        src={StartCover}
                        alt="Start button"
                        type="others"
                    />
                </div>
            </StyledContent>
            <StyledContent type="characters">
                <div className="heart">
                    <StyledImage
                        src={Heart}
                        alt="Heart"
                        type="Heart"
                    />
                </div>
                <div className="start">
                    <StyledImage
                        src={StartCover}
                        alt="Start button"
                        type="others"
                    />
                </div>
                <div className="character">
                    <StyledImage
                        src={Character}
                        alt="Character"
                        type="Character"
                    />
                </div>
            </StyledContent>
        </StyledFrontPage>
    );
}

export default Home;