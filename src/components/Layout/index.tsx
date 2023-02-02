import Header from "./Header";
import MainWrapper from "./MainWrapper";
import Sidebar from "./Sidebar";
import TaskCard from "../TaskCard";

import { Box } from "@mui/material";
import TasksColumn from "../TasksColumn";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Header />
      <Sidebar />
      <MainWrapper>
        <TasksColumn />
      </MainWrapper>
    </Box>
  );
}
