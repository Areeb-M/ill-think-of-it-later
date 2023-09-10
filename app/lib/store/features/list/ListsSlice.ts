import {createSlice} from '@reduxjs/toolkit';
import ListReducers from './ListReducers';
import ListsManagerReducers from './ListsManagerReducers';
import StateById from '@/app/lib/StateById';
import List from '@/app/lib/list/List';
import ListItem from '@/app/lib/list/ListItem';
import ListsManager from '@/app/lib/list/ListsManager';

export interface ListsState {
  managers: StateById<ListsManager>;
  lists: StateById<List>;
  listItems: StateById<ListItem>;
}

const initialState: ListsState = {
  managers: new StateById<ListsManager>([new ListsManager()]),
  lists: new StateById<List>([]),
  listItems: new StateById<ListItem>([]),
};

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    ...ListsManagerReducers,
    ...ListReducers,
  },
});

export const {addList, addListItem} = listsSlice.actions;

export default listsSlice.reducer;
