import uuid from "react-uuid";

import {
  BOARD_CREATE,
  BOARD_DELETE,
  CURRENT_BORAD_CHANGE,
  COLUMN_CREATE,
  COLUMN_CHANGE,
  TASK_CREATE,
  TASK_UPDATE,
} from "./actionTypes";
import {
  BoardType,
  TaskType,
  Id,
  ReduxActionType,
  ReduxStateType,
  UpdateBoardDataType,
  NewColumnDataType,
  NewTaskDataType,
} from "../../ts/types";

const INITIAL_STATE = {
  boards: [],
  currentBoard: null,
};

export default function reducer(
  state = INITIAL_STATE,
  action: ReduxActionType
) {
  switch (action.type) {
    case BOARD_CREATE:
      const newBoardId = generateId();
      return {
        ...state,
        boards: createBoardAndUpdateTheList(
          state,
          action.payload.newBoardData,
          newBoardId
        ),
        currentBoard: newBoardId,
      };

    case BOARD_DELETE:
      return {
        ...state,
        boards: deleteBoardAndUpdateTheList(state, action.payload.id),
      };
    case CURRENT_BORAD_CHANGE:
      return {
        ...state,
        currentBoard: action.payload.id,
      };

    case COLUMN_CREATE:
      const newColumnId = generateId();
      return {
        ...state,
        boards: createColumnAndUpdateTheBoard(
          state,
          action.payload.newColumnData,
          action.payload.boardId,
          newColumnId
        ),
      };

    case COLUMN_CHANGE:
      return {
        ...state,
        boards: changeColumnIdAndUpdateBoards(
          state,
          action.payload.boardId,
          action.payload.currentColumnId,
          action.payload.newColumnId,
          action.payload.taskId
        ),
      };

    case TASK_CREATE:
      const newTaskId = generateId();
      return {
        ...state,
        boards: createTaskAndUpdateTheBoard(
          state,
          action.payload.newTaskData,
          action.payload.boardId,
          action.payload.columnId,
          newTaskId
        ),
      };

    case TASK_UPDATE:
      return {
        ...state,
        boards: updateTaskAndUpdateTheBoard(
          state,
          action.payload.updatedTaskData
        ),
      };

    default:
      return state;
  }
}

function generateId() {
  return uuid();
}

function getBoardById(boards: BoardType[], id: Id): BoardType | undefined {
  return boards.find((board) => board.id === id);
}

function createBoardAndUpdateTheList(
  state: ReduxStateType,
  newBoardData: UpdateBoardDataType,
  id: Id
): BoardType[] {
  const newBoard = {
    id,
    columns: [],
    ...newBoardData,
  };

  const newBoardList = [...state.boards, newBoard];

  return newBoardList;
}

function deleteBoardAndUpdateTheList(state: ReduxStateType, id: Id) {
  const boards = [...state.boards];
  return boards.filter((board) => board.id !== id);
}

function createColumnAndUpdateTheBoard(
  state: ReduxStateType,
  newColumnData: NewColumnDataType,
  boardId: Id,
  id: Id
): BoardType[] {
  const newColumn = {
    id,
    tasks: [],
    ...newColumnData,
  };

  const updatedBoards = [...state.boards];

  const matchedBoard = updatedBoards.find((board) => board.id === boardId);

  if (matchedBoard) {
    matchedBoard.columns = [...matchedBoard.columns, newColumn];
  }

  return updatedBoards;
}

function createTaskAndUpdateTheBoard(
  state: ReduxStateType,
  newTaskData: NewTaskDataType,
  boardId: Id,
  columnId: Id,
  id: Id
): BoardType[] {
  const newTask = {
    id,
    boardId,
    columnId,
    comment: "",
    subtasks: [],
    ...newTaskData,
  };

  const updatedBoards = [...state.boards];

  const matchedBoard = updatedBoards.find((board) => board.id === boardId);

  if (matchedBoard) {
    const matchedColumn = matchedBoard.columns.find((column) => {
      return column.id === columnId;
    });

    if (matchedColumn) {
      const prevTasks = matchedColumn.tasks ?? [];
      matchedColumn.tasks = [...prevTasks, newTask];
    }
  }

  return updatedBoards;
}

function updateTaskAndUpdateTheBoard(
  state: ReduxStateType,
  updatedTaskData: TaskType
) {
  const updatedBoards = state.boards.map((board) => {
    const updatedColumns = board.columns.map((column) => {
      const updatedTasks = column.tasks?.map((task) => {
        if (task.id === updatedTaskData.id) {
          return { ...task, ...updatedTaskData };
        }
        return task;
      });
      return { ...column, tasks: updatedTasks };
    });
    return { ...board, columns: updatedColumns };
  });

  return updatedBoards;
}

function changeColumnIdAndUpdateBoards(
  state: ReduxStateType,
  boardId: Id,
  currentColumnId: Id,
  newColumnId: Id,
  taskId: Id
) {
  const updatedBoards = state.boards.map((board) => {
    if (board.id === boardId) {
      const selectedTask = board.columns
        .find((column) => column.id === currentColumnId)
        ?.tasks?.find((task) => task.id === taskId);

      const newTask = { ...selectedTask, columnId: newColumnId };

      const updatedColumns = board.columns.map((column) => {
        if (column.id === currentColumnId) {
          const updatedTasks = column.tasks?.filter(
            (task) => task.id !== newTask?.id
          );
          return { ...column, tasks: updatedTasks };
        }

        if (column.id === newColumnId) {
          if (column.tasks) {
            return { ...column, tasks: [...column.tasks, newTask] };
          } else {
            return { ...column, tasks: [newTask] };
          }
        }

        return column;
      });
      return { ...board, columns: updatedColumns };
    }
    return board;
  });

  return updatedBoards;
}
