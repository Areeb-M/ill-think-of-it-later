import {PayloadAction} from '@reduxjs/toolkit';
import List from '@/app/lib/list/List';
import ListItem from '@/app/lib/list/ListItem';
import {ListsState} from './ListsSlice';

const listReducers = {
  addListItem: (
    state: ListsState,
    action: PayloadAction<{list: List; item: ListItem}>
  ) => {
    const {list, item} = action.payload;
    state.listItems.insert(item);
    state.lists.get(list).addItem(item);
  },
};

export default listReducers;
