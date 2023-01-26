import { TEST_OK } from "./actionTypes";
import { ReduxActionType } from "../../ts/types";

const INITIAL_STATE = {
  test: "failed",
};

export default function reducer(
  state = INITIAL_STATE,
  action: ReduxActionType
) {
  switch (action.type) {
    case TEST_OK:
      return { ...state, test: "OK" };

    default:
      return state;
  }
}
