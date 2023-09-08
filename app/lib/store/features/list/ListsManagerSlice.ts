import List from "@/app/lib/list/List";
import ListsManager from "@/app/lib/list/ListsManager";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface ListsManagerState {
//   manager: ListsManager;
//   lists: Array<List>;
// }

const initialState: ListsManager = new ListsManager([]);

export const listsManagerSlice = createSlice({
  name: "listsManager",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      return state.addList(action.payload);
    },
  },
});

export const { addList } = listsManagerSlice.actions;

export default listsManagerSlice.reducer;
