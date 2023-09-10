'use client';
import {ReactNode} from 'react';
import {useAppDispatch, useAppSelector} from '../lib/hooks/hooks';
import List from '../lib/list/List';
import ListItem from '../lib/list/ListItem';
import {addListItem} from '../lib/store/features/list/ListsSlice';

export default function ListsNav() {
  const state = useAppSelector(state => state.lists);
  const manager = state.managers.getAll()[0];
  const lists = state.lists;
  const rows: Array<ReactNode> = [];

  if (manager) {
    for (let i: number = 0; i < manager.lists.length; i++) {
      const list = lists.get(manager.lists[i]);
      if (list) rows.push(ListsNavItem({list}));
    }
  }

  return (
    <div className="grow border-base-300 border-4">
      <table className="table px-2">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function ListsNavItem({list}: {list: List}) {
  const dispatch = useAppDispatch();
  return (
    <tr
      className="hover:bg-base-300 border-base-300 border-b-4 select-none"
      onClick={() => {
        const item = new ListItem('New item', 'desc', false);
        dispatch(addListItem({list, item}));
      }}
    >
      <td>{list.name}</td>
      <td>{list.itemsLeft}</td>
      <td>{`${list.active}`}</td>
      <td>{`${list.items.length}`}</td>
    </tr>
  );
}
