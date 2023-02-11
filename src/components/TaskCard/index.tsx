import { Card, Typography, useTheme } from "@mui/material";
import { TaskCardProps } from "../../ts/types";

export default function TaskCard({ task }: TaskCardProps) {
  const { defenition, subtasks } = task;
  const theme = useTheme();
  return (
    <Card square sx={{ p: 2 }}>
      <Typography sx={{ mb: 1 }}>{defenition}</Typography>
      <Typography fontSize="small" sx={{ color: theme.palette.primary.faded }}>
        {subtasks && subtasks.length > 0 && `0 of ${subtasks.length} subtask`}
      </Typography>
    </Card>
  );
}
