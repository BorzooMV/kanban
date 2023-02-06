import { Stack } from "@mui/material";
import TasksColumn from "../TasksColumn";

export default function Columns({ columns }) {
  return (
    <Stack direction="row" spacing={2}>
      {columns.map((col, index) => {
        return <TasksColumn key={index} columnData={col} />;
      })}
    </Stack>
  );
}
