"use client";
import { AddObjectIcon } from "./icons";
import { addList } from "../lib/store/features/list/ListsManagerSlice";
import { useAppDispatch } from "../lib/hooks/hooks";
import { ListA } from "../lib/list/ExampleLists";

export default function AddListButton() {
  const dispatch = useAppDispatch();
  return (
    <button
      className="btn btn-ghost btn-circle"
      onClick={() => {
        dispatch(addList(ListA));
      }}
    >
      <AddObjectIcon />
    </button>
  );
}
