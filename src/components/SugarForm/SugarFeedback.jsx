import React from 'react';
import "./SugarForm.css";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function SugarFeedback(props) {
    const { open, clearForm, result } = props;
    const sugarResult = parseInt(result, 10);

    const feedback = () => {
        if(sugarResult < 80){
            return (<div className='feedback-div'>
                        <div>
                            <p>Your result is too low, consider getting emergency help.</p>
                            <p>Do you feel dizzy or weak? If so, please calmly request assistance.</p>
                            <p>This could be due to fasting or any other health changes.</p>
                            <p>DID YOU KNOW?...more 1/3 of Americans have prediabetes.</p>
                            <Button variant="contained" onClick={clearForm}>close</Button>
                        </div>
                        </div>)
        }else if(sugarResult <= 130){
            return (<div className='feedback-div'>
                        <div>
                            <p>Fantastic job! Your blood sugar is exactly right where it should be.</p>
                            <p>Keep it up and continue to take care of your body.</p>
                            <p>Check out some dietary tips for even more useful knowledge.</p>
                            <p>DID YOU KNOW?...8/10 adults with prediabetes don't know they have it. </p>
                            <Button variant="contained" onClick={clearForm}>close</Button>
                        </div>
                        </div>)
        } else if(sugarResult < 180){
            return (<div className='feedback-div'>
                        <div>
                            <p>Your result is just a little bit higher than it should be.</p>
                            <p>This could be due to meals in the last 1-2 hours or even factors like stress.</p>
                            <p>Continue to take care of your body and check out some dietary tips.</p>
                            <p>You are close to the goal, keep PUSHING!</p>
                            <p>DID YOU KNOW?...Losing 5-7% of total body weight reduces the incidence of diabetes by 58%.</p>
                            <Button variant="contained" onClick={clearForm}>close</Button>
                        </div>
                        </div>)
        } else if(sugarResult >= 180){
            return (<div className='feedback-div'>
                        <div>
                            <p>Oh my, your result is much higher than we'd like...we are aiming for at least 180.</p>
                            <p>Try and relax, and try again later to see how you are doing.</p>
                            <p>If you continue to have results like this, consider asking your doctor for more testing.</p>
                            <p>Focus on your health and read our dietary tips for more tools to enhance your health.</p>
                            <p>If you are more than 2 hours after a meal, consider this a possible sign of poor health.</p>
                            <p>DID YOU KNOW?...Medical costs for diabetics is more than twice as high as for people without diabetes.</p>
                            <Button variant="contained" onClick={clearForm}>close</Button>
                        </div>
                        </div>)
        } 
}

return (
    <Dialog onClick={() => clearForm()} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">
            <div className='feedback-div2'>
                {feedback()}
                {!localStorage.token ? <Link to='/register'><Button>Want to track your results? Click here to register</Button></Link> : null}
            </div>
        </DialogTitle>
    </Dialog>
    );
}