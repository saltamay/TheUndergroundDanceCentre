import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        color: '#FFF',
      },
    },
    MuiInput: {
      root: {
        color: '#FFF',
        paddingTop: 14,
      },
      underline: {
        '&:before': {
          borderBottom: '1px solid white',
        },
        '&:hover:not($disabled):not($focued):not($error):before': {
          borderBottom: '2px solid white',
        },
      },
    },
  },
});
