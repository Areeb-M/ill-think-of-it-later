'use client';
import {ReactNode} from 'react';
import {useAppSelector} from '../lib/hooks/hooks';
import List from '../lib/list/List';
import {useRouter} from 'next/navigation';

export default function ListsNav() {
  const state = useAppSelector(state => state.lists);
  const manager = state.managers.getAll()[0];
  const lists = state.lists;
  const rows: Array<ReactNode> = [];

  if (manager) {
    for (let i: number = 0; i < manager.lists.length; i++) {
      const list = lists.getById(manager.lists[i]);
      rows.push(ListsNavItem({list}));
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
  const router = useRouter();
  return (
    <tr
      className="hover:bg-base-300 border-base-300 border-b-4 select-none"
      key={list.id}
      onClick={() => router.push(`/list/${list.id}`)}
    >
      <td>{list.name}</td>
      <td>{`${list.active}`}</td>
      <td>{`${list.items.length}`}</td>
    </tr>
  );
}
