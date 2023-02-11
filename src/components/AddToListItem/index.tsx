import { useState } from "react";

import CreateBoardForm from "../Forms/CreateBoard";

import { DashboardOutlined } from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  useTheme,
} from "@mui/material";

export function AddToListItem() {
  const [isModalOpen, setModalOpen] = useState(false);
  const theme = useTheme();

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <div>
      <Modal open={isModalOpen} onClose={closeModal}>
        <>
          <CreateBoardForm closeModal={closeModal} />
        </>
      </Modal>
      <ListItem onClick={openModal}>
        <ListItemIcon>
          <DashboardOutlined sx={{ color: theme.palette.primary.main }} />
        </ListItemIcon>
        <ListItemText
          primary="Add New Board"
          sx={{
            color: theme.palette.primary.main,
            cursor: "pointer",
          }}
        />
      </ListItem>
    </div>
  );
}
