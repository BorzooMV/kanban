import React, { useState } from "react";

import ModalActions from "./ModalActions";
import ModalContent from "./ModalContent";

import { TaskModificationProps } from "../../ts/types";
import { Box, Typography } from "@mui/material";

import "./style.scss";

export default function TaskModification({ task }: TaskModificationProps) {
  const [draftTask, setDraftTask] = useState(task);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {draftTask.defenition}
      </Typography>
      <Box sx={{ flex: 1, overflowY: "auto", px: 2 }}>
        <ModalContent draftTask={draftTask} setDraftTask={setDraftTask} />
      </Box>
      <ModalActions />
    </Box>
  );
}
