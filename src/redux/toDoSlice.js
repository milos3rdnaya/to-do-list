import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'toDoList',
  initialState: {
    toDoItems: [],
    visibilityFilter: 'all'
  },
  reducers: {
    addToDo: (state, action) => {
      const toDo = {
        id: new Date(),
        text: action.payload.text,
        completed: false
      }
      state.toDoItems.push(toDo);
    },
    deleteToDo: (state, action) => {
      state.toDoItems = state.toDoItems.filter((toDo) => toDo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      let index = state.toDoItems.findIndex(toDo => toDo.id === action.payload.id);
      state.toDoItems[index].completed = action.payload.completed;
    },
    editToDo: (state, action) => {
      let index = state.toDoItems.findIndex(toDo => toDo.id === action.payload.id);
      state.toDoItems[index].text = action.payload.newText;
    },
    setLocalStorage: (state, action) => {
      localStorage.setItem('toDoList', JSON.stringify(state));
    },
    setInitialState: (state, action) => {
      state.toDoItems = action.payload.toDoItems;
      state.visibilityFilter = action.payload.visibilityFilter;
    },
    setVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    }
  }
});

export const { addToDo, deleteToDo, toggleComplete, editToDo, getLocalStorage, setLocalStorage, setInitialState, setVisibilityFilter } = toDoSlice.actions;
export default toDoSlice.reducer;