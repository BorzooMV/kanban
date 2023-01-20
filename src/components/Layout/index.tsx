import { Box } from "@mui/material";
import React from "react";

import Header from "./Header";
import MainWrapper from "./MainWrapper";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Header />
      <Sidebar />
      <MainWrapper>
        <h1>Main</h1>
      </MainWrapper>
    </Box>
  );
}
