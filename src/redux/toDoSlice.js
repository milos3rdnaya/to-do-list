import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'toDoList',
  initialState: {
    toDoItems: [],
    activeList: 'all'
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
      localStorage.setItem('toDoItems', JSON.stringify(state));
    },
    setInitialState: (state, action) => {
      state.toDoItems = action.payload.toDoItems;
    },
    setActiveList: (state, action) => {
      state.activeList = action.payload;
    }
  }
});

export const { addToDo, deleteToDo, toggleComplete, editToDo, getLocalStorage, setLocalStorage, setInitialState, setActiveList } = toDoSlice.actions;
export default toDoSlice.reducer;