import React, { Component } from "react";
import Form from "./Form";
import Header from "./Header";
import Apidata from "./Apidata";


class App extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <h3>(New user sign up)</h3>
                    <Form handleSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default App;