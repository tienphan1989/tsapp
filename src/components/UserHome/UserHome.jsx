import React from 'react';
import "./UserHome.css";
import UserGoals from "./UserGoals.jsx";

class UserHome extends React.Component {
    state = {
        value: 'bp'
    }

    // componentDidMount() {
    //     fetch('http://localhost:3000/api/v1/users/' + localStorage.userId)
    //     .then(response => response.json())
    //     .then(user => this.setState({user}))
    // }

    handleChange = (event)=> {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="user-home-container">
                <div className="welcome-container">
                    <h1>Welcome home, [insert state.userName]!</h1>
                </div>
                    <div>
                        <div className='sidebar-listings-div'>
                            <div className='sidebar-div'>
                                <p>Goals</p>
                                <div className='sample-div'>
                                    <UserGoals/>
                                </div>
                            </div>

                            <div className='listings-div'>
                                <div className='listings-filter'>
                                <form onSubmit={this.handleSubmit}>
                                    <label>My results</label>
                                        <select value={this.state.filter} onChange={this.handleChange}>
                                            <option>view</option>
                                            <option value="bp">Blood pressure results</option>
                                            <option value="sugar">Blood sugar results</option>
                                            <option value="vaccine">Vaccine status</option>
                                        </select>                                  
                                    <input type="submit" value="Submit" />
                                </form>
                                </div>
                                <div className='sample-div'>
                                    <p>Blood Pressure</p>
                                </div>
                                <div className='sample-div'>
                                    <p>Blood Sugar</p>
                                </div>
                                <div className='sample-div'>
                                    <p>Vaccine status</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default UserHome