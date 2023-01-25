// ** React Imports
import { createPortal } from "react-dom";

// ** Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "./store/todoSlice";

// ** Components
import Todo from "./components/todo";

// ** Styles
import "./App.css";
import Button from "./components/button";
import Modal from "./components/modal";

const App = () => {
  // ** Redux
  const store = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="header card">
          <h1>React Todo</h1>
          <div>
            <Button onClick={() => dispatch(toggleModal())}>Add Todo</Button>
          </div>
        </div>
        <div className="todos card">
          {store.todos.length > 0 ? (
            store.todos.map((todo) => {
              return <Todo key={todo.id} {...todo} />;
            })
          ) : (
            <span>No todos found</span>
          )}
        </div>
      </div>
      {store.addModal &&
        createPortal(<Modal />, document.getElementById("modal-root"))}
    </>
  );
};

export default App;
