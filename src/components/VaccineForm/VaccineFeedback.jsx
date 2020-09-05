import React from 'react';
import "./VaccineForm.css";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

export default function VaccineFeedback(props) {
    const { open, clearForm, tetanus, flu, pneumonia, shingles, shinglesTwoDay, age } = props;
    const currentAge = parseInt(age, 10);
    const allFeedback = () => {
        return (
            <React.Fragment>
                <div className='feedback-div'>
                    <div>
                    {tetanus === 'yes' ? 
                    <div>
                        <p>Tetanus: Congrats, your covered! Remember, this is due once every 10 years.</p>
                        <p>Did you know?..tetanus vaccine is recommended during each pregnancy to protect the newborn.</p>
                    </div> 
                    :
                    <div>
                        <p>RECOMMENDED: Tetanus</p>
                        <p>Did you know?..adults should receive a booster dose every 10 years </p>
                        <p>or earlier in the case of a severe and dirty wound or burn.</p>
                        <p>Click here to learn more about the tetanus vaccine</p>
                    </div>}
                    </div>

                    <div>   
                    {pneumonia === 'yes' ? 
                    <div>
                        <p>Pneumonia: Congrats, your covered!</p>
                        <p>This is due one time before 65 years of age and one time after turning 65.</p>
                        <p>Did you know?..There are two kinds of pneumococcal vaccines available in the United States</p>
                    </div> 
                    :
                    <div>
                        <p>DEPENDS: Pneumonia</p>
                        <p>All people 2 years or older with certain medical conditions are recommended to get vaccinated.</p>
                        <p>Since this vaccine came out, rates of invasive pneumococcal disease have declined by 99% in the United States since 2000.</p>
                        <p>Click here to learn more about the pneumococcal vaccine</p>
                    </div>}
                    </div>

                    <div>
                    {shingles === 'yes' ? 
                    <div>
                        <p>Shingles: Amazing! your covered!</p>
                        <p>Did you know...Half of people who reach age 85 will have had shingles at some point.</p>
                    </div> 
                    :
                    <div>
                        <p>RECOMMENDED: Shingles</p>
                        <p>Did you know...They’re caused by the same virus, but shingles and chickenpox are not the same illness.</p>
                        <p>A shingles vaccine could lower your chances of a second infection, even if you get the shot after you’ve already had shingles.</p>
                        <p>Click here to learn more about the Shingles vaccine</p>
                    </div>}
                    </div>
                    
                </div>
            </React.Fragment>)
}

const fluFeedback = () => {
    return (<div>   
                {flu === 'yes' && currentAge >= 65 ? 
                <div>
                    <p>Flu: Awesome job! You help protect everybody else as well when you get vaccinated.</p>
                    <p>Did you know?..There are two main types of influenza virus: Types A and B.</p>
                </div> 
                :
                <div>
                    <p>RECOMMENDED: Flu</p>
                    <p>Did you know?..There are two main types of influenza virus: Types A and B.</p>
                    <p>People 65 years and older are recommended to get the High Dose flu shot every year.</p>
                    <p>High-Dose flu contains four times the antigen, the part of the vaccine that helps the body protect against flu viruses.</p>
                    <p>Click here to learn more about the flu vaccine</p>
                </div>}
        </div>)
}

const shinglesFeedback = () => {
    return (
        <div>
        {shinglesTwoDay === 'yes' && age >= 65 ? 
                <div>
                    <p>Shingles: Amazing! your covered!</p>
                    <p>Did you know...this vaccine can lower your chances by more than 90%.</p>
                    <p>Anyone who has ever had chickenpox can get shingles, but the risk increases with age.</p>
                </div> 
                :
                <div>
                    <p>RECOMMENDED: Shingles followup appointment</p>
                    <p>There is a new shingles vaccine (called Shingrix) released in 2018 that is twice as effective as previous vaccine.</p>
                    <p>If you only remember one dose, verify with your healthcare provider.</p>
                    <p>The old vaccine was given ONCE. The new vaccine is done on TWO seperate days.</p>
                    <p>Take action and make sure you are protected!</p>
                    <p>Click here to learn more about the Shingles vaccine</p>
                </div>}
        </div>
)}

return (
    <Dialog onClick={() => clearForm()} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">
            <div className='feedback-div2'>
                {allFeedback()}
                {fluFeedback()}
                {shingles === 'yes' && shinglesFeedback()}
                <Button variant="contained" onClick={clearForm}>close</Button>
                {!localStorage.token ? <Link to='/register'><Button>Want to track your results? Click here to register</Button></Link> : null}
            </div>
        </DialogTitle>
    </Dialog>
    );
}

VaccineFeedback.defaultProps = {
    shinglesTwoDay: 'no'
}