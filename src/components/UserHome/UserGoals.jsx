import React, { Component } from 'react'

export default class UserGoals extends Component {
    state = {goals: []};
    
    createUI(){
        return this.state.goals.map((el, i) => 
            <div key={i}>
              <input type="text" value={el||''} onChange={(event) => this.handleChange(event, i)} />
              <input type='button' value='remove goal' onClick={(event) => this.removeClick(event, i)}/>
            </div>          
        )
    }

    handleChange = (i, event) => {
        let goals = [...this.state.goals];
        goals[i] = event.target.value;
        this.setState({ goals });
    }

    addClick = () => {
      this.setState(prevState => ({ goals: [...prevState.goals, '']}))
    }

    removeClick = (i) => {
        let goals = [...this.state.goals];
        goals.splice(i,1);
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
