import { Stack } from "@mui/material";
import TasksColumn from "../TasksColumn";

import { ColumnsProps } from "../../ts/types";

export default function Columns({ columns }: ColumnsProps) {
  return (
    <Stack direction="row" spacing={2}>
      {columns.map((col, index) => {
        return <TasksColumn key={index} columnData={col} />;
      })}
    </Stack>
  );
}
