import Header from "./Header";
import MainWrapper from "./MainWrapper";
import Sidebar from "./Sidebar";

import { Box } from "@mui/material";
import TasksColumn from "../TasksColumn";
import Columns from "../Columns";

const sampleColumns = [
  {
    id: "01",
    name: "First Column",
    tasks: [
      {
        id: "01",
        defenition: "Buy milk",
        subtasks: [
          {
            id: "01",
            defenition: "Find milk",
          },
          {
            id: "02",
            defenition: "Buy good milk",
          },
        ],
      },

      {
        id: "02",
        defenition: "Buy soda",
        subtasks: [],
      },
    ],
  },
  {
    id: "02",
    name: "Second Column",
    tasks: [
      {
        id: "01",
        defenition: "Sell milk",
        subtasks: [
          {
            id: "01",
            defenition: "Find customer",
          },
        ],
      },
    ],
  },
];

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Header />
      <Sidebar />
      <MainWrapper>
        <Columns columns={sampleColumns} />
      </MainWrapper>
    </Box>
  );
}
