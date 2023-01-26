import { ReduxActionType } from "../../ts/types";

const INITIAL_STATE = {};

export default function reducer(
  state = INITIAL_STATE,
  action: ReduxActionType
) {
  switch (action.type) {
    default:
      return state;
  }
}
