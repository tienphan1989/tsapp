/* eslint-disable jsx-a11y/alt-text */
import React, { useState, Fragment } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ApiCall from "./ApiCall.jsx";
import { ApiRecipe } from "./ApiRecipe.jsx";
import { ApiNutrition } from "./ApiNutrition.jsx";
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

export default function StatefulExpansionPanels(props) {
  const [expanded, setExpanded] = useState('');
  const [panels] = useState([
    {
      title: "Create",
      content:<ApiCall />,
      icon: <CreateIcon/> 
    },
    {
      title: "Discover",
      content: <ApiRecipe />,
      icon: <SearchIcon/> 
    },
    {
      title: "Learn",
      content: <ApiNutrition />,
      icon: <HelpIcon/> 
    },
  ]);

  const onChange = (expanded) => () => {
    setExpanded(expanded);
  };

  return (
    <Fragment>
      {panels
        .filter((panel) => !panel.hidden)
        .map((panel, index) => (
          <ExpansionPanel
            key={index}
            expanded={index === expanded}
            disabled={panel.disabled}
            onChange={onChange(index)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              {panel.icon}
              <Typography style={{ justifySelf: "center" }}>
                {panel.title}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: 'block', fontSize: '16px', fontFamily: 'Raleway'}}>
              <Typography>{panel.content}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </Fragment>
  );
}
