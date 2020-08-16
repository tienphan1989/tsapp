import React, { Component } from 'react'
import IntroDiv from "./IntroDiv";
import TagDiv from "./TagDiv";
import "./HeroContainer.css"

export default class HeroContainer extends Component {
    render() {
        return (
            <div className='hero-div'>
                <>
                    <IntroDiv/>
                    <TagDiv/>
                </>
            </div>
        )
    }
}
