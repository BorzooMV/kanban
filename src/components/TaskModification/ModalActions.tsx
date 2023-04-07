import { TaskModificationModalActionsProps } from "../../ts/types";
import { Box, Button } from "@mui/material";

// TODO: add disabled prop for save button
export default function ModalActions({
  handleUpdateTask,
}: TaskModificationModalActionsProps) {
  return (
    <Box sx={{ py: 2 }}>
      <Button
        sx={{ float: "right" }}
        color="primary"
        variant="contained"
        onClick={handleUpdateTask}
      >
        Save
      </Button>
    </Box>
  );
}
