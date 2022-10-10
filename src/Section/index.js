import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
  <div className="section__main">
    <div className="section__topSection">
      <h2 className="section__header">
        <p>{title}</p>
      </h2>
      {extraHeaderContent}
    </div>
    {body}
  </div>
);

export default Section;
