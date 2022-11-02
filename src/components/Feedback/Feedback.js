import React, { Component } from "react";


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    render() {
        return (
            <div>
                <h1>Сторінка відгуків</h1>
                <p>Будь-ласка, залиште відгук, натиснувши на вибрану кнопку</p>
                <ul>
                    <button>Супер</button>
                    <button>Норм</button>
                    <button>Відстій</button>
                </ul>
                <h2>Наші клієнти кажуть: </h2>
                <ul>
                    <p>разів супер</p>
                    <p>разів норм</p>
                    <p>разів відстій</p>
                </ul>

            </div>
        )
    }
}
export default Feedback;