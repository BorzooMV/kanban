import { BOARD_CREATE, BOARD_UPDATE, BOARD_DELETE } from "./actionTypes";
import {
  BoardType,
  Id,
  ReduxActionType,
  UpdateBoardDataType,
} from "../../ts/types";

const INITIAL_STATE = {
  boards: [],
};

export default function reducer(
  state = INITIAL_STATE,
  action: ReduxActionType
) {
  switch (action.type) {
    case BOARD_CREATE:
      return {
        ...state,
        boards: createBoardAndUpdateTheList(state, action.payload.newBoardData),
      };

    case BOARD_UPDATE:
      return {
        ...state,
        boards: updateBoardAndUpdateTheList(
          state,
          action.payload.id,
          action.payload.updateData
        ),
      };

    case BOARD_DELETE:
      return {
        ...state,
        boards: deleteBoardAndUpdateTheList(state, action.payload.id),
      };
    default:
      return state;
  }
}

function getBoardById(boards: BoardType[], id: Id): BoardType | undefined {
  return boards.find((board) => board.id === id);
}

// Fixme: resolve overload problem
function updateBoardAndUpdateTheList(
  state: any,
  id: Id,
  updateData: UpdateBoardDataType
): BoardType[] {
  const boardsToUpdate = state.boards.filter((board: any) => board.id !== id);
  const boardToUpdate = getBoardById(state.boards, id);
  const updatedKeys = Object.keys(updateData);

  const updatedBoard = updatedKeys.reduce((total, current) => {
    return {
      ...total,
      [current]: updateData[current],
    };
  }, boardToUpdate);

  return [...boardsToUpdate, updatedBoard];
}

function createBoardAndUpdateTheList(
  state: any,
  newBoardData: UpdateBoardDataType
): BoardType[] {
  // TODO: generate uuid for the boards
  const id = String(Math.random() * 10);

  const newBoard = {
    id,
    ...newBoardData,
  };

  const newBoardList = [...state.boards, newBoard];

  return newBoardList;
}

function deleteBoardAndUpdateTheList(state: any, id: Id) {
  const boards = [...state.boards];
  return boards.filter((board) => board.id !== id);
}
