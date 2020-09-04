import React from 'react';
import PropTypes from 'prop-types';
import "./SugarForm.css";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button } from "@material-ui/core";

export default function VaccineFeedback(props) {
    const { onClose, open, clearForm, result } = props;
    const sugarResult = parseInt(result, 10);

    let feedback = () => {
        if(sugarResult < 120){
            return (<div className='feedback-div'>
            <p>Fantastic job! Your blood sugar is right where it should be.</p>
            <p>Keep it up and continue to take care of your body and check out some </p>
            <p>dietary tips for even more useful knowledge.</p>
            <p>You can visit your local pharmacy for point of care testing, (protip) it's usually free
            or you can purchase at home testing. Your doctor will also have more accurate tests on hand to let you know your status.</p>
            <Button variant="contained" onClick={clearForm}>Clear form</Button>
            </div>)
        } else if(sugarResult <= 150){
            return (<div className='feedback-div'>
            <p>Your result is just a tiny bit higher than it should be. This could be</p>
            <p>due to recent meals or physical activity or even factors like stress.</p>
            <p>Continue to take care of your body and check out some </p>
            <p>dietary tips for even more tools to enhance your health.</p>
            <p>You can visit your local pharmacy for point of care testing, (protip) it's usually free
            or you can purchase at home testing. Your doctor will also have more accurate tests on hand to let you know your status.</p>
            <Button variant="contained" onClick={clearForm}>Clear form</Button>
            </div>)
        } else if(sugarResult <= 180){
            return (<div className='feedback-div'>
            <p>Oh my, your result is much higher than we'd like...we are aiming for at least 126.</p>
            <p>Try and relax, and try again later to see how you are doing.</p>
            <p>If you continue to have results like this, consider asking your doctor</p>
            <p>for further testing so you can understand your health better.</p>
            <p>Focus on your health and check out some dietary tips for even more tools to enhance your health.</p>
            <p>You can visit your local pharmacy for point of care testing, (protip) it's usually free
            or you can purchase at home testing. Your doctor will also have more accurate tests on hand to let you know your status.</p>
            <Button variant="contained" onClick={clearForm}>Clear form</Button>
            </div>)
        } else {
            return <p>"you need better habits"</p>
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

VaccineFeedback.propTypes = {
    onClose: PropTypes.func.isRequired,
    clearForm: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    result: PropTypes.number.isRequired
};