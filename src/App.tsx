import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import NoteList from './components/NoteList';
import TagList from './components/TagList';
import { Note, Tag } from './components/model';

const App: React.FC = () => {

  const [note, setNote] = useState<string>('');
  const [notesArray, setNotesArray] = useState<Note[]>([]);

  const [tags, setTags] = useState<Tag[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();

    if(note) {
      setNotesArray([...notesArray, {id: Date.now(), note}]);
      setNote('');
      let tag: string | undefined = note.split(' ').find(elem => elem.charAt(0) === "#" );
      if (tag) {
        setTags([...tags, {id: Date.now(), tag}]);
      }
    };
    console.log(tags)
}

  return (
    <div className="App">
      <div className="header">
        <h1>List of Notes</h1>      
      </div>
       <InputField note={note} setNote={setNote} handleAdd={handleAdd} />
       <NoteList notesArray={notesArray} setNotesArray={setNotesArray} />
       <TagList tags={tags} setTags={setTags}/>
    </div>
  );
}

export default App;
