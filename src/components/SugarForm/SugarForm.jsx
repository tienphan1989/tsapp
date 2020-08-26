import React, { Component } from 'react'

export default class SugarForm extends Component {

    sugarInfo = (sugarResults) => {
        fetch('http://localhost:3000/api/v1/sugarscreens', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                user_id: localStorage.userId,
                result: sugarResults
            })
        })
        .then(resp => resp.json())
        .then(console.log)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
