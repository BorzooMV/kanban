import useCurrentBoard from "../../hooks/useCurrentBoard";

import Header from "./Header";
import MainWrapper from "./MainWrapper";
import Sidebar from "./Sidebar";
import Columns from "../Columns";
import AddColumn from "../AddColumn";

import { Box, Stack } from "@mui/material";

export default function Layout() {
  const [currentBoard] = useCurrentBoard();
  const columnsData = currentBoard ? currentBoard.columns : [];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Header />
      <Sidebar />
      <MainWrapper>
        <Stack direction="row" spacing={2}>
          <Columns columns={columnsData} />
          <AddColumn />
        </Stack>
      </MainWrapper>
    </Box>
  );
}
