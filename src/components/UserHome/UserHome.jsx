import React from 'react';
import "./UserHome.css";
import UserGoals from "./UserGoals.jsx";

class UserHome extends React.Component {
    state = {
        user: {}
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/users/' + localStorage.userId)
        .then(response => response.json())
        .then(user => this.setState({user}))
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
                                <div><h2>My results</h2></div>
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