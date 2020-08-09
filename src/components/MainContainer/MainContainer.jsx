import React, { Component } from 'react'
import { Box } from "@material-ui/core";
import styles from "./MainContainer.module.css";

export default class MainContainer extends Component {
    render() {
        return (
            <div style={{ width: '100%',height: '100%' }}>
                <Box height={100} display="flex" p={1} alignItems="center" justifyContent="space-between">
                    <div className={styles.leftFloat}>BP CARD</div>
                    <div>SUGAR TEST CARD</div>
                    <div className={styles.rightFloat}>VACCINE TEST FORM</div>
                </Box>
            </div>
        )
    }
}
