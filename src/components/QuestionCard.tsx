import React from "react";
//types
import {AnswerObject} from '../App';
//styles
import {Wrapper, ButtonWrapper} from './QuestionCard.styles';


type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="container-buttonw">
        {answers.map((answer) => (
          <ButtonWrapper key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          >
            <button disabled={userAnswer? true:false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer.toUpperCase() }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
export default QuestionCard;
