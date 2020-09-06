/* eslint-disable no-unused-vars */
import React from 'react';
import "./UserHome.css";
import PressureTable from './PressureTable.jsx';
import SugarTable from './SugarTable.jsx';
import PressureLine from './PressureLine';
import SugarLine from './SugarLine';
import SugarBar from './SugarBar';
import PressureBar from './PressureBar';
import DynamicPressureLine from './DynamicPressureLine';
import DynamicSugarLine from './DynamicSugarLine';
import DynamicSugarBar from'./DynamicSugarBar';
import DynamicPressureBar from'./DynamicPressureBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StateTabs from './StateTabs';
import HomeIcon from '@material-ui/icons/Home';

class UserHome extends React.Component {
    state = {
        value: 'bp',
        currentUser: {
            sugar_screens: [],
            bp_screens: [],
            vaccination_record: ''
        },
        index: 0
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
        .then(response => response.json())
        .then(user => this.setState({
            currentUser: user
        }))
    }

    handleChange = (event)=> {
        this.setState({value: event.target.value});
    }

    userSystolicData = () => {
        return this.state.currentUser.bp_screens.map(screen => screen.systolic_pressure)
    }

    userSugarData = () => {
        return this.state.currentUser.sugar_screens.map(screen => screen.result)
    }

    handleTab = (event, newValue) => {
        this.setState({
            index: newValue
        })
    };

    render() {  
        return (
            <div className="user-home-container">
                <div className="welcome-container">
                    <h1>Welcome home, {this.state.currentUser.username}!</h1>
                </div>
                    <div>
                        <div className='sidebar-listings-div'>
                            <div className='listings-div'>
                                {/* <StateTabs/> */}
                                <Paper className='paper-tabs'>
                                    <Tabs
                                    value={this.state.index}
                                    onChange={this.handleTab}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                    selectionFollowsFocus
                                    >
                                        <Tab label="History" disabled={this.state.value === 'vaccine' ? true : false}/>
                                        <Tab label="Linear view" disabled={this.state.value === 'vaccine' ? true : false}/>
                                        <Tab label="Customize view" disabled={this.state.value === 'vaccine' ? true : false}/>
                                    </Tabs>
                                </Paper>
                                <div className='listings-filter'>
                                    <form>
                                        <label>Display: </label>
                                            <select value={this.state.filter} onChange={this.handleChange}>
                                                <option>select</option>
                                                <option value="bp">Blood pressure results</option>
                                                <option value="sugar">Blood sugar results</option>
                                                <option value="vaccine">Vaccine status</option>
                                            </select>                                  
                                    </form>
                                </div>

                                {this.state.value === 'bp' && (
                                    <div className='sample-div'>
                                        <h4>Blood Pressure data (mmHg)</h4>
                                        {this.state.index === 0 && <PressureTable bpData={this.state.currentUser.bp_screens}/>}
                                        {this.state.index === 1 && <PressureLine bpData={this.userSystolicData()}/>}
                                        {this.state.index === 2 && <PressureBar bpData={this.userSystolicData()}/>}
                                        {/* <DynamicPressureLine bpData={this.userSystolicData()}/> */}
                                        {/* <DynamicPressureBar bpData={this.userSystolicData()}/> */}
                                    </div>)}

                                {this.state.value === 'sugar' && (
                                    <div className='sample-div'>
                                        <h4>Sugar Data (mg/dL)</h4>
                                        {this.state.index === 0 && <SugarTable sugarData={this.state.currentUser.sugar_screens}/>}
                                        {this.state.index === 1 && <SugarLine sugarData={this.userSugarData()}/>}
                                        {this.state.index === 2 && <SugarBar sugarData={this.userSugarData()}/>}
                                        {/* <DynamicSugarLine sugarData={this.userSugarData()}/> */}
                                        {/* <DynamicSugarBar sugarData={this.userSugarData()}/> */} 
                                    </div>)}

                                {this.state.value === 'vaccine' && (
                                    <div className='sample-div'>
                                        <h4>Vaccine status</h4>
                                        <p>Tetanus: {this.state.currentUser.vaccination_record.tetanus ? "Covered" : "Not covered"}</p>
                                        <p>Flu: {this.state.currentUser.vaccination_record.flu ? "Covered" : "Not covered"}</p>
                                        <p>Pneumonia: {this.state.currentUser.vaccination_record.pneumonia ? "Covered" : "Not covered"}</p>
                                        <p>Shingles: {this.state.currentUser.vaccination_record.shingles ? "Covered" : "Not covered"}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default UserHome