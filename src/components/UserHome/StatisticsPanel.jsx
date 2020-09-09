import React, { Component } from "react";

export default class StatisticsPanel extends Component {
  render() {
    return (
      <div id="main">
        <table className="timecard">
          <caption>Measurables</caption>
          <thead>
            <tr>
              <th id="thDay">Duration</th>
              <th id="thRegular">Systolic pressure</th>
              <th id="thOvertime">Diastolic pressure</th>
              <th id="thTotal">Sugar levels</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <th>Last 365 days</th>
              <td>8</td>
              <td>0</td>
              <td>8</td>
            </tr>
            <tr className="even">
              <th>Last 180 days</th>
              <td>8</td>
              <td>2.5</td>
              <td>10.5</td>
            </tr>
            <tr className="odd">
              <th>Last 90 days</th>
              <td>8</td>
              <td>0</td>
              <td>8</td>
            </tr>
            <tr className="even">
              <th>Below goal(%)</th>
              <td>8</td>
              <td>0</td>
              <td>8</td>
            </tr>
            <tr className="odd">
              <th>Above goal(%)</th>
              <td>8</td>
              <td>0</td>
              <td>8</td>
            </tr>
            <tr className="even">
              <th>Uppermost value</th>
              <td>0</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr className="odd">
              <th>Lowest value</th>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Average overall:</th>
              <td>40</td>
              <td>8.5</td>
              <td>48.5</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
