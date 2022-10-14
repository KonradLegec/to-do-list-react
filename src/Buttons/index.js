import "./style.css";

const Buttons = ({tasks, hideDone, toggleHideDone}) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <p className="taskList__buttons">
      <button onClick={toggleHideDone} className="taskList__button">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="taskList__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </p>
  );
};

export default Buttons;
