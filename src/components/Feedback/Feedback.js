import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";


class Feedback extends Component {    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,        
    }
    
    
    answerGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,                
            }
        })
    }
    answerNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,                
            }
        })
    }
    answerBad = () => {
    this.setState(prevState => {
        return {
            bad: prevState.bad + 1,
            }
        })
    }
    countTotalFeedback() {
        return ( this.state.good + this.state.neutral +this.state.bad)
    }
    countPositiveFeedbackPercentage() {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }   
    countNormalFeedbackPercentage() {
        return Math.round((this.state.neutral / this.countTotalFeedback()) * 100);
    }  
    render() {
    return (
        <div>
            <Section
                title={"Реакція на наші послуги"}
                trailer={"*будь-ласка, залиште відгук, натиснувши на вибрану кнопку"}
            >
            {/* <h1>Реакція на наші послуги</h1>
            <p>*будь-ласка, залиште відгук, натиснувши на вибрану кнопку</p> */}
            <FeedbackOptions
                onGood={this.answerGood}
                onNeutral={this.answerNeutral}
                onBad={this.answerBad}            
                />
            </Section>
            {/* <ul>
                <button type="button" onClick={this.answerGood}>Супер</button>
                <button type="button" onClick={this.answerNeutral}>Норм</button>
                <button type="button" onClick={this.answerBad}>Відстій</button>
            </ul> */}
            {/* <b>{this.countTotalFeedback()} людей нам кажуть {this.state.good} разів супер, {this.state.neutral} разів норм, {this.state.bad} разів відстій. {this.countPositiveFeedbackPercentage() > 0 && (<span> Тож високу оцінку нам дали {this.countPositiveFeedbackPercentage()} % опитаних</span> )}. {this.countNormalFeedbackPercentage() > 0 && (<span> Залишились задоволеними {this.countNormalFeedbackPercentage()} % опитаних</span> )}  </b> */}
            <Section
                title={"Результат опитування"}
            
            >
            {/* <b>{this.countTotalFeedback()} людей нам кажуть {this.state.good} разів супер, {this.state.neutral} разів норм, {this.state.bad} разів відстій. {this.countPositiveFeedbackPercentage() > 0 && (<span> Тож високу оцінку нам дали {this.countPositiveFeedbackPercentage()} % опитаних</span> )}. {this.countNormalFeedbackPercentage() > 0 && (<span> Залишились задоволеними {this.countNormalFeedbackPercentage()} % опитаних</span> )}  </b> */}
 
            <Statistics 
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                    neutralPercentage={this.countNormalFeedbackPercentage()}                    
                />
            </Section>
            {/* <ul>
                <p>{this.state.good} разів супер</p>
                <p>{this.state.neutral} разів норм</p>
                <p>{this.state.bad} разів відстій</p>
                
                {this.countTotalFeedback() > 0 && (
                <p>{this.countTotalFeedback()} разів дали відгук</p>
                )}
                {this.countTotalFeedback() > 0 && (
                <p>позитивний {this.countPositiveFeedbackPercentage()} %</p>
                )}
            </ul> */}
        </div>
    );
    }; 
    };
    


export default Feedback;