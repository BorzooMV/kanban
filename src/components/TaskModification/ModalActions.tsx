import { TaskModificationModalActionsProps } from "../../ts/types";
import { Box, Button } from "@mui/material";

export default function ModalActions({
  handleUpdateTask,
  disabled,
}: TaskModificationModalActionsProps) {
  return (
    <Box sx={{ py: 2 }}>
      <Button
        sx={{ float: "right" }}
        color="primary"
        variant="contained"
        onClick={handleUpdateTask}
        disabled={disabled}
      >
        Save
      </Button>
    </Box>
  );
}
