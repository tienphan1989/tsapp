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
import UserPanels from "./UserPanels.jsx";
import ApiPanels from "./ApiPanels.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { IconButton, Button } from "@material-ui/core";

class UserHome extends React.Component {
  state = {
    value: "bp",
    index: 0,
    open: false,
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

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
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
        display_date: screen.display_date,
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
      return {
        display_date: screen.display_date,
        created_date: screen.created_date,
        date: screen.date,
        result: screen.result,
      };
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
            <Paper className="user-column-1 user-paper">
              <UserPanels currentUser={this.state.currentUser} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="user-column-2 user-paper">
              <div className="paper-tabs">
                <Tabs
                  aria-labelledby="history view edit"
                  value={this.state.index}
                  onChange={this.handleTab}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  aria-label="simple tabs"
                >
                  <Tab
                    id="history"
                    aria-label="history"
                    icon={<ListIcon />}
                    label="History"
                    disabled={this.state.value === "vaccine" ? true : false}
                  />

                  <Tab
                    aria-label="View"
                    id="view"
                    icon={<ShowChartIcon />}
                    label="View"
                    disabled={this.state.value === "vaccine" ? true : false}
                  />

                  <Tab
                    aria-label="edit"
                    id="edit"
                    icon={<EditIcon />}
                    label="Edit"
                    disabled={this.state.value === "vaccine" ? true : false}
                  />
                </Tabs>
              </div>
              <div>
                <div className="listings-filter">
                  <div className="line-filter">
                    <form>
                      <FormControl>
                        <InputLabel id="demo-controlled-open-select-label">
                          select
                        </InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={this.state.open}
                          onClose={this.handleClose}
                          onOpen={this.handleOpen}
                          value={this.state.value}
                          onChange={this.handleChange}
                          variant="standard"
                          color="default"
                          margin="dense"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="bp">Blood pressure</MenuItem>
                          <MenuItem value="sugar">Blood sugar</MenuItem>
                        </Select>
                      </FormControl>
                    </form>
                  </div>
                </div>
              </div>

              {this.state.value === "bp" && (
                <Paper>
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
                      sugarData={this.userAllSugar()}
                      value={this.state.value}
                      handleChange={this.handleChange}
                    />
                  )}
                </div>
              )}
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className="user-api user-paper">
              <ApiPanels />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default UserHome;
