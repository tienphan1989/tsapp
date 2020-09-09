import React, { Component } from 'react'
import { Box } from "@material-ui/core";
import BpContainer from "./BpContainer.jsx";
import SugarContainer from "./SugarContainer.jsx";
import VaccineContainer from "./VaccineContainer.jsx";
import "./MainContainer.css"
import HelpAction from './HelpAction'

export default class MainContainer extends Component {
    render() {
        return (
            <>
                <Box className="box-main">
                    <div className='main-row-1'>
                        <div className='main-column-1'><BpContainer/></div>
                        <div className='main-column-1'><SugarContainer/></div>
                        <div className='main-column-1'><VaccineContainer/></div>
                    </div>
                    <HelpAction fontSize='small'/>
                </Box>
            </>
        )
    }
}