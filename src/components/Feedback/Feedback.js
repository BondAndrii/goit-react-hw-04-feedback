import React, { Component } from "react";


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    render() {
        return (
            <h1>Будь-ласка, залиште відгук</h1>
        )
    }
}
export default Feedback;