import React from "react";
// import PropTypes from 'prop-types';
import "./FeedbackOptions.css"
const FeedbackOptions = ({ options, clickGood, clickNeutral, clickBad }) => {
    const { good, neutral, bad } = options;
    return (
    <ul className="ButtonPlace">
        <li>
            <button
            key={good}
            type="button"
            className="ButtonOption"
            onClick={() => clickGood()}
        >Good</button>
        </li>
        <li>
            <button
            key={neutral}
            type="button"
            className="ButtonOption"
            onClick={() => clickNeutral()}
        >Neutral</button>

        </li>
        <li>
            <button
            key={bad}
            type="button"
            className="ButtonOption"
            onClick={() => clickBad()}
        >Bad</button>
        </li>      
    </ul>
    )
   
    // <ul className="ButtonPlace">
    //     {options.map(option => (
    //         <button
    //             key={option}
    //             type="button"
    //             className="ButtonOption"
    //             onClick={() => answer(option)}
    //         >{option}</button>
    //     ))}
    // </ul>
};

export default FeedbackOptions;


// FeedbackOptions.propTypes = {
//     options: PropTypes.array.isRequired,
//     answer: PropTypes.func.isRequired,
//     name: PropTypes.object.isRequired,
// }