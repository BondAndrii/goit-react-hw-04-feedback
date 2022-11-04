import React from "react";

const FeedbackOptions = ({onGood,onNeutral, onBad}) => (
    <ul>
        <button type="button" onClick={onGood}>Супер</button>
        <button type="button" onClick={onNeutral}>Норм</button>
        <button type="button" onClick={onBad}>Відстій</button>
    </ul>
);

export default FeedbackOptions;