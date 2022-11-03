import React from "react";

const Statistics = () => (
            <ul>
                <p>{this.state.good} разів супер</p>
                <p>{this.state.neutral} разів норм</p>
                <p>{this.state.bad} разів відстій</p>
                
                {this.countTotalFeedback() > 0 && (
                <p>{this.countTotalFeedback()} разів дали відгук</p>
                )}
                {this.countTotalFeedback() > 0 && (
                <p>позитивний {this.countPositiveFeedbackPercentage()} %</p>
                )}
            </ul>
);
export default Statistics;