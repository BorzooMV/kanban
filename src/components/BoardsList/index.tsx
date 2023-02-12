import uuid from "react-uuid";
import ClassNames from "classnames";

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

import useCurrentBoard from "../../hooks/useCurrentBoard";

import "./style.scss";

export default function BoardsList({ boards }: BoardsListProps) {
  const [currentBoard, changeBoard] = useCurrentBoard();

  function ListItems() {
    return (
      <>
        {boards.map((board) => {
          return (
            <ListItem
              key={uuid()}
              className={ClassNames("list-item", {
                "list-item--selected": currentBoard?.id === board.id,
              })}
              onClick={() => changeBoard(board.id)}
              sx={{ cursor: "pointer" }}
            >
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
      <Typography fontSize="medium" sx={{ ml: 2, mb: 2 }}>
        All Boards ({boards.length})
      </Typography>
      <ListItems />
      <AddToListItem />
    </List>
  );
}
