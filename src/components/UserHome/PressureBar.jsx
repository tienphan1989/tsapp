import React from 'react';
import {Bar} from 'react-chartjs-2';

export default class PressureBar extends React.Component {
  bpDates = () => {
    let datesArray = this.props.bpData.map((data) => data.created_date);
    return datesArray.sort((a, b) => a - b);
  };

  bpResults = () => {
    return this.props.bpData.map((data) => data.systolic_pressure);
  };
  render() {

    const data = {
      labels: this.bpDates(),
      datasets: [
      {
          label: "= blood pressure results",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.bpResults(),
        },
        ],
    };

    return (
      <div>
        <h2>Blood pressure results</h2>
          <Bar
            data={data}
            width={100}
            height={100}
            options={{
              maintainAspectRatio: false
            }}
          />
      </div>
    );
  }
};