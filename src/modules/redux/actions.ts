import {
  BOARD_UPDATE,
  BOARD_CREATE,
  CURRENT_BORAD_CHANGE,
} from "./actionTypes";
import { Id, ReduxActionType, UpdateBoardDataType } from "../../ts/types";

export function updateBoard(
  id: Id,
  updateData: UpdateBoardDataType
): ReduxActionType {
  return {
    type: BOARD_UPDATE,
    payload: {
      id,
      updateData,
    },
  };
}

export function createBoard(
  newBoardData: UpdateBoardDataType
): ReduxActionType {
  return {
    type: BOARD_CREATE,
    payload: {
      newBoardData,
    },
  };
}

export function changeCurrentBoard(id: Id): ReduxActionType {
  return {
    type: CURRENT_BORAD_CHANGE,
    payload: {
      id,
    },
  };
}
