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
    // const handleButtonGood = () => {
    //     setGood(prevState => prevState + 1);
    // }
    // const handleButtonNeutral = () => {
    //     setNeutral(prevState => prevState + 1);
    // }
    // const handleButtonBad = () => {
    //     setBad(prevState => prevState + 1);
    // }
    // answer = (button) => {
    //     this.setState(prevState => {
    //         return {
    //             [button]: prevState[button] + 1,
    //         }
    //     })
    // };
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
                    // clickGood={handleButtonGood}
                    // clickNeutral={handleButtonNeutral}
                    // clickBad={handleButtonBad}
                                     
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
// class Feedback extends Component {    
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,        
//     }
    
//     options = Object.keys(this.state); // keys of state
//     // name = ['Супер', "Норм", "Відстій"];
   
//     answer = (button) => {
//         this.setState(prevState => {
//             return {
//                 [button]: prevState[button] + 1,
//             }
//         })
//     }
//     countTotalFeedback() {
//         const { good, neutral, bad } = this.state;
//         return ( good + neutral + bad)
//     }
//     countPositiveFeedbackPercentage() {
//         const { good } = this.state;
//         return Math.round((good / this.countTotalFeedback()) * 100);
//     }   
//     countNormalFeedbackPercentage() {
//         const { neutral} = this.state;
//         return Math.round((neutral / this.countTotalFeedback()) * 100);
//     } 
    

//     render() {
//     return (
//         <div className="Feedback">
//             <Section
//                 title={"Реакція на наші послуги"}
//                 trailer={"*будь-ласка, залиште відгук, натиснувши на вибрану кнопку"}
//             >            
//             <FeedbackOptions               
//                     options={this.options}
//                     answer={this.answer}
//                     name = {this.name}                    
//             />
//             </Section>            
//             <Section
//                 title={"Результат опитування"}
            
//             >          
//                 {this.countTotalFeedback() > 0 ? <Statistics
//                     good={this.state.good}
//                     neutral={this.state.neutral}
//                     bad={this.state.bad}
//                     total={this.countTotalFeedback()}
//                     positivePercentage={this.countPositiveFeedbackPercentage()}
//                     neutralPercentage={this.countNormalFeedbackPercentage()}
//                 />: <Notification massage={"Твій відгук стане першим"}/> }
//             </Section>            
//         </div>
//         );
//     }; 
// };
    
// export default Feedback;