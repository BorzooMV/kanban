import Header from "./Header";
import MainWrapper from "./MainWrapper";
import Sidebar from "./Sidebar";

import mockedData from "../../data/mockedColumns.json";

import Columns from "../Columns";
import { Box } from "@mui/material";

const columnsData = mockedData;

console.log(columnsData);

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Header />
      <Sidebar />
      <MainWrapper>
        <Columns columns={columnsData} />
      </MainWrapper>
    </Box>
  );
}
