/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import * as React from "react";
import { useState } from "react";
import configObj from "../../helpers/configObj.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function ApiCall() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [dialogContent, createDialogContent] = useState({});

  const [values, setValues] = useState({
    time_frame: "",
    calories: '',
    diet: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      "http://localhost:3000/api/v1/apicall",
      configObj("POST", true, {
        time_frame: values.time_frame,
        calories: parseInt(values.calories, 10),
        diet_query: values.diet
      })
    )
      .then((response) => response.json())
      .then(resp => { 
        console.log(resp)
        createDialogContent(resp)}) //display dialog component with recipes
        handleClickOpen()
      .catch((error) => console.log(error))
  }

  const onDialogOpen = () => {
    setDialogOpen(true);
  };

  const onDialogClose = () => {
    setDialogOpen(false);
    //setFirst('');
    //setLast('');
    //setEmail('');
  };

  const onSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  const onCreate = () => {
    setSnackbarOpen(true);
    setSnackbarMessage("this is the snakcbar message");
    onDialogClose();
  };

  return (
    <React.Fragment>
    <div className='api-response-container'>
        <form onSubmit={handleSubmit}>
          <div className='api-response-question' style={{display: 'block'}}>
        <FormControl hiddenLabel='true' margin='dense' focused='true' fullWidth='true'>
          <label htmlFor='time_frame'>Duration: </label>
          <InputLabel id="time_frame"></InputLabel>
            <Select
              labelId="time_frame"
              id="time_frame"
              value={values.time_frame}
              onChange={handleInputChange}
              name="time_frame"
              variant='standard'
              displayEmpty
            >
              <MenuItem value=""><em>select</em></MenuItem>
              <MenuItem value="day">Daily</MenuItem>
              <MenuItem value="week">Weekly</MenuItem>
            </Select>
            <FormHelperText id="time_frame">
                  e.g. 3 meals for day or 21 meals for week
              </FormHelperText>
            </FormControl>
          </div>
          <br/>
              <div>
            <FormControl size='small' hiddenLabel='true' margin='dense' focused='true'>
          <label htmlFor="calories">Maximum calories: </label>
          <TextField
            label="calories"
            variant="outlined"
            className=""
            type="number"
            placeholder="..."
            name="calories"
            id="calories"
            value={values.calories}
            onChange={handleInputChange}
          />
          <FormHelperText id="calories">
                  e.g. 1800 calories per day
              </FormHelperText>
          </FormControl>
          </div>
          <br/>
          <div>
          <FormControl size='small' hiddenLabel='true' margin='dense' focused='true'>
          <label htmlFor="diet">Dietary restrictions: </label>
          <TextField
            label="diet"
            variant="outlined"
            className=""
            type="text"
            placeholder="..."
            name="diet"
            id="diet"
            value={values.diet}
            onChange={handleInputChange}
          />
          <FormHelperText id="diet">
                  e.g. vegan, paleo, vegetarian, low-carb, low salt
                </FormHelperText>
          </FormControl>
          </div>
          <br/>
          <Button variant="contained" color="secondary" type="submit">
            submit
          </Button>
        </form>
    </div>

    <Dialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      {dialogContent.calories}
    </DialogTitle>
    <DialogContent dividers>
      <Typography gutterBottom>{dialogContent}</Typography>
      <Typography gutterBottom>{dialogContent}</Typography>
      <Typography gutterBottom>{dialogContent}</Typography>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose} color="primary">
        Save changes
      </Button>
    </DialogActions>
  </Dialog>
</React.Fragment>
  );
}

// {dialogContent.title}
// {dialogContent.readyInMinutes}
// {dialogContent.servings}
// {dialogContent.image}
// {dialogContent.nutrients.carbohydrates}
// {dialogContent.nutrients.fat}
// {dialogContent.nutrients.protein}
// {dialogContent.nutrients.calories}

// {meals: Array(3), nutrients: {…}}
// meals: Array(3)
// 0: {id: 222925, imageType: "jpg", title: "Courgette, potato & mint frittata", readyInMinutes: 25, servings: 2, …}
// 1: {id: 74120, imageType: "jpg", title: "Lemon-Honey Chicken With Olives", readyInMinutes: 15, servings: 8, …}
// 2: {id: 982371, imageType: "jpg", title: "Instant Pot Quinoa Grain Bowl", readyInMinutes: 13, servings: 4, …}
// length: 3
// __proto__: Array(0)
// nutrients:
// calories: 1799.92
// carbohydrates: 87.14
// fat: 110.35
// protein: 115.86

// {"meals":[3 items
//   0:{5 items
//   "id":49993
//   "title":"Cream Cheese Banana Nut Bread"
//   "readyInMinutes":90
//   "image":"cream-cheese-banana-nut-bread-2-49993.jpg"
//   "imageUrls":[2 items
//   0:"cream-cheese-banana-nut-bread-2-49993.jpg"
//   1:"cream_cheese_banana_nut_bread-49993.jpg"
// ]
//   }
//   1:{...}5 items
//   2:{...}5 items
//   ]
//   "nutrients":{4 items
//   "calories":1988
//   "protein":55.64
//   "fat":121.19
//   "carbohydrates":177.96
// }}

