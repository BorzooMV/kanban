import { useState } from "react";

import { SIDEBAR_WIDTH } from "../../utils/const";
import useCurrentBoard from "../../hooks/useCurrentBoard";

import CreateTask from "../Forms/CreateTask";

import { Box, Button, Typography, Toolbar, Modal } from "@mui/material";

import "./style.scss";

export default function Header() {
  const [currentBoard] = useCurrentBoard();
  const [isModalOpen, setModalOpen] = useState(false);
  const isAbleToCreateTask = currentBoard && currentBoard.columns.length > 0;

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Box
      className="layout__header"
      sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH})`,
        ml: `${SIDEBAR_WIDTH}`,
      }}
    >
      <Modal open={isModalOpen} onClose={closeModal}>
        <>
          <CreateTask
            closeModal={closeModal}
            columns={currentBoard?.columns || []}
          />
        </>
      </Modal>
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
            onClick={openModal}
            disabled={!isAbleToCreateTask}
          >
            Add New Task
          </Button>
        </div>
      </Toolbar>
    </Box>
  );
}
