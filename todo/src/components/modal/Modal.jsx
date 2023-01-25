// ** React Imports
import { useState } from "react";

// ** Redux Imports
import { useDispatch } from "react-redux";
import { addTodo, toggleModal } from "../../store/todoSlice";

// ** Components
import Button from "../button";

// ** Styles
import style from "./Modal.module.css";

const Modal = () => {
  // ** Redux
  const dispatch = useDispatch();

  // ** States
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [priority, setPriority] = useState();

  // ** Handle Submit
  const handleSubmit = () => {
    if (!title || !category || !priority) {
      alert("Please fill all the fields");
      return;
    }

    dispatch(addTodo({ title, category, priority, status: 0 }));
    dispatch(toggleModal());
  };

  return (
    <div className={style.modal}>
      <div className={style.modalOverlay}></div>
      <div className={style.modalBody}>
        <div className={style.modalHeader}>
          <h4>Add Todo</h4>
          <span className={style.close} onClick={() => dispatch(toggleModal())}>
            &times;
          </span>
        </div>
        <div className={style.modalContent}>
          <div className={style.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              id="priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="priority">Category</label>
            <select
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="buttons">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
