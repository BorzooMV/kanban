import {
  BOARD_UPDATE,
  BOARD_CREATE,
  CURRENT_BORAD_CHANGE,
  COLUMN_CREATE,
  COLUMN_CHANGE,
  TASK_CREATE,
  TASK_UPDATE,
} from "./actionTypes";
import {
  Id,
  ReduxActionType,
  UpdateBoardDataType,
  NewColumnDataType,
  NewTaskDataType,
  TaskType,
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

export function changeTaskColumn(
  boardId: Id,
  currentColumnId: Id,
  newColumnId: Id,
  taskId: Id
): ReduxActionType {
  return {
    type: COLUMN_CHANGE,
    payload: {
      boardId,
      currentColumnId,
      newColumnId,
      taskId,
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

export function updateTask(updatedTaskData: TaskType): ReduxActionType {
  return {
    type: TASK_UPDATE,
    payload: {
      updatedTaskData,
    },
  };
}
