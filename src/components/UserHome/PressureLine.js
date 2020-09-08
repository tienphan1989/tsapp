import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class PressureLine extends Component {
  pressureDates = () => {
      let datesArray = this.props.bpData.map(data => data.date)
      return datesArray.sort((a, b) => a - b)
  }

  pressureResults = () => {
      return this.props.bpData.map(data => data.systolic_pressure)
  }

    render() {
      const data = {
        labels: this.pressureDates(),
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
            data: this.pressureResults()
          },
          {
            label: '= test results',
            fill: false,
            lineTension: 0.4,
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
            data: this.pressureResults()
          }
        ],
        options: {
            maintainAspectRatio: false,
        }
      };

        return (
        <div className='graph-div'>
          <div className="listings-filter">
            <div className="graph-listings-filter">
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
            <h2>Blood pressure data</h2>
            <Line data={data} options={{ maintainAspectRatio: false }}/>
        </div>
        );
    }
}
