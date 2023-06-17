import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: 'black',
      fontWeight: 'bold',
    },
  },
  categorie: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: 'black',
      fontWeight: 'lighter',
      borderRadius: '8px',
      padding: '10px',
      border: '1px solid black',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'black', // Update the text color to black
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  goButton: {
    marginLeft: theme.spacing(1),
    backgroundColor: 'purple',
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
