import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class PressureLine extends Component {
  pressureDates = () => {
      let datesArray = this.props.bpData.map(data => data.created_date)
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
            label: '= blood pressure data',
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#90caf9",
            borderColor: "#90caf9",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#90caf9",
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#90caf9",
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
          {/* <div className="listings-filter">
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
        </div> */}
        <div className='pressure-line-parent'>

            <Line data={data} options={{ maintainAspectRatio: false }}/>
            </div>
        </div>
        );
    }
}
// send all points as {date:,result:}

// have a state of {months: } //how many months in the past should it show

// set initial state {months: 6}

// possible months are 1,3,6 = n

// have dropdown that sets state {months: 1,3 or 6}

// when state changes,

// then make arrays objects grouped by the month, 
// //example C would be 3 months ago
// A = [
// 	{date: 1/2/2020 result: x},
// 	{date: 1/5/2020 result: y},
// 	{date: 1/10/2020 result: z}
// ]

// B = [
// 	{date: 12/2/2019 result: x2},
// 	{date: 12/5/2019 result: y2},
// 	{date: 12/10/2019 result: z2}
// ]
// ...
// Z = [....]

// make new single array that has  array[monthNumber] = average of points on that month
// //note that the months are going backwards
// each element is average of A,B,C....Z
// 		     //indexes are [month of A,month of B]
// => averagePerMonth = [(x+y+z)/3, (x2+y2+z2)/3]

// //monthPointMap[monthNumber] is an array with key of month number
// //                            and value of example array A,B etc... at index of monthNumber
// make new array = monthPointMap[monthNumber] = averagePerMonth[monthNumber]
// example  monthPointMap(index: 1, value:(x+y+z)/3) //not an object, just explaining

// example => array[1] = avg(A), array[12] = avg(B) 

// for(i = 0; i < monthPointMap.length; i++)
// {
// 	if(monthPointMap[i])
// 	{
// 		set i as a x axis label
// 		set monthPointMap[i] as the y value
// 		the point will be i,monthPointMap[i] (you arent giving this, just give y)
// 	}
// }