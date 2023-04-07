import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTask } from "../../modules/redux/actions";

import ModalActions from "./ModalActions";
import ModalContent from "./ModalContent";

import { TaskModificationProps } from "../../ts/types";
import { Box, Typography } from "@mui/material";

import "./style.scss";

export default function TaskModification({ task }: TaskModificationProps) {
  const [draftTask, setDraftTask] = useState(task);
  const dispatch = useDispatch();

  // TODO: add a const that evaluate if the draft state is different from our global state, we have to add loadash the project to compair these two objects

  function handleUpdateTask() {
    dispatch(updateTask(draftTask));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {draftTask.defenition}
      </Typography>
      <Box sx={{ flex: 1, overflowY: "auto", px: 2 }}>
        <ModalContent draftTask={draftTask} setDraftTask={setDraftTask} />
      </Box>
      <ModalActions handleUpdateTask={handleUpdateTask} />
    </Box>
  );
}
