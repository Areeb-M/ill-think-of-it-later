"use client";
import { useAppSelector } from "../lib/hooks/hooks";
import List from "../lib/list/List";

export default function ListsNav() {
  const lists = useAppSelector((state) => state.listsManager.lists);

  const rows = [];
  for (let i: number = 0; i < lists.length; i++) {
    const list = lists[i];
    if (list) rows.push(ListsNavItem({ list }));
  }

  return (
    <div className="grow border-base-300 border-4">
      <table className="table px-2">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function ListsNavItem({ list }: { list: List }) {
  return (
    <tr className="hover:bg-base-300 border-base-300 border-b-4">
      <td>{list.name}</td>
      <td>{list.itemsLeft}</td>
      <td>{`${list.active}`}</td>
      <td>{`${list.items.length}`}</td>
    </tr>
  );
}
