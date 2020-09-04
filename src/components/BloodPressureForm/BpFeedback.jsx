import React from 'react';
import "./BloodPressureForm.css";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button } from "@material-ui/core";

export default function BpFeedback(props) {
    const { onClose, open, systolic_pressure, clearForm } = props;

    let feedback = () => {
        if(systolic_pressure < 120){
            return (<div className='feedback-div'>
                        <div>
                            <p>Wow! Your blood pressure is outstanding.</p>
                            <p>Keep it up and continue to take care of your body.</p>
                            <p>Check out our dietary tips for more useful knowledge!</p>
                            <Button variant="contained" onClick={clearForm}>Done</Button>
                        </div>
                            <p>Want to track your results? Click here to register</p>
                    </div>)
        } else if(systolic_pressure <= 130){
            return (
                        <div className='feedback-div'>
                            <div>
                            <p>Your result is just a tiny bit higher than it should be. </p>
                            <p>A goal of under 120/80 would be perfect!</p>
                            <p>This could be due to recent exercise or even factors like stress.</p>
                            <p>Check out our dietary tips for even more useful knowledge!</p>
                            <Button variant="contained" onClick={clearForm}>close</Button>
                            </div>
                            <p>Want to track your results? Click here to register</p>
                        </div>
            )
        } else if(systolic_pressure <= 140){
            return (<div className='feedback-div'>
                        <div>
                            <p>Your result is just a little higher than we'd like...we are aiming for 129.</p>
                            <p>Try and relax, and check again later (at least 15 minutes).</p>
                            <p>If you continue to have results like this, consider asking your doctor for advice.</p>
                            <p>Further testing can help you understand your health better.</p>
                            <p>Check out some dietary tips for tools to enhance your health.</p>
                            <Button variant="contained" onClick={clearForm}>close</Button>
                        </div>
                            <p>Want to track your results? Click here to register</p>
                    </div>)
        } else if(systolic_pressure <= 179){
            return (<div className='feedback-div'>
                        <div>
                            <p>Oh my, your result is much higher than we'd like...we are aiming for at least 140.</p>
                            <p>Try and relax, and try again later (at least 15 minutes) to see how you are doing.</p>
                            <p>If you continue to have results like this, consider asking your doctor</p>
                            <p>for further testing so you can understand your health better.</p>
                            <p>Focus on your health and check out some dietary tips for even more tools to enhance your health.</p>
                            <Button variant="contained" onClick={clearForm}>close</Button>
                        </div>
                            <p>Want to track your results? Click here to register</p>
                        </div>)
        } else if(systolic_pressure >= 180){
            return (<div className='feedback-div'>
                        <div>
                            <p>Results are not good. Do you feel alright?</p>
                            <p>Consider asking your doctor for further testing.</p>
                            <p>Remember to take your medicine as directed by your doctor.</p>
                            <p>This score is very dangerous so take action today.</p>
                            <p>Learn about heart health and dietary tips for more tools to improve your health.</p>
                            <Button variant="contained" onClick={clearForm}>close</Button>
                        </div>
                            <p>Want to track your results? Click here to register</p>
                        </div>)
        }
}

return (
    <Dialog onClick={() => onClose()} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">
            <div className='feedback-div2'>
                {feedback()}
            </div>
        </DialogTitle>
    </Dialog>
    );
}