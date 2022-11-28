import React from "react";
import PropTypes from 'prop-types'
const FeedbackOptions = ({ options, answer, name }) => (  
   
    <ul>
        {options.map(option => (
            <button
                key={option}
                type="button"
                onClick={() => answer(option)}
            >{name[option]}</button>
        ))}
    </ul>
);
FeedbackOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
    
}
export default FeedbackOptions;
