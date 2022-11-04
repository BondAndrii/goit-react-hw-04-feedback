import React from "react";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
            <ul>
                <p>{good} разів супер</p>
                <p>{neutral} разів норм</p>
                <p>{bad} разів відстій</p>
                
                {total > 0 && (
                <p>{total} разів дали відгук</p>
                )}
                {total > 0 && (
                <p>позитивний { positivePercentage} %</p>
                )}
            </ul>
);
export default Statistics;