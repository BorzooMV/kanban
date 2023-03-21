import React, { useState } from "react";
import uuid from "react-uuid";

import { AddCircle } from "@mui/icons-material";
import {
  SubTaskCheckboxProps,
  TaskModificationModalContentProps,
} from "../../ts/types";
import {
  Box,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

function SubTaskCheckbox({ task }: SubTaskCheckboxProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Checkbox size="small" checked={task.done} />
      <Typography>{task.defenition}</Typography>
    </Stack>
  );
}

export default function ModalContent({
  draftTask,
  setDraftTask,
}: TaskModificationModalContentProps) {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const hasSubtask = Boolean(draftTask.subtasks);

  function handleCreateTask() {
    setIsCreatingTask(true);
  }

  function handleBlurCreateTask() {
    setIsCreatingTask(false);
  }

  function addNewSubTask({ code, target }: { code: any; target: any }) {
    if (code === "Enter" || code === "NumpadEnter") {
      setDraftTask((prevDraftTask) => {
        const newTask = {
          id: uuid(),
          defenition: target.value,
          done: false,
        };
        return {
          ...prevDraftTask,
          subtasks: prevDraftTask.subtasks
            ? [...prevDraftTask.subtasks, newTask]
            : [newTask],
        };
      });

      target.value = "";
    }
  }

  function modifyComment({ target }: { target: any }) {
    setDraftTask((prevDraftTask) => {
      return {
        ...prevDraftTask,
        comment: target.value,
      };
    });
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography
          variant="h6"
          sx={{
            mb: 1,
          }}
        >
          Comment
        </Typography>
        <textarea
          className="task-modification__textarea"
          rows={4}
          placeholder="write something about this task"
          onChange={modifyComment}
          value={draftTask.comment}
        />
        <Stack>
          {hasSubtask && (
            <Stack direction="column">
              <Typography variant="h6">Subtasks</Typography>
              <Box
                sx={{
                  mt: 1,
                  mb: 3,
                }}
                className="task-modification__subtask__tasks"
              >
                {draftTask.subtasks?.map((task) => (
                  <SubTaskCheckbox key={task.id} task={task} />
                ))}
              </Box>
            </Stack>
          )}
          <Stack
            className="task-modification__subtask__add-text"
            direction="row"
            sx={{
              mb: 1,
            }}
            spacing={1}
            onClick={handleCreateTask}
          >
            <Typography>Add subtask for this task</Typography>
            <AddCircle />
          </Stack>
          {isCreatingTask && (
            <TextField
              autoFocus
              className="task-modification__subtask__create-task"
              size="small"
              placeholder="Enter task defenition"
              variant="outlined"
              onBlur={handleBlurCreateTask}
              onKeyPress={addNewSubTask}
            />
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Typography>Move the task to the a new column</Typography>
      </Grid>
    </Grid>
  );
}
