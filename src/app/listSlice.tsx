import { createSlice } from "@reduxjs/toolkit";

type Task = {
  id: number;
  name: string;
};

export interface ListState {
  list: Array<Task>;
}

const initialState: ListState = {
  list: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push({ id: action.payload.id, name: action.payload.name });
    },
    deleteTask: (state, action) => {
      state.list.splice(
        state.list.findIndex((arrow) => arrow.id === action.payload),
        1
      );
    },
  },
});

export const { addTask, deleteTask } = listSlice.actions;

export default listSlice.reducer;
