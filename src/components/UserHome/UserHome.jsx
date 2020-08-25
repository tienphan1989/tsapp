import React from 'react';

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
            <div className="ui left aligned container">
                <h1>{this.state.user.username}</h1>
                <h1>My progress...</h1>
            </div>
        )
    }
}

export default UserHome