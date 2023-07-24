import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import { Wrapper, GlobalStyles } from "./App.styled";

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

    total = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    positivePercentage = () => {
        const { good } = this.state;
        return (
            this.total() === 0 ? 0 :
                Math.round((good / this.total()) * 100)
        );
    };

    render() {
        const { good, neutral, bad } = this.state;
        const stateKeys = Object.keys(this.state);

        return (
            <Wrapper>
                <GlobalStyles />
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={stateKeys}
                        onLeaveFeedback={this.feedbackClickHandle}
                    />
                </Section>

                <Section title={'Statistics'}>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.total()}
                        positivePercentage={this.positivePercentage()}
                    />
                </Section>
            </Wrapper>
        )
    };
}

export default App;