import "./style.css";

const Tasks = (props) => (
  <ul className="taskList__list">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`${
          task.done && props.hideDone
            ? " taskList__item--hidden"
            : "taskList__item"
        }`}
      >
        <button className="taskList__toggleButton">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`${task.done ? "taskList__contentDone" : "taskList__content"}`}
        >
          {task.content}
        </span>
        <button className="taskList__removeButton">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
