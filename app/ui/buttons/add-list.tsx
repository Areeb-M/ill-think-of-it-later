'use client';
import {AddObjectIcon} from '../icons';
import {useAppDispatch, useAppSelector} from '../../lib/hooks/hooks';
import {addList} from '../../lib/store/features/list/ListsSlice';
import List from '../../lib/list/List';

export default function AddListButton() {
  const state = useAppSelector(state => state.lists);
  const manager = state.managers.getAll()[0];
  const dispatch = useAppDispatch();
  return (
    <button
      className="btn btn-ghost btn-circle"
      onClick={() => {
        dispatch(
          addList({
            manager,
            list: new List(`List ${manager.lists.length + 1}`, true),
          })
        );
      }}
    >
      <AddObjectIcon />
    </button>
  );
}
