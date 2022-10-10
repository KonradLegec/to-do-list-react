import "./style.css"

const Box = (props) => (
    <main className="box">
        {props.children}
    </main>
);

export default Box;