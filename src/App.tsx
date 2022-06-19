import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import NoteList from './components/NoteList';
import TagList from './components/TagList';
import { Note, Tag } from './components/model';
import InitialList from './data.json';
import InitTags from './data1.json';

const App: React.FC = () => {

  const [note, setNote] = useState<string>('');
  const [notesArray, setNotesArray] = useState<Note[]>(InitialList);
  const [tags, setTags] = useState<Tag[]>(InitTags);

  return (
    <div className="App">
      <div className="header">
        <h1>List of Notes</h1>
      </div>
      <InputField note={note} setNote={setNote}  notesArray={notesArray} setNotesArray={setNotesArray} tags={tags} setTags={setTags}/>
      <NoteList notesArray={notesArray} setNotesArray={setNotesArray} tags={tags} setTags={setTags} />
      <TagList tags={tags} setTags={setTags} notesArray={notesArray} setNotesArray={setNotesArray} />
    </div>
  );
}

export default App;
