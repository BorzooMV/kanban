import { ThemeProvider } from "@mui/material";

import theme from "./utils/theme/theme";
import Root from "./pages/Root";

import "./utils/theme/global.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
