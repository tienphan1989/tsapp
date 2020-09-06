import React from 'react';
import {Bar} from 'react-chartjs-2';

export default class PressureBar extends React.Component {
  render() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
      {
          label: "= test results",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.props.bpData,
        },
        ],
    };

    return (
      <div>
        <h2>Blood pressure results</h2>
          <Bar
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
      </div>
    );
  }
};