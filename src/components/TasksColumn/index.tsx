import { List } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { TASKS_COLUMNS_WIDTH } from "../../utils/const";
import TaskCard from "../TaskCard";

export default function TasksColumn({ columnData }) {
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
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              title={task.defenition}
              subtasks={task.subtasks}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
