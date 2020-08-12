import React, { Component } from 'react'
import IntroDiv from "./IntroDiv";
import TagDiv from "./TagDiv";
import StartButton from "../Buttons/StartButton";

export default class HeroContainer extends Component {
    render() {
        return (
            <div className='hero-div'>
                <>
                    <IntroDiv/>
                    <TagDiv/>
                    <StartButton/>
                </>
            </div>
        )
    }
}
