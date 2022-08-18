import { FC, Fragment, useEffect, useState } from "react";
/** Styles */
import {
  StyledBackgroundQuestions,
  StyledImagesTable,
  StyledResponsesContainer,
  StyledResponsesImage,
} from "./Questions.styles";
/** Assets */
import Background from "assets/images/cover/BackgroundCover.png";
import YesResponse from "assets/images/Questions/YesResponse.svg";
import NoResponse from "assets/images/Questions/NoResponse.svg";
/** Data */
import { question } from "./data";
/** Interfaces */
import { IResponseProps } from "models/interfaces/Questions.interfaces";
import Question1 from "views/questions/Question1/Question1";
import Question2 from "views/questions/Question2/Question2";
import Question3 from "views/questions/Question3/Question3";
import Question4 from "views/questions/Question4/Question4";
import Question5 from "views/questions/Question5/Question5";
import Question6 from "views/questions/Question6/Question6";
import Question7 from "views/questions/Question7/Question7";
import Question8 from "views/questions/Question8/Question8";
import Question9 from "views/questions/Question9/Question9";
import Question10 from "views/questions/Question10/Question10";
import Loading from "views/questions/Loading/Loading";
import { useNavigate } from "react-router-dom";
import Error from "../Error";

/**
 * @class Questions
 * @return {JSX.Element} - returning the Questions' screen.
 */
const Questions: FC = (): JSX.Element => {
  const navigate = useNavigate();
  /** States */
  const [questionNumber, setQuestionNumber] = useState(1);
  const [realQuestion, setRealQuestion] = useState<any | undefined>({});
  const [responses, setResponses] = useState<Array<IResponseProps>>([]);

  /** Effects */
  useEffect(() => {
    setRealQuestion(
      question.find((item: any) => item.question_id === questionNumber)
    );
  }, [questionNumber]);

  /** Handlers */
  const saveResponses = (response: "yes" | "no") => {
    console.log(response)
    const obj: IResponseProps = {
      question: questionNumber,
      response: response === "yes" ? true : false,
    };

    responses.push(obj);

    setResponses(responses);

    let nextNumber = questionNumber + 1;

    if (nextNumber < 12) {
      setQuestionNumber(nextNumber);
    }
  };

  const goToNextPage = () => {
    let responsesToTest = responses.filter((item: any) => !item.response);
    console.log(responsesToTest)
    if(responsesToTest.length === 10) {
      setQuestionNumber(12);
    } else {
      navigate("/success");
    }
  }

  return (
    <StyledBackgroundQuestions background={Background} isLoading={questionNumber === 11 && true}>
      {/* <StyledImagesTable src={realQuestion.table} /> */}
        {
          questionNumber === 1 
            ? <Question1 saveResponse={saveResponses}/>
            : questionNumber === 2
              ? <Question2 saveResponse={saveResponses}/>
              : questionNumber === 3 
                ? <Question3 saveResponse={saveResponses}/>
                : questionNumber === 4 
                  ? <Question4 saveResponse={saveResponses}/>
                  : questionNumber === 5 
                    ? <Question5 saveResponse={saveResponses}/>
                    : questionNumber === 6
                      ? <Question6 saveResponse={saveResponses}/>
                      : questionNumber === 7
                        ? <Question7 saveResponse={saveResponses}/>
                        : questionNumber === 8
                          ? <Question8 saveResponse={saveResponses}/>
                          : questionNumber === 9
                            ? <Question9 saveResponse={saveResponses}/>
                            : questionNumber === 10
                              ? <Question10 saveResponse={saveResponses}/>
                              : questionNumber === 11
                                ? <Loading goToPage={goToNextPage}/>
                                : <Error/>
        }
      <StyledResponsesContainer>
        {/* <StyledResponsesImage
          src={YesResponse}
          alt="yes response"
          onClick={() => saveResponses("yes")}
        />
        <StyledResponsesImage
          src={NoResponse}
          alt="yes response"
          onClick={() => saveResponses("no")}
        /> */}
      </StyledResponsesContainer>
    </StyledBackgroundQuestions>
  );
};

export default Questions;
