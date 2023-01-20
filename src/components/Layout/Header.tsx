import { Box, Button, Typography, Toolbar } from "@mui/material";
import { SIDEBAR_WIDTH } from "../../utils/const";

import "./style.scss";

export default function Header() {
  return (
    <Box
      className="layout__header"
      sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        ml: `${SIDEBAR_WIDTH}px`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography color="text.primary">Platform Lunch</Typography>
        <div className="header__actions">
          <Button color="primary" variant="contained">
            Add New Task
          </Button>
        </div>
      </Toolbar>
    </Box>
  );
}
