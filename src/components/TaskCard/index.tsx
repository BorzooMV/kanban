import { Card, Typography, useTheme } from "@mui/material";

export default function TaskCard({ title, subtasks }) {
  const theme = useTheme();
  return (
    <Card square sx={{ p: 2 }}>
      <Typography sx={{ mb: 1 }}>{title}</Typography>
      <Typography fontSize="small" sx={{ color: theme.palette.primary.faded }}>
        {subtasks.length > 0 && `0 of ${subtasks.length} subtask`}
      </Typography>
    </Card>
  );
}
