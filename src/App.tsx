import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import NoteList from './components/NoteList';
import { Note } from './components/model';

const App: React.FC = () => {

  const [note, setNote] = useState<string>('');
  const [notesArray, setNotesArray] = useState<Note[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();

    if(note) {
      setNotesArray([...notesArray, {id: Date.now(), note}]);
      setNote('');
    }
}

  return (
    <div className="App">
      <div className="header">
        <h1>List of Notes</h1>      
      </div>
       <InputField note={note} setNote={setNote} handleAdd={handleAdd} />
       <NoteList notesArray={notesArray} setNotesArray={setNotesArray} />
    </div>
  );
}

export default App;
