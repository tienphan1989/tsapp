import React, { Component } from 'react'
import "./MainContainer.css"
import glucometer from "./diabetes (1).svg";

export default class SugarContainer extends Component {
    render() {
        return (
            <section className='sugar-box'>
                <div>
                    <img src={glucometer} alt="finger-sample" className="info-images"/>
                </div>
                <h2>Blood Sugar Screening</h2>
                <p>Submit a sugar reading here
                    and I'll let you know how your doing! 
                </p>
            </section>
        )
    }
}
