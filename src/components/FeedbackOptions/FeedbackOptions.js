import React from "react";
import PropTypes from 'prop-types';
import "./FeedbackOptions.css"
const FeedbackOptions = ({ options, onClick, name }) => {
    return (
        <ul className="ButtonPlace">
            {options.map(option => (
                <button
                    key={option}
                    type="button"
                    className="ButtonOption"
                    onClick={() => onClick(option)}
                >{name[option]}</button>
            ))}
        </ul>
    )
 };

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.object.isRequired,
}