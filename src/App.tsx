import { ThemeProvider } from "@mui/material";
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
      </ThemeProvider>
    </Provider>
  );
}

export default App;
