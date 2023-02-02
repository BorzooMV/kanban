import { useDispatch, useSelector } from "react-redux";
import { changeCurrentBoard } from "../modules/redux/actions";
import { Id, ReduxStoreType, UseCurrentBoardType } from "../ts/types";

export default function useCurrentBoard(): UseCurrentBoardType {
  const dispatch = useDispatch();
  const boards = useSelector((store: ReduxStoreType) => store.root.boards);
  const currentBoardId = useSelector(
    (store: ReduxStoreType) => store.root.currentBoard
  );

  const currentBoard = boards.find((board) => board.id === currentBoardId);

  function changeBoard(id: Id) {
    dispatch(changeCurrentBoard(id));
  }

  return [currentBoard, changeBoard];
}
