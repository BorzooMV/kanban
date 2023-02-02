import { createTheme } from "@mui/material";
import { COLORS } from "../const";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    fadedPrimary?: {
      main?: string;
    };
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
    fadedPrimary: {
      main: COLORS.PRIMARY_FADED,
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
