import {
  BOARD_CREATE,
  BOARD_UPDATE,
  BOARD_DELETE,
  CURRENT_BORAD_CHANGE,
} from "./actionTypes";
import {
  BoardType,
  Id,
  ReduxActionType,
  ReduxStateType,
  UpdateBoardDataType,
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
      const id = generateId();
      return {
        ...state,
        boards: createBoardAndUpdateTheList(
          state,
          action.payload.newBoardData,
          id
        ),
        currentBoard: id,
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
    case CURRENT_BORAD_CHANGE:
      return {
        ...state,
        currentBoard: action.payload.id,
      };
    default:
      return state;
  }
}

// TODO: generate uuid for the boards
function generateId() {
  return String(Math.random() * 10);
}

function getBoardById(boards: BoardType[], id: Id): BoardType | undefined {
  return boards.find((board) => board.id === id);
}

// Fixme: resolve overload problem
function updateBoardAndUpdateTheList(
  state: ReduxStateType,
  id: Id,
  updateData: UpdateBoardDataType
): BoardType[] {
  const boardsToUpdate = state.boards.filter(
    (board: BoardType) => board.id !== id
  );
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
  state: ReduxStateType,
  newBoardData: UpdateBoardDataType,
  id: Id
): BoardType[] {
  const newBoard = {
    id,
    ...newBoardData,
  };

  const newBoardList = [...state.boards, newBoard];

  return newBoardList;
}

function deleteBoardAndUpdateTheList(state: ReduxStateType, id: Id) {
  const boards = [...state.boards];
  return boards.filter((board) => board.id !== id);
}
