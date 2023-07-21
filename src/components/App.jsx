import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import { Wrapper } from "./App.styled";

class App extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    feedbackClickHandle = (option) => {
        this.setState((prevState) => {
            return {
                [option]: prevState[option] + 1,
            };
        });
    };

    total = ({ good, neutral, bad }) => {
        return good + neutral + bad;
    };

    positivePercentage = ({ good, neutral, bad }) => {
        return (
            this.total({ good, neutral, bad }) === 0 ? 0 :
                Math.round((good / this.total({ good, neutral, bad })) * 100)
        );
    };

    render() {
        return (
            <Wrapper>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.feedbackClickHandle}
                    />
                </Section>

                <Section title={'Statistics'}>
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.total}
                        positivePercentage={this.positivePercentage}
                    />
                </Section>
            </Wrapper>
        )
    };
}

export default App;