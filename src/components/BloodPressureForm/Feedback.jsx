import React, { Component } from 'react'

export default class Feedback extends Component {
    state = {
        systolic_pressure: '',
        display: false
    }

    toggleDisplay = () => {
        this.setState({
            display: !this.state.display
        })
    }

    testingInfo = () => {
        return <p>You can visit your local pharmacy for point of care testing, (protip) it's usually free
        or you can purchase at home testing. Your doctor will also have more accurate tests on hand to let you know your status.</p>
        //Learn more diabetes habits Redirect to diabetes info page
        //Learn more dietary habits Redirect to diet
    }

    render() {
        let bpFeedback;
        const bpResult = this.state.systolic_pressure;
        switch (bpResult){
            case bpResult < 120:
                bpFeedback  = <div>
                    <p>Fantastic job! Your blood pressure is right where it should be.</p>
                    <p>Keep it up and continue to take care of your body and check out some </p>
                    <p>dietary tips for even more useful knowledge.</p>
                </div>
            break;

            case bpResult >= 120 && bpResult <= 150:
                bpFeedback  = <div>
                    <p>Your result is just a tiny bit higher than it should be. This could be</p>
                    <p>due to recent meals or physical activity or even factors like stress.</p>
                    <p>Continue to take care of your body and check out some </p>
                    <p>dietary tips for even more tools to enhance your health.</p>
                </div>
            break;

            case bpResult > 150:
                bpFeedback  = <div>
                    <p>Oh my, your result is much higher than we'd like...we are aiming for at least 140.</p>
                    <p>Try and relax, and try again later (at least 15 minutes) to see how you are doing.</p>
                    <p>If you continue to have results like this, consider asking your doctor</p>
                    <p>for further testing so you can understand your health better.</p>
                    <p>Focus on your health and check out some dietary tips for even more tools to enhance your health.</p>
                </div>
            break;

            default:
                bpFeedback = null
            break;
        }

        return (
            <div onClick={() => this.toggleDisplay()}>
                {this.state.display && {bpFeedback}}
            </div>
        )
    }
}