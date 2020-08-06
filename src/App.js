import React, { Component } from "react";
import Header from "./Header";
//import { CssBaseline } from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                </div>
            </div>
        );
    }
}

export default App;