import { Card, Typography, useTheme } from "@mui/material";

export default function TaskCard() {
  const theme = useTheme();
  return (
    <Card square sx={{ p: 2 }}>
      <Typography sx={{ mb: 1 }}>Task title</Typography>
      <Typography
        fontSize="small"
        sx={{ color: theme.palette.fadedPrimary.main }}
      >
        0 of 2 subtask
      </Typography>
    </Card>
  );
}
