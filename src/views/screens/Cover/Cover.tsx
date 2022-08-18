import { FC, Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/** Styles */
import {
  StyledBackgroundCover,
  StyledContent,
  StyledContentMobile,
  StyledContentNextButton,
  StyledContentTableMobile,
  StyledImageDesktop,
  StyledImageNextImageDesktop,
} from "./Cover.styles";
/** Assets */
import Background from "assets/images/cover/BackgroundCover.png";
import Resources from "assets/images/cover/Resource.svg";
import NextButton from "assets/images/cover/NextSlide.svg";
import TableMobile from "assets/images/cover/TableMobile.svg";
import Characters from "assets/images/CharactersFrontPage.svg";

/**
 * @class Cover
 * @return {JSX.Element} - This class is the screen where it displays the cover or description of the test.
 */
const Cover: FC = (): JSX.Element => {
  /** States */
  const [width, setWidth] = useState<number>(window.innerWidth);

  /** Effects */
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  /** Navigate */
  const navigate = useNavigate();

  /** Handlers */
  const goToInstructions = () => {
    navigate("/instructions");
  };

  return (
    <StyledBackgroundCover background={Background}>
      {width > 1200 ? (
        <Fragment>
          <StyledContent>
            <StyledImageDesktop src={Resources} alt="resource" />
          </StyledContent>
          <StyledContentNextButton>
            <StyledImageNextImageDesktop
              src={NextButton}
              alt="next"
              onClick={goToInstructions}
            />
          </StyledContentNextButton>
        </Fragment>
      ) : (
        <Fragment>
          <div className="w-full">
            <StyledContentMobile className="w-full">
              <StyledContentTableMobile
                src={TableMobile}
                alt="Table content"
                onClick={goToInstructions}
              />
            </StyledContentMobile>
          </div>
          <div className="w-full">
            <StyledContentMobile>
              <StyledContentTableMobile src={Characters} alt="Table content" />
            </StyledContentMobile>
          </div>
        </Fragment>
      )}
    </StyledBackgroundCover>
  );
};

export default Cover;
