import React, { Component } from "react";


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
        
    
    render() {
    return (
        <div>
            <h1>Реакція на наші послуги</h1>
            <p>*будь-ласка, залиште відгук, натиснувши на вибрану кнопку</p>
            <ul>
                <button type="button" onClick={this.answerGood}>Супер</button>
                <button type="button" onClick={this.answerNeutral}>Норм</button>
                <button type="button" onClick={this.answerBad}>Відстій</button>
            </ul>
            <h2>{this.countTotalFeedback()} людей нам кажуть {this.state.good} разів супер, {this.state.neutral} разів норм, {this.state.bad} разів відстій</h2>
            <ul>
                <p>{this.state.good} разів супер</p>
                <p>{this.state.neutral} разів норм</p>
                <p>{this.state.bad} разів відстій</p>
                {/* <p>{this.countTotalFeedback()}</p> */}
            </ul>
        </div>
    );
    }; 
    };
    


export default Feedback;