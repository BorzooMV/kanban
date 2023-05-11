import { ThemeProvider, Typography } from "@mui/material";
import { Provider } from "react-redux";

import theme from "./utils/theme/theme";
import Root from "./pages/Root";
import store from "./modules/redux/store";

import "./utils/theme/global.scss";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root />
        <div className="screen-size-error">
          <Typography color="white">
            Unfortunately this application doesn't support smaller screens,
            please make your screen size wider or use another device to proceed.{" "}
          </Typography>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
