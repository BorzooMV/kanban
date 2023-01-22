import { createTheme } from "@mui/material";
import { COLORS } from "../const";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    darkBackground?: {
      main?: string;
      light?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.PRIMARY,
    },
    darkBackground: {
      main: COLORS.DARK_BACKGROUND,
      light: COLORS.DARK_BACKGROUND_LIGHTEN,
    },
  },
  typography: {
    fontSize: 16,
  },
});

export default theme;
