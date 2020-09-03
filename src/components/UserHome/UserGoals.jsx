import React, { Component } from 'react'

export default class UserGoals extends Component {
    state = {goals: []};
    
    createUI(){
        return this.state.goals.map((goal, index) => 
            <div key={index}>
              <input type="text" value={goal||''} onChange={(event) => this.handleChange(event, index)} />
              <input type='button' value='remove goal' onClick={(event) => this.removeClick(event, index)}/>
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
            {this.state.goals.length === 0 ? <><p>"No goals...yet"</p> <input type='button' value='add goal' onClick={this.addClick}/> </>: 
            <input type='button' value='add goal' onClick={this.addClick}/>}
        </div>
      );
    }
}
