import "./style.css";

const Form = () => (
  <form className="addTask__form">
    <input
      className="addTask__input"
      placeholder="Co jest do zrobienia?"
      autofocus
      maxlength="70"
    />
    <button className="addTask__submit">Dodaj zadanie</button>
  </form>
);

export default Form;
