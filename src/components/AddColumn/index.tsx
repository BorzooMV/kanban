import { useState } from "react";

import useCurrentBoard from "../../hooks/useCurrentBoard";
import { TASKS_COLUMNS_WIDTH } from "../../utils/const";

import CreateColumnForm from "../Forms/CreateColumn";

import { Add } from "@mui/icons-material";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";

export default function AddColumn() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentBoard] = useCurrentBoard();

  const isDisabled = currentBoard?.id ? false : true;

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <>
      <Modal open={isModalOpen} onClose={closeModal}>
        <>
          <CreateColumnForm closeModal={closeModal} />
        </>
      </Modal>
      <Box sx={{ minWidth: TASKS_COLUMNS_WIDTH, minHeight: "300px" }}>
        <Button
          variant="outlined"
          disabled={isDisabled}
          sx={{ width: "100%", height: "100%" }}
          onClick={openModal}
        >
          <Stack direction="column" alignItems="center" spacing={2}>
            <Typography fontSize="large">Add New Column</Typography>
            <Add fontSize="large" />
          </Stack>
        </Button>
      </Box>
    </>
  );
}
