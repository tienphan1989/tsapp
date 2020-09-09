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
  const [dialogContent, createDialogContent] = useState({});
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

  const onDialogClose = () => {
    setDialogOpen(false);
    //setFirst('');
    //setLast('');
    //setEmail('');
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
        createDialogContent(resp);
        handleClickOpen();
      })
      .catch((error) => console.log(error));
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
// {dialogContent.calories}
// {dialogContent.dietLabels}
// {dialogContent.totalNutrients}
// {dialogContent.totalDaily}

// {uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_4931fbb01209461fb6dd2566f835591f", calories: 115, totalWeight: 223, dietLabels: Array(2), healthLabels: Array(31), …}
// calories: 115
// cautions: Array(1)
// 0: "SULFITES"
// length: 1
// __proto__: Array(0)
// dietLabels: Array(2)
// 0: "LOW_FAT"
// 1: "LOW_SODIUM"
// length: 2
// __proto__: Array(0)
// healthLabels: (31) ["FAT_FREE", "LOW_FAT_ABS", "LOW_POTASSIUM", "KIDNEY_FRIENDLY", "VEGAN", "VEGETARIAN", "PESCATARIAN", "PALEO", "SPECIFIC_CARBS", "DAIRY_FREE", "GLUTEN_FREE", "WHEAT_FREE", "EGG_FREE", "MILK_FREE", "PEANUT_FREE", "TREE_NUT_FREE", "SOY_FREE", "FISH_FREE", "SHELLFISH_FREE", "PORK_FREE", "RED_MEAT_FREE", "CRUSTACEAN_FREE", "CELERY_FREE", "MUSTARD_FREE", "SESAME_FREE", "LUPINE_FREE", "MOLLUSK_FREE", "ALCOHOL_FREE", "NO_OIL_ADDED", "NO_SUGAR_ADDED", "KOSHER"]
// totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
// totalNutrients:
// CA: {label: "Calcium", quantity: 13.379999999999999, unit: "mg"}
// CHOCDF: {label: "Carbs", quantity: 30.796300000000002, unit: "g"}
// CHOLE: {label: "Cholesterol", quantity: 0, unit: "mg"}
// ENERC_KCAL: {label: "Energy", quantity: 115.96, unit: "kcal"}
// FAMS: {label: "Monounsaturated", quantity: 0.01561, unit: "g"}
// FAPU: {label: "Polyunsaturated", quantity: 0.11373, unit: "g"}
// FASAT: {label: "Saturated", quantity: 0.06244, unit: "g"}
// FAT:
// label: "Fat"
// quantity: 0.37910000000000005
// unit: "g"
// __proto__: Object
// FE: {label: "Iron", quantity: 0.2676, unit: "mg"}
// FIBTG: {label: "Fiber", quantity: 5.351999999999999, unit: "g"}
// FOLAC: {label: "Folic acid", quantity: 0, unit: "µg"}
// FOLDFE: {label: "Folate equivalent (total)", quantity: 6.6899999999999995, unit: "µg"}
// FOLFD: {label: "Folate (food)", quantity: 6.6899999999999995, unit: "µg"}
// K: {label: "Potassium", quantity: 238.60999999999999, unit: "mg"}
// MG: {label: "Magnesium", quantity: 11.15, unit: "mg"}
// NA: {label: "Sodium", quantity: 2.23, unit: "mg"}
// NIA: {label: "Niacin (B3)", quantity: 0.20293, unit: "mg"}
// P: {label: "Phosphorus", quantity: 24.53, unit: "mg"}
// PROCNT: {label: "Protein", quantity: 0.5798, unit: "g"}
// RIBF: {label: "Riboflavin (B2)", quantity: 0.05798, unit: "mg"}
// SUGAR: {label: "Sugars", quantity: 23.169700000000002, unit: "g"}
// THIA: {label: "Thiamin (B1)", quantity: 0.03791, unit: "mg"}
// TOCPHA: {label: "Vitamin E", quantity: 0.4014, unit: "mg"}
// VITA_RAE: {label: "Vitamin A", quantity: 6.6899999999999995, unit: "µg"}
// VITB6A: {label: "Vitamin B6", quantity: 0.09143, unit: "mg"}
// VITB12: {label: "Vitamin B12", quantity: 0, unit: "µg"}
// VITC: {label: "Vitamin C", quantity: 10.258, unit: "mg"}
// VITD: {label: "Vitamin D", quantity: 0, unit: "µg"}
// VITK1: {label: "Vitamin K", quantity: 4.906000000000001, unit: "µg"}
// WATER: {label: "Water", quantity: 190.7988, unit: "g"}
// ZN: {label: "Zinc", quantity: 0.0892, unit: "mg"}
