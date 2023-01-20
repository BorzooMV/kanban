import { Box, Button } from "@mui/material";
import { SIDEBAR_WIDTH } from "../../utils/const";

import "./style.scss";

export default function Header() {
  return (
    <Box
      className="header"
      sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        ml: `${SIDEBAR_WIDTH}px`,
      }}
    >
      <h1>Platform Lunch</h1>
      <div className="header__actions">
        <Button color="primary" variant="contained">
          Add New Task
        </Button>
      </div>
    </Box>
  );
}
