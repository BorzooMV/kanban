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
export type ReduxActionType = {
  type: string;
  payload?: any;
};

// Redux - Reducer utils
export type UpdateBoardDataType = {
  name?: string;
};
