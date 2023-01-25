import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  addModal: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.addModal = !state.addModal;
    },
    addTodo: (state, action) => {
      const todo = {
        id: state.todos.length + 1,
        ...action.payload,
      };
      state.todos = [...state.todos, todo];
      localStorage.setItem("todos", JSON.stringify([...state.todos, todo]));
    },
    changeStatus: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { toggleModal, addTodo, changeStatus, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
