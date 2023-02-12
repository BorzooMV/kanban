import {
  BOARD_UPDATE,
  BOARD_CREATE,
  CURRENT_BORAD_CHANGE,
  COLUMN_CREATE,
  TASK_CREATE,
} from "./actionTypes";
import {
  Id,
  ReduxActionType,
  UpdateBoardDataType,
  NewColumnDataType,
  NewTaskDataType,
} from "../../ts/types";

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

export function createColumn(
  newColumnData: NewColumnDataType,
  boardId: Id
): ReduxActionType {
  return {
    type: COLUMN_CREATE,
    payload: {
      newColumnData,
      boardId,
    },
  };
}

export function createTask(
  newTaskData: NewTaskDataType,
  boardId: Id,
  columnId: Id
): ReduxActionType {
  return {
    type: TASK_CREATE,
    payload: {
      newTaskData,
      boardId,
      columnId,
    },
  };
}
