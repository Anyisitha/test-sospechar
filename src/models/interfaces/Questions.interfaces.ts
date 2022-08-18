export interface IResponseProps {
    response: boolean;
    question: number;
}

export interface IQuestionProps {
    saveResponse: (response: "yes" | "no") => void;
}