// ** Redux Imports
import { useDispatch } from "react-redux";
import { changeStatus, deleteTodo } from "../../store/todoSlice";

// ** Styles
import style from "./Todo.module.css";

const Todo = (props) => {
  // ** Redux
  const dispatch = useDispatch();
  return (
    <div className={style.todo}>
      <div className={style.todoLeft}>
        <label className={style.label}>
          <input
            type="checkbox"
            className={style.checkbox}
            checked={props.status}
            onChange={() => {
              dispatch(changeStatus(props.id));
            }}
          />
          <span></span>
        </label>
        <span
          className={`${style.title} ${props.status ? style.titleDisable : ""}`}
        >
          {props.title}
        </span>
      </div>
      <div className={style.todoRight}>
        <span className={style.category}>
          {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
        </span>
        <span
          className={`
        ${style.priority}
        ${props.priority === "high" ? style.priorityHigh : ""}
        ${props.priority === "medium" ? style.priorityMedium : ""}
        `}
        >
          {props.priority.charAt(0).toUpperCase()}
        </span>
        <button
          className={[style.delete]}
          onClick={() => dispatch(deleteTodo(props.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
