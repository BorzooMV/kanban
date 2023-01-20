import { createTheme } from "@mui/material";
import { COLORS } from "../const";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    darkBackground: {
      main: COLORS.DARK_BACKGROUND,
      light: COLORS.DARK_BACKGROUND_LIGHTEN,
    },
  },
});

export default theme;
