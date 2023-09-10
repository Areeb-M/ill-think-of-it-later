'use client';
import {AddObjectIcon} from './icons';
import {useAppDispatch, useAppSelector} from '../lib/hooks/hooks';
import {genList} from '../lib/list/ExampleLists';
import {addList} from '../lib/store/features/list/ListsSlice';

export default function AddListButton() {
  const state = useAppSelector(state => state.lists);
  const manager = state.managers.getAll()[0];
  const dispatch = useAppDispatch();
  return (
    <button
      className="btn btn-ghost btn-circle"
      onClick={() => {
        dispatch(addList({manager, list: genList()}));
      }}
    >
      <AddObjectIcon />
    </button>
  );
}
