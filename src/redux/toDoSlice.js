import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'toDos',
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      const toDo = {
        id: new Date(),
        text: action.payload.text,
        completed: false
      }
      state.push(toDo);
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      let index = state.findIndex(toDo => toDo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    editToDo: (state, action) => {
      let index = state.findIndex(toDo => toDo.id === action.payload.id);
      state[index].text = action.payload.newText;
    },
    setLocalStorage: (state, action) => {
      localStorage.setItem('todos', JSON.stringify(state));
    },
    getLocalStorage: (state, action) => {
      let storage = localStorage.getItem('todos');
      if (storage) {
        state = JSON.parse(storage);
      }
    }
  }
});

export const { addToDo, deleteToDo, toggleComplete, editToDo, getLocalStorage, setLocalStorage } = toDoSlice.actions;
export default toDoSlice.reducer;