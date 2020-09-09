import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { TextField } from '@material-ui/core';


export default class UserGoals extends Component {
    state = {goals: []};
    
    createUI(){
        return this.state.goals.map((goal, index) => 
            <div key={index}>
              <TextField type='text' value={goal||''} onChange={(event) => this.handleChange(event, index)} />
              <Button onClick={(event) => this.removeClick(event, index)} variant = 'contained' size = 'small' value='remove goal'>remove goal</Button>
            </div>          
        )
    }

    handleChange = (index, event) => {
        let goals = [...this.state.goals];
        goals[index] = event.target.value;
        this.setState({ goals });
    }

    addClick = () => {
      this.setState(prevState => ({ goals: [...prevState.goals, '']}))
    }

    removeClick = (index) => {
        let goals = [...this.state.goals];
        goals.splice(index,1);
        this.setState({ goals });
    }

    render() {
      return (
        <div>
            {this.createUI()}
      {this.state.goals.length === 0 && <><p>"No goals...yet"</p> <Button onClick={this.addClick} variant = 'contained' size = 'small' value='add goal'>add goal</Button> </>}
      {/* :<Button onClick={this.addClick} variant = 'contained' size = 'small' value='add goal'>add goal</Button>} */}
        </div>
      );
    }
}
