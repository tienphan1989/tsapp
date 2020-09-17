/* eslint-disable no-unused-vars */
import React from "react";
import configObj from "../../helpers/configObj.js";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

export const ApiNutrition = () => {
  const [values, setValues] = useState({
    quantity: "",
    portion: "",
    ingredient: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    results: 
      {
        calories: null,
        dietLabels: null,
        totalNutrients: null,
        totalDaily: null
      }
    
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const onDialogClose = () => {
    setDialogOpen(false);
    setValues('');
  };
 
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const onSnackbarClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  const onCreate = () => {
    setSnackbarOpen(true);
    setSnackbarMessage("this is the snakcbar message");
    onDialogClose();
  };

  const onDialogOpen = () => {
    setDialogOpen(true);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      "http://localhost:3000/api/v1/apinutrition",
      configObj("POST", true, {
        quantity: values.quantity,
        portion: values.portion,
        ingredient: values.ingredient,
      })
    )
      .then((response) => response.json())
      .then((resp) => {
        setDialogContent(resp);
        console.log(resp, dialogContent)
        handleClickOpen();
      })
      .catch((error) => console.log(error));
  };

  const showRecipe = () => {
    return dialogContent
    // return dialogContent.map((recipe) => (
    //   <React.Fragment>
    //   <div class="card everything">
    //     <h1 class="food">Calories: {recipe.calories}</h1>
    // {/* Total preparation time: {recipe.healthLabels.map(label => <li>{label}</li>)}<br/> */}
    //     <div class="card-container">
    //       <div class="card u-clearfix">
    //         <div class="card-body"></div>
    //         <Button>Save nutrition facts</Button>
    //       </div>
    //       <div class="card-shadow"></div>
    //     </div>
    //   </div>
    //   </React.Fragment>
    // ));
  };

  return (
    <React.Fragment>
      <div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: "webkit-right" }}>
              <div>
                <FormControl
                  size="small"
                  hiddenLabel="true"
                  margin="dense"
                  focused="true"
                >
                  <label htmlFor="quantity">Amount: </label>
                  <TextField
                    aria-describedby="quantity"
                    aria-label="quantity"
                    className=""
                    type="text"
                    placeholder="..."
                    name="quantity"
                    id="quantity"
                    value={values.quantity}
                    onChange={handleInputChange}
                    variant="outlined"
                    color="default"
                  />
                  <FormHelperText id="quantity">
                    e.g. (1) apple, (2) cups, (3) bowls
                  </FormHelperText>
                </FormControl>
              </div>
              <div>
                <FormControl
                  size="small"
                  hiddenLabel="true"
                  margin="dense"
                  focused="true"
                >
                  <label htmlFor="portion">Portion size: </label>
                  <TextField
                    aria-describedby="portion"
                    aria-label="portion"
                    className=""
                    type="text"
                    placeholder="..."
                    name="portion"
                    id="portion"
                    value={values.portion}
                    onChange={handleInputChange}
                    variant="outlined"
                    color="default"
                  />
                  <FormHelperText id="portion">
                    e.g. (1) cup, 1/2 chicken, (1) apple
                  </FormHelperText>
                </FormControl>
              </div>
              <div>
                <FormControl
                  size="small"
                  hiddenLabel="true"
                  margin="dense"
                  focused="true"
                >
                  <label htmlFor="ingredient">Ingredient: </label>
                  <TextField
                    aria-describedby="ingredient"
                    aria-label="ingredient"
                    className=""
                    type="text"
                    placeholder="..."
                    name="ingredient"
                    id="ingredient"
                    value={values.ingredient}
                    onChange={handleInputChange}
                    variant="outlined"
                    color="default"
                  />
                  <FormHelperText id="ingredient">
                    e.g. apple, rice, pie, donut
                  </FormHelperText>
                </FormControl>
              </div>
            </div>

            <div style={{ margin: "8px", padding: "6px" }}>
              <Button variant="contained" color="secondary" type="submit">
                submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {/* {showRecipe()} */}
        </DialogTitle>
        <DialogContent dividers>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
