import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash/isEqual";

import { changeTaskColumn, updateTask } from "../../modules/redux/actions";

import ModalActions from "./ModalActions";
import ModalContent from "./ModalContent";

import { ReduxStoreType, TaskModificationProps } from "../../ts/types";
import { Box, Typography } from "@mui/material";

import "./style.scss";

export default function TaskModification({ task }: TaskModificationProps) {
  const [draftTask, setDraftTask] = useState(task);
  const [draftColumnId, setDraftColumnId] = useState(task.columnId);
  const dispatch = useDispatch();
  const stateHasChanged = !isEqual(draftTask, task);
  const columnHasChanged =
    draftColumnId !== " " && !(draftColumnId === task.columnId);
  const currentBoard = useSelector(
    (store: ReduxStoreType) => store.root.currentBoard
  );

  function handleUpdateTask() {
    dispatch(updateTask(draftTask));
    if (columnHasChanged && currentBoard) {
      dispatch(
        changeTaskColumn(currentBoard, task.columnId, draftColumnId, task.id)
      );
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {draftTask.defenition}
      </Typography>
      <Box sx={{ flex: 1, overflowY: "auto", px: 2 }}>
        <ModalContent
          draftTask={draftTask}
          setDraftTask={setDraftTask}
          setDraftColumnId={setDraftColumnId}
        />
      </Box>
      <ModalActions
        handleUpdateTask={handleUpdateTask}
        disabled={!stateHasChanged && !columnHasChanged}
      />
    </Box>
  );
}
