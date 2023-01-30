import React from "react";

export type ChildrenType = React.ReactNode;
export type Id = string;
export type ColumnType = {
  id: Id;
  name?: string;
};

export type MainWrapperType = { children: ChildrenType };

export type BoardType = {
  id: Id;
  name?: string;
};

// Redux
export type ReduxStateType = {
  boards: BoardType[];
  currentBoard: null | Id;
};

export type ReduxStoreType = {
  root: ReduxStateType;
};

export type ReduxActionType = {
  type: string;
  payload?: any;
};

// Redux - Reducer utils
export type UpdateBoardDataType = {
  name?: string;
};

// Hooks
export type UseCurrentBoardType = [Id | null, (id: Id) => void];
