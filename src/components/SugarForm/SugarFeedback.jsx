import React, { Component } from 'react';
import { Button } from "@material-ui/core";

export default class SugarFeedback extends Component {
    render() {
        let sugarFeedback;
        const bloodSugar = this.props.result;
        switch (bloodSugar){
            case bloodSugar < 126:
                sugarFeedback  = <div>
                    <p>Fantastic job! Your blood sugar is right where it should be.</p>
                    <p>Keep it up and continue to take care of your body and check out some </p>
                    <p>dietary tips for even more useful knowledge.</p>
                </div>
            break;

            case bloodSugar >= 126 && bloodSugar <= 150:
                sugarFeedback  = <div>
                    <p>Your result is just a tiny bit higher than it should be. This could be</p>
                    <p>due to recent meals or physical activity or even factors like stress.</p>
                    <p>Continue to take care of your body and check out some </p>
                    <p>dietary tips for even more tools to enhance your health.</p>
                </div>
            break;

            case bloodSugar > 180:
                sugarFeedback  = <div>
                    <p>Oh my, your result is much higher than we'd like...we are aiming for at least 126.</p>
                    <p>Try and relax, and try again later to see how you are doing.</p>
                    <p>If you continue to have results like this, consider asking your doctor</p>
                    <p>for further testing so you can understand your health better.</p>
                    <p>Focus on your health and check out some dietary tips for even more tools to enhance your health.</p>
                </div>
            break;

            default:
                sugarFeedback = null
            break;
        }

        return (
            <div>
                {sugarFeedback}
            </div>
        )
    }
}


