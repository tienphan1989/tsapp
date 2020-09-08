import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class SugarLine extends Component {
    //let msec = Date.parse("March 21, 2012");
    //let d = new Date(msec);
    sugarDates = () => {
        let datesArray = this.props.sugarData.map(data => data.date)
        return datesArray.sort((a, b) => a - b)
    }

    sugarResults = () => {
        return this.props.sugarData.map(data => data.result)
    }

    render() {
        const data = {
        labels: this.sugarDates(),
        datasets: [
            {
            label: '= test results',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#fff',
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
            data: this.sugarResults()
            }, {
                label: '= test results2',
                fill: false,
                lineTension: 0.4,
                backgroundColor: '#fff',
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
                data: this.sugarResults()
                }
        ]
    };

        return (
            
        <div className='graph-div'>
            <div className="listings-filter">
                <div className="line-filter">
                <form>
                <label>Category: </label>
                    <select value={this.props.value} onChange={this.props.handleChange}>
                        <option>select</option>
                        <option value="bp">Blood pressure</option>
                        <option value="sugar">Blood sugar</option>
                        <option value="vaccine">Vaccine status</option>
                    </select>
                </form>
            </div>
      </div>
            <h2>Blood sugar data</h2>
            <Line data={data} options={{ maintainAspectRatio: false }}/>
        </div>
        );
    }
}