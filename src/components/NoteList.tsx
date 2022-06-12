import React from 'react';
import '../style/noteList.css';
import { Note } from './model';
import SingleNote from './SingleNote';

export interface Notes{
    notesArray: Note[];
    setNotesArray: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList: React.FC<Notes> = ({ notesArray, setNotesArray }) => {
    return <ul className="notes">
        {notesArray.map(note =>(
            <li className="notes__item" key={note.id}><SingleNote note={note} notesArray={notesArray} setNotesArray={setNotesArray}/></li>
        ))}
    </ul>
};

export default NoteList;