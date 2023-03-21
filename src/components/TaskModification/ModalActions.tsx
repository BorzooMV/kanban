import React from "react";
import { Box, Button } from "@mui/material";

export default function ModalActions() {
  return (
    <Box sx={{ py: 2 }}>
      <Button sx={{ float: "right" }} color="primary" variant="contained">
        Save
      </Button>
    </Box>
  );
}
