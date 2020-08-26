import React, { Component } from 'react'

export default class VaccineForm extends Component {

    vaccineInfo = ( vaccineResults) => {
        fetch('http://localhost:3000/api/v1/vaccinationrecords', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(vaccineResults)
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
