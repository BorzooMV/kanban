import React from "react";

export type ChildrenType = React.ReactNode;

export type MainWrapperType = { children: ChildrenType };

export type ReduxActionType = {
  type: string;
  payload?: string;
};
