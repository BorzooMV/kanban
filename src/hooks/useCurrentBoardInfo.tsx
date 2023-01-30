import { useDispatch, useSelector } from "react-redux";
import { changeCurrentBoard } from "../modules/redux/actions";
import { Id, ReduxStoreType, UseCurrentBoardType } from "../ts/types";

export default function useCurrentBoard(): UseCurrentBoardType {
  const dispatch = useDispatch();
  const currentBoardId = useSelector(
    (store: ReduxStoreType) => store.root.currentBoard
  );

  function changeBoard(id: Id) {
    dispatch(changeCurrentBoard(id));
  }

  return [currentBoardId, changeBoard];
}
