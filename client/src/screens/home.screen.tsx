import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <h2>Welcome to your personality test!</h2>
        <button
          className="btn btn-primary btn-full"
          onClick={() => navigate("/start")}
        >
          Start
        </button>
      </div>
    </>
  );
};

export default HomeScreen;
