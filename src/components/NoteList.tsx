import React from 'react';
import '../style/noteList.css';
import { Note, Tag } from './model';
import SingleNote from './SingleNote';

export interface Notes{
    notesArray: Note[];
    setNotesArray: React.Dispatch<React.SetStateAction<Note[]>>;
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

const NoteList: React.FC<Notes> = ({ notesArray, setNotesArray, tags, setTags }) => {
    return <ul className="notes">
        {notesArray.map(note =>(
            <li className="notes__item" key={note.id}><SingleNote note={note} notesArray={notesArray} 
            setNotesArray={setNotesArray} tags={tags} setTags={setTags}/></li>
        ))}
    </ul>
};

export default NoteList;