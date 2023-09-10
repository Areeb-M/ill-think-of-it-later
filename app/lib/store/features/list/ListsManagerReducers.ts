import {PayloadAction} from '@reduxjs/toolkit';
import ListsManager from '@/app/lib/list/ListsManager';
import List from '@/app/lib/list/List';
import {ListsState} from './ListsSlice';

const listsManagerReducers = {
  addList: (
    state: ListsState,
    action: PayloadAction<{manager: ListsManager; list: List}>
  ) => {
    const {manager, list} = action.payload;
    state.lists.insert(list);
    state.managers.get(manager).addList(list);
  },
  addManager: (state: ListsState, action: PayloadAction<ListsManager>) => {
    const manager = action.payload;
    manager.lists.forEach(list => state.lists.insert(list));
    state.managers.insert(manager);
  },
};

export default listsManagerReducers;
