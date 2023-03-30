import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "30/03/2023"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "30/03/2023"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "30/03/2023"
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  return <div className="container">
    <NotesList notes={notes} handleAddNote={addNote}/>
  </div>;
}

export default App;
