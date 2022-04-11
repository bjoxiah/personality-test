import { useNavigate } from "react-router-dom";
import { QuestionBoard } from "../components/questionboard";

const QuestionScreen = () => {
  const navigate = useNavigate();

  const navigateAway = (path: string): void => {
    navigate(path);
  }

  return <QuestionBoard navigate={navigateAway} />;
};

export default QuestionScreen;
