import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header"

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

  const [searchText, setSearchText] = useState('');

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

  const deleteNote = (id) => {
    const newNotes =  notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return <div className="container">
    <Header />
    <Search handleSearchNote={setSearchText}/>
    <NotesList 
        notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
    />
  </div>;
}

export default App;
