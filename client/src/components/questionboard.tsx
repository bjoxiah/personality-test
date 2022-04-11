import { Fragment, useContext } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Questions } from "../models/question";
import {
  QuestionContext,
  setAnswer,
  setCurrentQuestion,
} from "../store/questioncontext";

interface QuestionProps {
  navigate: (str: string) => void;
}

export const QuestionBoard: React.FC<QuestionProps> = ({
  navigate,
}): JSX.Element => {
  const { questions, count, current, dispatch } = useContext(QuestionContext);
  const question = questions?.[current];

  const handleClick = (data: Questions, index: number) => {
    data.answers = data.answers.map((val, i) => {
      if (i === index) {
        val.selected = true;
      } else {
        val.selected = false;
      }
      return val;
    });

    dispatch(setAnswer(data));
  };

  const moveAway = (val: number) => {
    dispatch(setCurrentQuestion(val));
  };

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className="my-4">{current + 1 + "/" + count}</div>
          <CardTitle className="my-4" tag="h4">
            {question?.question}
          </CardTitle>
          <CardSubtitle className="my-4 text-muted">
            <span className="fst-italic fw-normal">
              All questions are required
            </span>
          </CardSubtitle>
          <ListGroup type="unstyled" flush>
            {question?.answers.map((ans, index) => {
              return (
                <Fragment key={ans.option + index}>
                  <ListGroupItem
                    onClick={() => handleClick(question, index)}
                    tag="button"
                    className={`shadow-sm py-2 my-2 border rounded-3 border-2 ${
                      ans.selected ? "border-danger" : ""
                    }`}
                  >
                    <div className="d-flex justify-content-start">
                      <div className="p-2 mr-3">
                        <span
                          className={`badge ${
                            ans.selected
                              ? "bg-danger text-white"
                              : "bg-light text-dark"
                          } p-2`}
                        >
                          {ans.option}
                        </span>
                      </div>
                      <div className="ml-3 p-2">
                        <span
                          className={`${
                            ans.selected ? "fw-bold" : "fw-normal"
                          } fs-5`}
                        >
                          {ans.value}
                        </span>
                      </div>
                    </div>
                  </ListGroupItem>
                </Fragment>
              );
            })}
          </ListGroup>
        </CardBody>
        <CardFooter>
          <div className="w-100 my-4 d-grid">
            {current === 0 ?         
             ( 
                count > 1 ?  (<button
                    className="btn btn btn-secondary btn-lg"
                    disabled={question?.answers.every((x) => !x.selected)}
                    onClick={() => moveAway(current + 1)}
                  >
                    Next Question
                  </button>) : (
                    <button
                        className="btn btn btn-secondary btn-lg"
                        disabled={question?.answers.every((x) => !x.selected)}
                        onClick={() => navigate("/completed")}
                    >
                        Finish Test
                    </button>
                )   
              
            )
             : (
              <div className="gap-2 d-flex">
                <button
                  className="btn btn btn-secondary btn-lg w-50"
                  onClick={() => moveAway(current - 1)}
                >
                  Previous
                </button>
                {current + 1 === count ? (
                  <button
                    className="btn btn btn-secondary btn-lg w-50"
                    disabled={question?.answers.every((x) => !x.selected)}
                    onClick={() => navigate("/completed")}
                  >
                    Finish Test
                  </button>
                ) : (
                  <button
                    className="btn btn btn-secondary btn-lg w-50"
                    onClick={() => moveAway(current + 1)}
                    disabled={question?.answers.every((x) => !x.selected)}
                  >
                    Next Question
                  </button>
                )}
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </Fragment>
  );
};
