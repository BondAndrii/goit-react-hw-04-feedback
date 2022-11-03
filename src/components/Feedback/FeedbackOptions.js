import React from "react";

const FeedbackOptions = () => (
    <ul>
        <button type="button" onClick={this.answerGood}>Супер</button>
        <button type="button" onClick={this.answerNeutral}>Норм</button>
        <button type="button" onClick={this.answerBad}>Відстій</button>
    </ul>
);

export default FeedbackOptions;