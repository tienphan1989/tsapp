import React, { Component } from 'react'
import { Box } from "@material-ui/core";


export default class MainContainer extends Component {
    render() {
        return (
            <>
                <Box className="box-main">
                    <div className='bp-box'>
                        BP CARD
                    </div>
                    <div className='sugar-box'>
                        SUGAR TEST CARD
                    </div>
                    <div className='vaccine-box'>
                        VACCINE TEST FORM
                    </div>
                </Box>
            </>
        )
    }
}