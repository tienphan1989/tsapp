import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class SugarLine extends Component {
    render() {
        const data2 = {
        //labels: labels.length === data2.length ? labels : new Array(data2.length).fill("Data2")
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
            label: '= test results',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.sugarData
            }
        ]
    };

        return (
        <div>
            <h2>Blood sugar data</h2>
            <Line data={data2}/>
        </div>
        );
    }
}