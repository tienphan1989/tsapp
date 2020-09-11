/* eslint-disable jsx-a11y/anchor-is-valid */
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

export const ApiRecipe = (props) => {
  ApiRecipe.defaultProps = {
    image: 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg'
  }

  const [values, setValues] = useState({
    foodQuery: "",
    diet: "",
    excluded_ingredients: "",
  });

  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    results: [
      {
        title: null,
        servings: null,
        image: null,
        readyInMinutes: null,
        sourceUrl: null,
      },
    ],
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
      "http://localhost:3000/api/v1/apineeds",
      configObj("POST", true, {
        query: values.query,
        diet_query: values.diet,
        excluded_ingredients: values.excluded_ingredients,
      })
    )
      .then((response) => response.json())
      .then((resp) => {
        setDialogContent(resp);
        handleClickOpen();
      })
      .catch((error) => console.log(error));
  };

  //image, title, prep time, servings, url. POST to users backend.  User has many recipes, recipe belongs user
  const showRecipe = () => {
    return dialogContent.results.map((recipe) => (
      <React.Fragment>
        <div
          class="card everything"
          style={{
            background:
              "https://spoonacular.com/recipeImages/" +
              recipe.id +
              "-480x360.jpg",
          }}
        >
          <h3 class="food">{recipe.title}</h3>
          <img
            src={
              "https://spoonacular.com/recipeImages/" +
              recipe.id +
              "-480x360.jpg"
            }
            alt=""
          />
          Total preparation time: {recipe.readyInMinutes} minutes
          <br />
          <i class="fa fa-users">Serves {recipe.servings}</i><br/>
              <Button href={recipe.sourceUrl}  color='primary' size='small' variant='contained'>Click here for details!</Button><br/>
              <Button color='primary' variant='contained' size='small' onClick={saveRecipe}>Save recipe</Button>
            <div class="card-shadow"></div>
        </div>
      </React.Fragment>
    ));
  };

  const saveRecipe = () => {
    
  }

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
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom></Typography>
          {/* <Typography gutterBottom>{dialogContent}</Typography>
          <Typography gutterBottom>{dialogContent}</Typography> */}
          {showRecipe()}
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
