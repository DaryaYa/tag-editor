import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import NoteList from './components/NoteList';
import TagList from './components/TagList';
import { Note, Tag } from './components/model';
import InitialList from './data.json';
import InitTags from './data1.json';

import {v4 as uuidv4} from 'uuid';

const App: React.FC = () => {

  const [note, setNote] = useState<string>('');
  const [notesArray, setNotesArray] = useState<Note[]>(InitialList);
  const [tags, setTags] = useState<Tag[]>(InitTags);
   
  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();

    if (note) {
      setNotesArray([...notesArray, { id: uuidv4(), note }]);
      setNote('');
      let tag: string | undefined = note.split(' ').find(elem => elem.charAt(0) === "#");
      if (tag) {
        if (!(tags).find(elem => elem.tag === tag)) {
          setTags([...tags, { id: uuidv4(), tag }]);
        }
      }
    };
  }

  return (
    <div className="App">
      <div className="header">
        <h1>List of Notes</h1>
      </div>
      <InputField note={note} setNote={setNote} handleAdd={handleAdd} />
      <NoteList notesArray={notesArray} setNotesArray={setNotesArray} tags={tags} setTags={setTags} />
      <TagList tags={tags} setTags={setTags} notesArray={notesArray} setNotesArray={setNotesArray} />
    </div>
  );
}

export default App;
