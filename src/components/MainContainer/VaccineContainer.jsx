import React, { Component } from 'react'
import "./MainContainer.css"
import vaccine from "./profession.svg";

export default class VaccineContainer extends Component {
    render() {
        return (
            <section className='vaccine-box'>
                <div>
                    <img src={vaccine} alt="nurse-emoji" className="info-images"/>
                </div>
                <h2>Vaccine Screening</h2>
                <p>Answer some quick questions and I'll let you know
                    if your up to date on your vaccines so you can stay protected! 
                </p>
            </section>
        )
    }
}
