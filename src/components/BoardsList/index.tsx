import { useState } from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DashboardOutlined } from "@mui/icons-material";

type ListItemType = {
  text: string;
};

const sampleList = [
  {
    text: "Item",
  },
  {
    text: "Item",
  },
  {
    text: "Item",
  },
  {
    text: "Item",
  },
];

export default function BoardsList() {
  const [items, setItems] = useState<ListItemType[] | []>(sampleList);

  function ListItems() {
    return (
      <>
        {items.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <DashboardOutlined />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </>
    );
  }

  return (
    <List>
      <Typography>All Boards (3)</Typography>
      <ListItems />
    </List>
  );
}
