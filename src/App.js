import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme=>({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
      color: '#FFFFFF'
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function App() {
  
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <b>Project List</b>
      </header>
      <div className="App-box">
        dasds
      </div>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleOpen}>
        <AddIcon/>
      </Fab>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="project-name"
                label="New project"
                helperText="Insert new project"/>
            </div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
