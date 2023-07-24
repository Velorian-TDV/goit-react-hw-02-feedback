import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className="feedbackOption">
        {options.map(element => {
            return (
                <button
                    onClick={() => { onLeaveFeedback(element) }}
                    key={nanoid()}
                >
                    {element}
                </button>
            )
        })}
    </div>
)

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;