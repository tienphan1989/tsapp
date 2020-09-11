import React from "react";
import { Bar } from "react-chartjs-2";

export default class SugarBar extends React.Component {
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
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: this.sugarResults(),
            },
            ],
        };
        return (
        <div>
              <Bar
              data={data}
              width={100}
              height={530}
              options={{
                  maintainAspectRatio: false,
              }}
              />
        </div>
    );
  }
};
