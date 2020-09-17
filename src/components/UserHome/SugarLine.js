import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class SugarLine extends Component {
  //let msec = Date.parse("March 21, 2012");
  //let d = new Date(msec);
  sugarDates = () => {
    let datesArray = this.props.sugarData.map((data) => data.display_date);
    return datesArray.sort((a, b) => a - b);
  };

  sugarResults = () => {
    return this.props.sugarData.map((data) => data.result);
  };

  render() {
    const data = {
      labels: this.sugarDates(),
      datasets: [
        {
          label: "= blood sugar data",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "#fff",
          borderColor: "#90caf9",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#90caf9",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#90caf9",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.sugarResults(),
        },
      ],
    };

    return (
      <div className="graph-div">
        <div className='sugar-line-parent'>
          
          <Line data={data} options={{ maintainAspectRatio: false }} />
          </div>
      </div>
    );
  }
}
