import uuid from "react-uuid";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DashboardOutlined } from "@mui/icons-material";
import { AddToListItem } from "../AddToListItem";

import { BoardsListProps } from "../../ts/types";

import "./style.scss";

export default function BoardsList({ boards }: BoardsListProps) {
  function ListItems() {
    return (
      <>
        {boards.map((board, index) => {
          return (
            <ListItem key={uuid()}>
              <ListItemIcon>
                <DashboardOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={board.name} />
            </ListItem>
          );
        })}
      </>
    );
  }

  return (
    <List>
      <Typography>All Boards ({boards.length})</Typography>
      <ListItems />
      <AddToListItem />
    </List>
  );
}
