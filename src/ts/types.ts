import React from "react";

//*******
//Globals
//*******
export type ChildrenType = React.ReactNode;
export type Id = string;
export type MainWrapperType = { children: ChildrenType };

// *****
// Redux
// *****
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
  name: string;
};

export type NewColumnDataType = {
  name: string;
};

export type NewTaskDataType = {
  defenition: string;
};

// *****
// Hooks
// *****
export type UseCurrentBoardType = [BoardType | undefined, (id: Id) => void];

// **********
// Components
// **********

export type BoardType = {
  id: Id;
  name: string;
  columns: ColumnType[];
};

export type SubtaskType = {
  id: Id;
  defenition: string;
};

export type TaskType = {
  id: Id;
  defenition: string;
  subtasks?: SubtaskType[];
};

export type ColumnType = {
  id: Id;
  name: string;
  tasks?: TaskType[];
};

// Props
export type BoardsListProps = {
  boards: BoardType[];
};

export type TasksColumnProps = {
  columnData: ColumnType;
};

export type TaskCardProps = {
  task: TaskType;
};

export type ColumnsProps = {
  columns: ColumnType[];
};
