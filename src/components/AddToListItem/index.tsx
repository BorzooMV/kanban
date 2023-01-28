import { DashboardOutlined } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, useTheme } from "@mui/material";

export function AddToListItem() {
  const theme = useTheme();

  function addBoard() {
    console.log("open form");
  }

  return (
    <div>
      <ListItem onClick={addBoard}>
        <ListItemIcon>
          <DashboardOutlined sx={{ color: theme.palette.primary.main }} />
        </ListItemIcon>
        <ListItemText
          primary="Add New Board"
          sx={{
            color: theme.palette.primary.main,
            cursor: "pointer",
          }}
        />
      </ListItem>
    </div>
  );
}
