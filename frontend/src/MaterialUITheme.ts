import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { BACKGROUND_COLOR } from "constant/Colors";

export const themeOptions = createTheme({
  typography: {
    h1: {
      fontSize: "7rem",
      fontWeight: 4000,
      letterSpacing: "0.07em",
      background: "-webkit-linear-gradient(90deg, #FE6B8B 50%, #FF8E53 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h2: {
      fontSize: "4rem",
      color: "white",
      fontFamily: "Rubik Mono One",
    },
    body1: {
      fontFamily: "Roboto Condensed",
      fontSize: "1.2rem",
    },
    overline: {
      fontSize: "1.2rem",
    },
    h3: {
      fontSize: "10rem",
      fontWeight: 3000,
      color: "#91ff35",
    },
    h4: {
      fontSize: "10rem",
      fontWeight: 3000,
      color: "#e91e63",
    },
    h5: {
      fontSize: "5rem",
      fontWeight: 2000,
    },
  },
  palette: {
    background: {
      default: BACKGROUND_COLOR,
      paper: "#040303",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a09e9e",
      disabled: "#7f7f7f",
    },
    primary: {
      main: "#3fb54c",
    },
    secondary: purple,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "large" },
          style: {
            width: "100%",
            backgroundColor: "#ed00d7",
            ":hover": {
              backgroundColor: "#9cffe3",
              color: "#ed00d7",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            color: "white",
            backgroundColor: "#ed00d7",
            fontSize: "20px",
            padding: "10px",
            margin: "2px",
            ":hover": {
              backgroundColor: "#9cffe3",
              color: "#ed00d7",
            },
          },
        },
      ],
    },
    MuiPaper: {
      defaultProps: {
        style: {
          background: "linear-gradient(0deg, #580381 20%, #757181 100%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0px 10px 10px #fc00d1",
          padding: "20px 20px",
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        style: {
          padding: "20px",
        },
      },
    },
    MuiStack: {
      defaultProps: {
        style: {
          alignContent: "center",
        },
      },
    },
    MuiContainer: {
      variants: [
        {
          props: { color: "home" },
          style: {
            height: window.innerHeight.toString() + "px",
            display: "flex",
          },
        },
      ],
    },
  },
});
