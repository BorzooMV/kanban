import {
  BOARD_CREATE,
  BOARD_DELETE,
  CURRENT_BORAD_CHANGE,
  COLUMN_CREATE,
} from "./actionTypes";
import {
  BoardType,
  Id,
  ReduxActionType,
  ReduxStateType,
  UpdateBoardDataType,
  NewColumnDataType,
} from "../../ts/types";
import uuid from "react-uuid";

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

    // case BOARD_UPDATE:
    //   return {
    //     ...state,
    //     boards: updateBoardAndUpdateTheList(
    //       state,
    //       action.payload.id,
    //       action.payload.updateData
    //     ),
    //   };

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

    default:
      return state;
  }
}

// TODO: generate uuid for the boards
function generateId() {
  return uuid();
}

function getBoardById(boards: BoardType[], id: Id): BoardType | undefined {
  return boards.find((board) => board.id === id);
}

// Fixme: resolve overload problem
// function updateBoardAndUpdateTheList(
//   state: ReduxStateType,
//   id: Id,
//   updateData: UpdateBoardDataType
// ): BoardType[] {
//   const boardsToUpdate = state.boards.filter(
//     (board: BoardType) => board.id !== id
//   );
//   const boardToUpdate = getBoardById(state.boards, id);
//   const updatedKeys = Object.keys(updateData);
//
//   const updatedBoard = updatedKeys.reduce((total, current) => {
//     return {
//       ...total,
//       [current]: updateData[current],
//     };
//   }, boardToUpdate);
//
//   return [...boardsToUpdate, updatedBoard];
// }

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
