import React, { Dispatch, SetStateAction } from "react";

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
  done: boolean;
};

export type TaskType = {
  id: Id;
  columnId: Id;
  boardId: Id;
  defenition: string;
  comment: string;
  subtasks: SubtaskType[] | [];
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

export type LargeModalProps = {
  open: boolean;
  onClose: () => void;
  children: ChildrenType;
};

export type TaskModificationProps = {
  task: TaskType;
};

export type SubTaskCheckboxProps = {
  task: SubtaskType;
  onChange: () => void;
};

export type ScrollableContainerProps = {
  children: ChildrenType;
};

export type TaskModificationModalContentProps = {
  draftTask: TaskType;
  setDraftTask: Dispatch<SetStateAction<TaskType>>;
};

export type TaskModificationModalActionsProps = {
  handleUpdateTask: () => void;
  disabled?: boolean;
};
