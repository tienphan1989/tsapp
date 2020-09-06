import React from 'react';
import {Bar} from 'react-chartjs-2';
import { green, red } from '@material-ui/core/colors';

export default class DynamicPressureBar extends React.Component {
	setInitialState = () => {
		const initialState = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
			{
				label: 'Blood pressure results',
				backgroundColor: 'rgba(255,99,132,0.2)',
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgba(255,99,132,1)',
				data: this.props.bpData
			}]
		};
		return initialState;
	};

	componentWillMount(){
		this.setState(this.setInitialState());
	};

	componentDidMount(){
		setInterval(function(){
			var oldDataSet = this.state.datasets[0];
			var newData = [];

			for(var x=0; x< this.state.labels.length; x++){
				newData.push(Math.floor(Math.random() * 100));
			}

			var newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;
			newDataSet.backgroundColor = green;
			newDataSet.borderColor = red;
			newDataSet.hoverBackgroundColor = green;
			newDataSet.hoverBorderColor = red;

			var newState = {
				...this.setInitialState(),
				datasets: [newDataSet]
			};

			this.setState(newState);
		}, 5000);
	};

	render() {
		return (
			<Bar data={this.state} />
		);
	}
};