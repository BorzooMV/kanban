import React from "react";

import { SIDEBAR_WIDTH } from "../../utils/const";

import BoardsList from "../BoardsList";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import "./style.scss";

export default function Sidebar() {
  return (
    <Drawer
      className="layout__sidebar"
      variant="permanent"
      anchor="left"
      sx={{
        width: `${SIDEBAR_WIDTH}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${SIDEBAR_WIDTH}px`,
          bgcolor: "darkBackground.light",
        },
      }}
    >
      <Toolbar>
        <Typography>Kanban</Typography>
      </Toolbar>
      <Divider sx={{ opacity: 0 }} />
      <BoardsList />
    </Drawer>
  );
}
