import { createTheme, PaletteColorOptions } from "@mui/material";
import { COLORS } from "../const";

declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions {
    faded?: string;
  }

  interface PaletteOptions {
    darkBackground?: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.PRIMARY,
      faded: COLORS.PRIMARY_FADED,
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
