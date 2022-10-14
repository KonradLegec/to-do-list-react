import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="taskList__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`${
          task.done && hideDone ? " taskList__item--hidden" : "taskList__item"
        }`}
      >
        <button className="taskList__toggleButton">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`${
            task.done ? "taskList__contentDone" : "taskList__content"
          }`}
        >
          {task.content}
        </span>
        <button onClick={() => removeTask(task.id)} className="taskList__removeButton">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
