import React, { Component } from "react";

export default class StatisticsPanel extends Component {
  render() {
    return (
      <div id="main">
        <table className="timecard">
          <caption>History</caption>
          <thead>
            <tr>
              <th id="thDay"></th>
              <th id="thRegular">Systolic</th>
              <th id="thOvertime">Diastolic</th>
              <th id="thTotal">Sugar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <th>Prior appointment</th>
              <td>148.8</td>
              <td>103.8</td>
              <td>129</td>
            </tr>
            <tr className="even">
              <th>Last 30 days</th>
              <td>146</td>
              <td>103</td>
              <td>131</td>
            </tr>
            <tr className="odd">
              <th>Last 7 days</th>
              <td>137</td>
              <td>98</td>
              <td>127</td>
            </tr>
            <tr className="even">
              <th>Results below goal</th>
              <td>64%</td>
              <td>67%</td>
              <td>27%</td>
            </tr>
            <tr className="odd">
              <th>Results above goal</th>
              <td>35%</td>
              <td>33%</td>
              <td>73%</td>
            </tr>
            <tr className="even">
              <th>Highest value</th>
              <td>212</td>
              <td>118</td>
              <td>181</td>
            </tr>
            <tr className="odd">
              <th>Lowest value</th>
              <td>116</td>
              <td>92</td>
              <td>86</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Current average:</th>
              <td style={{background: 'green'}}>142.8</td>
              <td style={{background: 'green'}}>102.8</td>
              <td style={{background: 'lightgreen'}}>132</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
