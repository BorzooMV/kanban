import { TASKS_COLUMNS_WIDTH } from "../../utils/const";

import TaskCard from "../TaskCard";

import { List } from "@mui/icons-material";
import { TasksColumnProps, TaskType } from "../../ts/types";
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function TasksColumn({ columnData }: TasksColumnProps) {
  const { name, tasks } = columnData;
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: TASKS_COLUMNS_WIDTH,
        overflow: "hidden",
      }}
    >
      <Stack direction="row">
        <List fontSize="medium" sx={{ color: "#fff", mr: 2 }} />
        <Typography color="#fff">{name}</Typography>
      </Stack>
      <Divider sx={{ my: 2, opacity: 0 }} />
      <Stack direction="column" spacing={2}>
        {tasks.map((task: TaskType) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </Stack>
    </Box>
  );
}
