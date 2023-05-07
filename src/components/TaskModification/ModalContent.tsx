import { useState } from "react";
import uuid from "react-uuid";
import { useSelector } from "react-redux";

import { AddCircle, SystemUpdateAlt } from "@mui/icons-material";
import {
  Id,
  ReduxStoreType,
  SubTaskCheckboxProps,
  TaskModificationModalContentProps,
  TaskType,
} from "../../ts/types";
import {
  Box,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";

function SubTaskCheckbox({ task, onChange }: SubTaskCheckboxProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Checkbox size="small" checked={task.done} onChange={onChange} />
      <Typography>{task.defenition}</Typography>
    </Stack>
  );
}

export default function ModalContent({
  draftTask,
  setDraftTask,
  setDraftColumnId,
}: TaskModificationModalContentProps) {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const hasSubtask =
    Boolean(draftTask.subtasks) && draftTask.subtasks.length > 0;

  const boards = useSelector((store: ReduxStoreType) => store.root.boards);
  const columns =
    boards?.find((board) => board.id === draftTask.boardId)?.columns || [];

  const onlyOneColumn = columns.length === 1;

  const currentColumn = columns.find(
    (column) => column.id === draftTask.columnId
  );
  const currentColumnName = currentColumn?.name || "Unknown";

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

  function toggleDoneTask(taskId: Id) {
    setDraftTask((prevDraftTask: TaskType) => {
      if (prevDraftTask.subtasks) {
        const draftSubtasks = prevDraftTask.subtasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              done: !task.done,
            };
          } else {
            return task;
          }
        });

        return {
          ...prevDraftTask,
          subtasks: draftSubtasks,
        };
      } else {
        return prevDraftTask;
      }
    });
  }

  function changeColumnId({ target }: { target: any }) {
    setDraftColumnId(target.value);
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
                  <SubTaskCheckbox
                    key={task.id}
                    task={task}
                    onChange={() => toggleDoneTask(task.id)}
                  />
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
        <Stack direction="column" alignItems="start">
          <Typography sx={{ mb: 1 }}>Move the task to a new column</Typography>
          <Stack direction="column" alignItems="center" spacing={1}>
            <TextField
              className="task-modification__move-task__inputs"
              size="small"
              value={currentColumnName}
              variant="outlined"
              disabled
            />
            <SystemUpdateAlt />
            <Select
              className="task-modification__move-task__inputs"
              onChange={changeColumnId}
              disabled={onlyOneColumn}
              defaultValue=" "
            >
              <MenuItem value=" ">
                <Typography variant="body1" fontStyle="italic">
                  {onlyOneColumn ? "Add another column" : "Select a column"}
                </Typography>
              </MenuItem>
              {columns.map((column) => {
                if (column.name === currentColumnName) {
                  return null;
                }
                return (
                  <MenuItem key={column.id} value={column.id}>
                    {column.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
