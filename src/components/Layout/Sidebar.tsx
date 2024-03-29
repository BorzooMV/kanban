import React from "react";
import { useSelector } from "react-redux";

import { SIDEBAR_WIDTH } from "../../utils/const";

import BoardsList from "../BoardsList";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { ReduxStoreType } from "../../ts/types";

import "./style.scss";

export default function Sidebar() {
  const boards = useSelector((store: ReduxStoreType) => store.root.boards);

  return (
    <Drawer
      className="layout__sidebar"
      variant="permanent"
      anchor="left"
      sx={{
        width: `${SIDEBAR_WIDTH}`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${SIDEBAR_WIDTH}`,
          bgcolor: "darkBackground.light",
          p: 0,
        },
      }}
    >
      <Toolbar className="logo-toolbar">
        <Typography variant="h5" fontWeight="bold">
          Kanban
        </Typography>
      </Toolbar>
      <Divider sx={{ opacity: 0 }} />
      <BoardsList boards={boards} />
    </Drawer>
  );
}
