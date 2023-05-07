import { LargeModalProps } from "../../ts/types";

import { Box, Divider, IconButton, Modal } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import "./style.scss";

export default function LargeModal({
  open,
  onClose,
  children,
}: LargeModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="large-modal">
        <IconButton
          color="error"
          className="large-modal__close-button"
          onClick={onClose}
        >
          <CloseRounded />
        </IconButton>
        <Divider sx={{ my: 1 }} />
        {children}
      </Box>
    </Modal>
  );
}
