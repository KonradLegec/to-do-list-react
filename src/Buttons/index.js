import "./style.css";

const Buttons = (props) => {
  if (props.tasks.length === 0) {
    return null;
  }
  return (
    <p className="taskList__buttons">
      <button className="taskList__button">
        {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="taskList__button"
        disabled={props.tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </p>
  );
};

export default Buttons;
