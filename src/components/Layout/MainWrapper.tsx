import { Box } from "@mui/material";
import { MainWrapperType } from "../../ts/types";

export default function MainWrapper({ children }: MainWrapperType) {
  return (
    <Box className="layout__main-wrapper" sx={{ flexGrow: 1 }}>
      {children}
    </Box>
  );
}
