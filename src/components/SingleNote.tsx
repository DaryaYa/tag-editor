import React, { useState } from 'react';
import '../style/singleNote.css';
import { Note } from './model';
import { Notes } from './NoteList';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin2Line } from 'react-icons/ri';

interface OneNote extends Notes {
    note: Note;
}

const SingleNote: React.FC<OneNote> = ({ note, notesArray, setNotesArray, tags, setTags }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(note.note);

    const handleDelete = (id: string) => {
        setNotesArray(notesArray.filter(note => note.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: string) =>{
        e.preventDefault();

        setNotesArray(notesArray.map(note => note.id === id ? {...note, note:editText} : note ));
        setEdit(false);
    };

    // const editNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEditText(e.currentTarget.value);
    // }

    return (
        <form className="single-note" onSubmit={(e)=>{handleEdit(e, note.id)}}>
            {
                edit ? (
                    <input className="note_edit" value={editText} onChange={(e: React.ChangeEvent<HTMLInputElement> )=> {
                        setEditText(e.currentTarget.value);
                    }}/>
                ) : 
                    <div className="note__text">{(note.note).split(' ').map((el, ind) =>{
                       return <span className="note__item" key={ind}>{`${el} `}</span>
                    })
                    }</div>           
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