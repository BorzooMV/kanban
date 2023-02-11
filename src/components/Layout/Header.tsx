import { SIDEBAR_WIDTH } from "../../utils/const";
import { Box, Button, Typography, Toolbar } from "@mui/material";

import "./style.scss";
import useCurrentBoard from "../../hooks/useCurrentBoard";

export default function Header() {
  const [currentBoard] = useCurrentBoard();
  const hasCurrentBoardValue = Boolean(currentBoard);
  function handleTestButton() {}

  return (
    <Box
      className="layout__header"
      sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH})`,
        ml: `${SIDEBAR_WIDTH}`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography color="text.primary">
          {currentBoard ? currentBoard.name : ""}
        </Typography>
        <div className="header__actions">
          <Button
            color="primary"
            variant="contained"
            onClick={handleTestButton}
            disabled={!hasCurrentBoardValue}
          >
            Add New Task
          </Button>
        </div>
      </Toolbar>
    </Box>
  );
}
