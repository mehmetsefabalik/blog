import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: ["IBM Plex Sans", "Roboto", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#DE6A0A",
    },
    secondary: {
      main: "#0BDE7D",
    },
    background: {
      default: "#fff",
    },
  },
});

export { theme };
