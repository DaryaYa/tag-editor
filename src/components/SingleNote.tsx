import React, { useState } from 'react';
import '../style/singleNote.css';
import { Note } from './model';
import { Notes } from './NoteList';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin2Line } from 'react-icons/ri';

interface OneNote extends Notes {
    note: Note;
}

const SingleNote: React.FC<OneNote> = ({ note, notesArray, setNotesArray }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(note.note);

    const handleDelete = (id: number) => {
        setNotesArray(notesArray.filter(note => note.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) =>{
        e.preventDefault();

        setNotesArray(notesArray.map(note => note.id === id ? {...note, note:editText} : note ));
        setEdit(false);
    }

    return (
        <form className="single-note" onSubmit={(e)=>{handleEdit(e, note.id)}}>
            {
                edit ? (
                    <input className="note_edit" value={editText} onChange={(e)=> setEditText(e.target.value)} />
                ) : 
                    <div className="note__text">{note.note}</div>           
            }
            
            <div className="note__buttons">
                <span className="note__icon" onClick={()=> {
                    if(!edit) {
                        setEdit(!edit);
                    }
                }} ><FiEdit3 /></span>
                <span className="note__icon" onClick={()=>handleDelete(note.id)}><RiDeleteBin2Line /></span>
            </div>

        </form>
    )
};

export default SingleNote;