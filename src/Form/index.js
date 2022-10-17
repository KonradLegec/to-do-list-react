import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };
  return (
    <form className="addTask__form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="addTask__input"
        placeholder="Co jest do zrobienia?"
        autofocus
        maxlength="70"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="addTask__submit">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
