import React, { Component } from "react";
import Basic from "./Form";
import Header from "./Header";
//import { CssBaseline } from '@material-ui/core';
import StyledButton from './StyledButton'


class App extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <StyledButton>(New user sign up)</StyledButton>
                    <Basic handleSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default App;