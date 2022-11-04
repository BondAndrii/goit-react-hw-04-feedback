import React from "react";
import PropTypes from 'prop-types'
const FeedbackOptions = ({onGood,onNeutral, onBad}) => (
    <ul>
        <button type="button" onClick={onGood}>Супер</button>
        <button type="button" onClick={onNeutral}>Норм</button>
        <button type="button" onClick={onBad}>Відстій</button>
    </ul>
);
FeedbackOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
    
}
export default FeedbackOptions;