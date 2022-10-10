import "./index.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import Box from "./Box";

const tasks = [
  { id: 1, content: "przejść na reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Box>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
      <Footer body={"Lista zadań v2.0 10/2022 Konrad Legęć"} />
    </Box>
  );
}

export default App;
