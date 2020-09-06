// import React, { Component } from 'react';
// import {Line} from 'react-chartjs-2';

// export default class RandomPressureLine extends Component {

//   setInitialState = () => {
//     let initialState = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [
//         {
//           label: 'My First dataset',
//           fill: false,
//           lineTension: 0.1,
//           backgroundColor: 'rgba(75,192,192,0.4)',
//           borderColor: 'rgba(75,192,192,1)',
//           borderCapStyle: 'butt',
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: 'miter',
//           pointBorderColor: 'rgba(75,192,192,1)',
//           pointBackgroundColor: '#fff',
//           pointBorderWidth: 1,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//           pointHoverBorderColor: 'rgba(220,220,220,1)',
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: this.props.sugarData
//         }
//       ]
//     };
//     return initialState;
//   }

// 	componentWillMount(){
//     this.setState(this.setInitialState());
//   };
  
// 	componentDidMount(){
// 		setInterval(function(){
// 			var oldDataSet = this.state.datasets[0];
// 			var newData = [];

// 			for(var x=0; x< this.state.labels.length; x++){
// 				newData.push(Math.floor(Math.random() * 100));
// 			}

// 			var newDataSet = {
// 				...oldDataSet
// 			};

// 			newDataSet.data = newData;

// 			var newState = {
// 				...this.setInitialState(),
// 				datasets: [newDataSet]
// 			};

// 			this.setState(newState);
// 		}, 5000);
//   };

// 	render() {

// 		return (
// 			<Line data={this.state}/>
// 		);
// 	}
// };