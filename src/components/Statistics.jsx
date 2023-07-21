import React from "react";
import PropTypes from 'prop-types';
import Notification from "./Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className="statistics">
        {
            total({ good, neutral, bad }) === 0 ?
                (<Notification message='There is no feedback' />)
                :
                (<ul className="statisticsList">
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total({ good, neutral, bad })}</li>
                    <li>Positive feedback: {positivePercentage({ good, neutral, bad })}%</li>
                </ul>)
        }
    </div>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}

export default Statistics;