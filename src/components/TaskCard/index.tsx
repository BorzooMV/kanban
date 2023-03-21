import { useState } from "react";
import LargeModal from "../LargeModal";
import TaskModification from "../TaskModification";

import { TaskCardProps } from "../../ts/types";
import { Card, Typography, useTheme } from "@mui/material";

export default function TaskCard({ task }: TaskCardProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { defenition, subtasks } = task;
  const theme = useTheme();

  function openTaskModal() {
    setModalOpen(true);
  }

  function closeTaskModal() {
    setModalOpen(false);
  }

  return (
    <>
      <LargeModal open={isModalOpen} onClose={closeTaskModal}>
        <TaskModification task={task} />
      </LargeModal>
      <Card square sx={{ p: 2, cursor: "pointer" }} onClick={openTaskModal}>
        <Typography sx={{ mb: 1 }}>{defenition}</Typography>
        <Typography
          fontSize="small"
          sx={{ color: theme.palette.primary.faded }}
        >
          {subtasks && subtasks.length > 0 && `0 of ${subtasks.length} subtask`}
        </Typography>
      </Card>
    </>
  );
}
