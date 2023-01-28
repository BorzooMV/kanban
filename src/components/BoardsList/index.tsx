import { useState } from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DashboardOutlined } from "@mui/icons-material";
import { AddToListItem } from "../AddToListItem";

import { BoardType } from "../../ts/types";

import "./style.scss";

type Props = {
  boards: BoardType[];
};

export default function BoardsList({ boards }: Props) {
  function ListItems() {
    return (
      <>
        {boards.map((board, index) => {
          return (
            <ListItem key={index}>
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
