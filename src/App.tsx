import { ThemeProvider } from "@mui/material";
import "./App.scss";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Kanban</h1>
    </ThemeProvider>
  );
}

export default App;
