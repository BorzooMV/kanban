import React from "react";
import Drawer from "@mui/material/Drawer";

import "./style.scss";
import { SIDEBAR_WIDTH } from "../../utils/const";

export default function Sidebar() {
  return (
    <Drawer
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
      Bortzoo
    </Drawer>
  );
}
