import React from "react";
import { useState } from "react";
import configObj from "../../helpers/configObj.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";

export const ApiRecipe = () => {
  const [values, setValues] = useState({
    foodQuery: "",
    diet: "",
    excluded_ingredients: "",
  });

  const [open, setOpen] = useState(false);
  const [dialogContent, createDialogContent] = useState({});

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
      "http://localhost:3000/api/v1/apineeds",
      configObj("POST", true, {
        query: values.query,
        diet_query: values.diet,
        excluded_ingredients: values.excluded_ingredients,
      })
    )
      .then((response) => response.json())
      .then((resp) => {
        createDialogContent(resp);
        handleClickOpen();
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div className="api-response-container">
        <div className="api-response-form">
          <form onSubmit={handleSubmit}>
            <FormControl
              size="small"
              hiddenLabel="true"
              margin="dense"
              focused="true"
            >
              <label htmlFor="foodQuery">Food: </label>
              <TextField
                aria-describedby="foodQuery"
                aria-label="food item"
                variant="outlined"
                className=""
                type="text"
                placeholder="..."
                name="foodQuery"
                id="foodQuery"
                value={values.foodQuery}
                onChange={handleInputChange}
              />
              <FormHelperText id="foodQuery">
                e.g. burger, pasta, rice, cake, steak
              </FormHelperText>
            </FormControl>
            <br />
            <FormControl
              size="small"
              hiddenLabel="true"
              margin="dense"
              focused="true"
            >
              <label htmlFor="diet">Dietary restrictions: </label>
              <TextField
                aria-describedby="diet"
                aria-label="diet"
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
                e.g. vegan, paleo, , vegetarian, low-carb, low salt
              </FormHelperText>
            </FormControl>
            <FormControl
              size="small"
              hiddenLabel="true"
              margin="dense"
              focused="true"
            >
              <label htmlFor="excluded_ingredients">
                Exclude ingredients:{" "}
              </label>
              <TextField
                aria-describedby="excluded_ingredients"
                aria-label="exclude"
                variant="outlined"
                className=""
                type="text"
                placeholder="..."
                name="excluded_ingredients"
                id="excluded_ingredients"
                value={values.excluded_ingredients}
                onChange={handleInputChange}
              />
              <FormHelperText id="excluded_ingredients">
                e.g. allergens such as eggs, dietary restrictions such as no
                meat
              </FormHelperText>
            </FormControl>
            <br />
            <Button variant="contained" color="secondary" type="submit">
              submit
            </Button>
          </form>
        </div>
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
};

// {dialogContent.image}
// {dialogContent.readyInMinutes}
// {dialogContent.servings}
// {dialogContent.title}
// {dialogContent.sourceUrl}

// {results: Array(25), baseUri: "https://spoonacular.com/recipeImages/", offset: 0, number: 25, totalResults: 96701, …}
// baseUri: "https://spoonacular.com/recipeImages/"
// expires: 1599857715367
// number: 25
// offset: 0
// processingTimeMs: 515
// results: Array(25)
// 0:
// id: 723984
// image: "cabbage-salad-with-peanuts-723984.jpg"
// openLicense: 0
// readyInMinutes: 15
// servings: 2
// sourceUrl: "http://naturallyella.com/cabbage-salad-with-peanuts/"
// title: "Cabbage Salad with Peanuts"
// __proto__: Object
// 1:
// id: 584549
// image: "Stuffed-Sweet-Potato-with-Spinach--Hummus---Feta-584549.jpg"
// openLicense: 0
// readyInMinutes: 16
// servings: 1
// sourceUrl: "http://www.cookincanuck.com/2013/09/stuffed-sweet-potato-recipe-with-spinach-hummus-feta/"
// title: "Stuffed Sweet Potato with Spinach, Hummus & Feta"
// "results":[10 items
//   0:{5 items
//   "id":262682
//   "title":"Thai Sweet Potato Veggie Burgers with Spicy Peanut Sauce"
//   "readyInMinutes":75
//   "image":"thai-sweet-potato-veggie-burgers-with-spicy-peanut-sauce-262682.jpg"
//   "imageUrls":[1 item
//   0:"thai-sweet-potato-veggie-burgers-with-spicy-peanut-sauce-262682.jpg"
//   ]
//   }
//   1:{5 items
//   "id":227961
//   "title":"Cajun Spiced Black Bean and Sweet Potato Burgers"
//   "readyInMinutes":20
//   "image":"Cajun-Spiced-Black-Bean-and-Sweet-Potato-Burgers-227961.jpg"
//   "imageUrls":[...]1 item
//   }
