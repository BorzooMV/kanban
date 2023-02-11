import uuid from "react-uuid";

import TasksColumn from "../TasksColumn";

import { ColumnsProps } from "../../ts/types";
import { Stack } from "@mui/material";

export default function Columns({ columns }: ColumnsProps) {
  return (
    <Stack direction="row" spacing={2}>
      {columns.map((col, index) => {
        return <TasksColumn key={uuid()} columnData={col} />;
      })}
    </Stack>
  );
}
