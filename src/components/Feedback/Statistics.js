import React from "react";

const Statistics = ({good, neutral, bad, total, positivePercentage, neutralPercentage}) => (
    <div>
        {total > 0 && (<ul>
        <p>{total} людей нам кажуть {good} разів супер, {neutral} разів норм, {bad} разів відстій.</p>
        <p>{positivePercentage > 0 && (<span> Тож високу оцінку нам дали {positivePercentage} % опитаних.</span>)} {neutralPercentage > 0 && (<span> Залишились задоволеними {neutralPercentage} % опитаних.</span>)}</p>

    </ul>)}
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
        </div>
);
export default Statistics;