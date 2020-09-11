/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Footer.css";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import InputWithIcon from "./InputIcon";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="profile-div">
          <p>
            To inspire hope, and contribute to health <br />
            and well-being by providing <br />
            integrated clinical practice, education and research.
          </p>
          <a
            href="https://www.linkedin.com/in/tien-phan-dc/"
            target="_blank"
            rel="noopener noreferrer"
            className="made-by"
          >
            ©2020 Health Check., engineered by Tien Phan.
          </a>
        </div>

        <div className="left-footer-column">
          <List dense>
            <ListItem dense divider>Support</ListItem>
            <ListItem dense>F.A.Q.'s</ListItem>
            <ListItem dense>How To Contribute</ListItem>
            <ListItem dense>Terms & Conditions</ListItem>
          </List>
        </div>

        <div className="center-footer">
          <List dense>
            <ListItem dense divider>Resources</ListItem>
            <ListItem dense>Partnerships</ListItem>
            <ListItem dense>Meet The Team</ListItem>
            <ListItem dense>Contact Us</ListItem>
          </List>
        </div>

        <div className="email-social-div">
          <div>Connect with us</div>
          <div style={{ marginRight: "5px" }}>
            <FormControl
              id="input-with-icon-textfield"
              margin="dense"
              focused="true"
              fullWidth="true"
            >
              <InputLabel id="input-with-icon-textfield"></InputLabel>
              <TextField
                color="primary"
                size="small"
                placeholder="Your email address"
                variant="outlined"
                id="input-with-icon-textfield"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
          <div className="social-media-div">
            <IconButton>
              <a
                href="https://github.com/TienPhanDev"
                target="_blank"
                rel="noopener noreferrer"
                className="made-by"
              >
                <FacebookIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.linkedin.com/in/tien-phan-dc/"
                target="_blank"
                rel="noopener noreferrer"
                className="made-by"
              >
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://github.com/TienPhanDev"
                target="_blank"
                rel="noopener noreferrer"
                className="made-by"
              >
                <TwitterIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.linkedin.com/in/tien-phan-dc/"
                target="_blank"
                rel="noopener noreferrer"
                className="made-by"
              >
                <LinkedInIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://github.com/TienPhanDev"
                target="_blank"
                rel="noopener noreferrer"
                className="made-by"
              >
                <GitHubIcon />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}
