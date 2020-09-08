/* eslint-disable no-unused-vars */
import React from "react";
import "./UserHome.css";
import PressureTable from "./PressureTable.jsx";
import SugarTable from "./SugarTable.jsx";
import PressureLine from "./PressureLine";
import SugarLine from "./SugarLine";
import SugarBar from "./SugarBar";
import PressureBar from "./PressureBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ListIcon from "@material-ui/icons/List";
import EditIcon from "@material-ui/icons/Edit";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import Grid from "@material-ui/core/Grid";

class UserHome extends React.Component {
  state = {
    value: "bp",
    index: 0,
    currentUser: {
      sugar_screens: [],
      bp_screens: [],
      vaccination_record: "",
    },
    pressureOffset: 0,
    sugarOffset: 0,
    pressureData: [],
    pressureElements: [],
    sugarData: [],
    sugarElements: [],
    perPage: 10,
    currentPressurePage: 0,
    currentSugarPage: 0,
    pressurePageCount: 0,
    sugarPageCount: 0,
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
      .then((response) => response.json())
      .then((user) =>
        this.setState(
          {
            currentUser: user,
            pressureData: user.bp_screens,
            pressureElements: user.bp_screens,
            sugarData: user.sugar_screens,
            sugarElements: user.sugar_screens,
            pressurePageCount: Math.ceil(
              user.bp_screens.length / this.state.perPage
            ),
            sugarPageCount: Math.ceil(
              user.sugar_screens.length / this.state.perPage
            ),
          },
          () => this.setElementsForCurrentPage()
        )
      );
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleTab = (event, newValue) => {
    this.setState({
      index: newValue,
    });
  };

  userSystolicData = () => {
    return this.state.currentUser.bp_screens.map(
      (screen) => screen.systolic_pressure
    );
  };

  userAllPressure = () => {
    return this.state.currentUser.bp_screens.map((screen) => {
      return {
        created_date: screen.created_date,
        date: screen.date,
        systolic_pressure: screen.systolic_pressure,
        diastolic_pressure: screen.diastolic_pressure,
      };
    });
  };

  userSugarData = () => {
    return this.state.currentUser.sugar_screens.map((screen) => screen.result);
  };

  userAllSugar = () => {
    return this.state.currentUser.sugar_screens.map((screen) => {
      return { date: screen.date, result: screen.result };
    });
  };

  handlePressureClick = (data) => {
    let selectedPressurePage = data.selected;
    let offset = Math.ceil(selectedPressurePage * this.state.perPage);

    this.setState(
      {
        currentPressurePage: selectedPressurePage,
        pressureOffset: offset,
      },
      () => this.setElementsForPressurePage()
    );
  };

  setElementsForPressurePage() {
    let pressureElements = this.state.currentUser.bp_screens
      .slice(
        this.state.pressureOffset,
        this.state.pressureOffset + this.state.perPage
      )
      .map((screen) => screen);
    this.setState({
      pressureElements,
    });
  }

  handleSugarClick = (data) => {
    let selectedSugarPage = data.selected;
    let offset = Math.ceil(selectedSugarPage * this.state.perPage);

    this.setState(
      {
        currentSugarPage: selectedSugarPage,
        sugarOffset: offset,
      },
      () => this.setElementsForSugarPage()
    );
  };

  setElementsForSugarPage() {
    let sugarElements = this.state.currentUser.sugar_screens
      .slice(
        this.state.sugarOffset,
        this.state.sugarOffset + this.state.perPage
      )
      .map((screen) => screen);
    this.setState({
      sugarElements,
    });
  }

  setElementsForCurrentPage() {
    let pressureElements = this.state.currentUser.bp_screens
      .slice(
        this.state.pressureOffset,
        this.state.pressureOffset + this.state.perPage
      )
      .map((screen) => screen);
    let sugarElements = this.state.currentUser.sugar_screens
      .slice(
        this.state.sugarOffset,
        this.state.sugarOffset + this.state.perPage
      )
      .map((screen) => screen);
    this.setState({
      pressureElements,
      sugarElements,
    });
  }

  render() {
    return (
      <div className="user-homepage">
        <Grid
          container
          spacing={1}
          justify="space-between"
          style={{ width: "100%" }}
        >
          <Grid item xs>
            <Paper className="user-column-1 user-paper" elevation={1}>
              <div className="sample-div">
                <h4>Vaccine status</h4>
                <p>
                  Tetanus:{" "}
                  {this.state.currentUser.vaccination_record.tetanus
                    ? "Covered"
                    : "Not covered"}
                </p>
                <p>
                  Flu:{" "}
                  {this.state.currentUser.vaccination_record.flu
                    ? "Covered"
                    : "Not covered"}
                </p>
                <p>
                  Pneumonia:{" "}
                  {this.state.currentUser.vaccination_record.pneumonia
                    ? "Covered"
                    : "Not covered"}
                </p>
                <p>
                  Shingles:{" "}
                  {this.state.currentUser.vaccination_record.shingles
                    ? "Covered"
                    : "Not covered"}
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="user-column-2 user-paper" elevation={3}>
              <div className="paper-tabs">
                <Tabs
                  value={this.state.index}
                  onChange={this.handleTab}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab
                    icon={<ListIcon />}
                    label="History"
                    disabled={this.state.value === "vaccine" ? true : false}
                  />
                  <Tab
                    icon={<ShowChartIcon />}
                    label="View"
                    disabled={this.state.value === "vaccine" ? true : false}
                  />
                  <Tab
                    icon={<EditIcon />}
                    label="Edit"
                    disabled={this.state.value === "vaccine" ? true : false}
                  />
                </Tabs>
              </div>
              {this.state.value === "bp" && (
                <Paper elevation={1}>
                  {this.state.index === 0 && (
                    <PressureTable
                      value={this.state.value}
                      handleChange={this.handleChange}
                      onPressureChange={this.handlePressureClick}
                      forcePage={this.state.currentPressurePage}
                      pageCount={this.state.pressurePageCount}
                      pressureElements={this.state.pressureElements}
                    />
                  )}
                  {this.state.index === 1 && (
                    <PressureLine
                      bpData={this.userAllPressure()}
                      value={this.state.value}
                      handleChange={this.handleChange}
                    />
                  )}
                  {this.state.index === 2 && (
                    <PressureBar
                      bpData={this.userAllPressure()}
                      value={this.state.value}
                      handleChange={this.handleChange}
                    />
                  )}
                </Paper>
              )}

              {this.state.value === "sugar" && (
                <div className="sample-div">
                  {this.state.index === 0 && (
                    <SugarTable
                      sugarData={this.state.currentUser.sugar_screens}
                      value={this.state.value}
                      handleChange={this.handleChange}
                      onPageChange={this.handleSugarClick}
                      forcePage={this.state.currentSugarPage}
                      pageCount={this.state.sugarPageCount}
                      sugarElements={this.state.sugarElements}
                    />
                  )}
                  {this.state.index === 1 && (
                    <SugarLine
                      sugarData={this.userAllSugar()}
                      value={this.state.value}
                      handleChange={this.handleChange}
                    />
                  )}
                  {this.state.index === 2 && (
                    <SugarBar
                      sugarData={this.userSugarData()}
                      value={this.state.value}
                      handleChange={this.handleChange}
                    />
                  )}
                </div>
              )}
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className="user-api user-paper" elevation={1}>
              <Paper className="user-api-1 user-paper" elevation={2}>
                generate meal plan
              </Paper>
              <Paper className="user-api-2 user-paper" elevation={2}>recipe nutrition</Paper>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default UserHome;

// return (
// <div className="user-home-container">
//   <div>
//     <div className="sidebar-listings-div">
//       <Paper className="listings-div" elevation={3} variant="outlined">
//           <Paper className="api-box">
//               <Paper className="api-box1">
//                   Generate meal plan
//               </Paper>
//               <Paper className="api-box2">
//                   Match Recipes to Daily Calories
//               </Paper>
//           </Paper>

// <div className="paper-tabs">
//   <Tabs
//     value={this.state.index}
//     onChange={this.handleTab}
//     indicatorColor="primary"
//     textColor="primary"
//     centered
//   >
//     <Tab
//       icon={<ListIcon />}
//       label="History"
//       disabled={this.state.value === "vaccine" ? true : false}
//     />
//     <Tab
//       icon={<ShowChartIcon />}
//       label="View"
//       disabled={this.state.value === "vaccine" ? true : false}
//     />
//     <Tab
//       icon={<EditIcon />}
//       label="Edit"
//       disabled={this.state.value === "vaccine" ? true : false}
//     />
//   </Tabs>
// </div>

// {this.state.value === "bp" && (
//   <Paper elevation={1} className='three-column'>
//     {this.state.index === 0 && (
//       <PressureTable
//         value={this.state.value}
//         handleChange={this.handleChange}
//         onPressureChange={this.handlePressureClick}
//         forcePage={this.state.currentPressurePage}
//         pageCount={this.state.pressurePageCount}
//         pressureElements={this.state.pressureElements}
//       />
//     )}
//     {this.state.index === 1 && (
//       <PressureLine
//         bpData={this.userAllPressure()}
//         value={this.state.value}
//         handleChange={this.handleChange}
//       />
//     )}
//     {this.state.index === 2 && (
//       <PressureBar
//         bpData={this.userAllPressure()}
//         value={this.state.value}
//         handleChange={this.handleChange}
//       />
//     )}
//   </Paper>
// )}

// {this.state.value === "sugar" && (
//   <div className="sample-div">
//     {this.state.index === 0 && (
//       <SugarTable
//         sugarData={this.state.currentUser.sugar_screens}
//         value={this.state.value}
//         handleChange={this.handleChange}
//         onPageChange={this.handleSugarClick}
//         forcePage={this.state.currentSugarPage}
//         pageCount={this.state.sugarPageCount}
//         sugarElements={this.state.sugarElements}
//       />
//     )}
//     {this.state.index === 1 && (
//       <SugarLine
//         sugarData={this.userAllSugar()}
//         value={this.state.value}
//         handleChange={this.handleChange}
//       />
//     )}
//     {this.state.index === 2 && (
//       <SugarBar
//         sugarData={this.userSugarData()}
//         value={this.state.value}
//         handleChange={this.handleChange}
//       />
//     )}
//   </div>
// )}

//             {this.state.value === "vaccine" && (
//               <div className="sample-div" >
//                 <div className="listings-filter">
//                 <div className="vaccine-filter">
//                   <form>
//                     <label>Category: </label>
//                     <select
//                       value={this.state.value}
//                       onChange={this.handleChange}
//                     >
//                       <option>select</option>
//                       <option value="bp">Blood pressure</option>
//                       <option value="sugar">Blood sugar</option>
//                       <option value="vaccine">Vaccine status</option>
//                     </select>
//                   </form>
//                   </div>
//                 </div>
//                 <h4>Vaccine status</h4>
//                 <p>
//                   Tetanus:{" "}
//                   {this.state.currentUser.vaccination_record.tetanus
//                     ? "Covered"
//                     : "Not covered"}
//                 </p>
//                 <p>
//                   Flu:{" "}
//                   {this.state.currentUser.vaccination_record.flu
//                     ? "Covered"
//                     : "Not covered"}
//                 </p>
//                 <p>
//                   Pneumonia:{" "}
//                   {this.state.currentUser.vaccination_record.pneumonia
//                     ? "Covered"
//                     : "Not covered"}
//                 </p>
//                 <p>
//                   Shingles:{" "}
//                   {this.state.currentUser.vaccination_record.shingles
//                     ? "Covered"
//                     : "Not covered"}
//                 </p>
//               </div>
//             )}
//           </Paper>
//         </div>
//       </div>
//     </div>
//   );
