import '@fontsource/roboto-slab';
import '@fontsource/oswald';
import { createTheme } from "@mui/material/styles";
import { yellow, grey } from "./colors/ruggedColors";

const ruggedTheme = createTheme({
  palette: {
    primary: {
      main: yellow[500], // Default primary shade from ruggedColors.js
    },
    secondary: {
      main: grey[700],
    },
    background: {
      default: grey[100], // Light background for a rugged feel
      paper: grey[50], // Paper elements with softer grey
    },
    text: {
      primary: grey[900], // Dark text for contrast
      secondary: grey[700], // Slightly lighter text for secondary elements
    },
  },
  typography: {
    fontFamily: "'Oswald', 'Roboto Slab', sans-serif", // Oswald as primary
    h1: { fontFamily: "'Oswald', sans-serif" },
    h2: { fontFamily: "'Oswald', sans-serif" },
    h3: { fontFamily: "'Oswald', sans-serif" },
    button: { fontFamily: "'Oswald', sans-serif" }, // Buttons use Oswald
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px", // Slightly rounded edges for ruggedness
          textTransform: "none", // More natural text appearance
          fontFamily: "'Oswald', sans-serif", // Apply Oswald to buttons
        },
      },
    },
  },
});

export default ruggedTheme;