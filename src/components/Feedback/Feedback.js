import React, {  useState } from "react";
import "./Feedback.css";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";


export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    
    const options = ['good', 'neutral', 'bad']

    const name = {
        good: 'Супер',
        neutral: "Норм",
        bad: "Відстій",
    };
    const getAnswer = (button) => {
        switch (button) {
            case "good":
                setGood(prevState => prevState + 1);
                break;
            case "neutral":
                setNeutral(prevState => prevState + 1);
                break;
            case "bad":
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    }
    
    const countTotalFeedback = () => {        
        return (good + neutral + bad);
    };
    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100);
    }; 
    const countNormalFeedbackPercentage = () => {
        return Math.round((neutral / countTotalFeedback()) * 100);
    };

    return (
        <div className="Feedback">
            <Section
                title={"Реакція на наші послуги"}
                trailer={"*будь-ласка, залиште відгук, натиснувши на вибрану кнопку"}
            >            
            <FeedbackOptions               
                    options={options}
                    onClick={getAnswer}
                    name={name}                  
                                     
            />
            </Section>            
            <Section
                title={"Результат опитування"}
            
            >          
                {countTotalFeedback() > 0 ? <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                    neutralPercentage={countNormalFeedbackPercentage()}
                />: <Notification massage={"Твій відгук стане першим"}/> }
            </Section>            
        </div>
        );
}
