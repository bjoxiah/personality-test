import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../store/questioncontext";

const CompletedScreen = () => {
    const { questions } = useContext(QuestionContext);
    const [introvert, setIntrovert] = useState(0);
    const [extrovert, setExtrovert] = useState(0);
    
    const getScore = () => {
        let introvertScore = 0;
        let extrovertScore = 0;
        questions?.forEach(x => {
            introvertScore += x.answers.find(y => y.selected)?.score.introvert || 0;
            extrovertScore += x.answers.find(y => y.selected)?.score.extrovert || 0;
        });
        setIntrovert(introvertScore);
        setExtrovert(extrovertScore);
    }

    useEffect(() => {
        getScore();
    });

    return (
        <>
            <h2>Congratulations!!!</h2>
            <h5>You just completed your test, here's your score { extrovert >= introvert ? extrovert : introvert }%</h5>
            <h6>You're more of an { extrovert >= introvert ? 'Extrovert' : 'Introvert' }!</h6>
        </>
    )
}

export default CompletedScreen;