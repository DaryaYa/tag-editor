import React, { useRef } from 'react';
import { Note, Tag } from './model';
import '../style/inputField.css';
import {v4 as uuidv4} from 'uuid';

interface Notes {
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
    notesArray: Note[];
    setNotesArray: React.Dispatch<React.SetStateAction<Note[]>>;
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}


const InputField: React.FC<Notes> = ({ note, setNote,  notesArray, setNotesArray, tags, setTags}) => {

    const handleAdd = (e: React.FormEvent): void => {
        e.preventDefault();

        let commonId: string = uuidv4();
    let tag: string | undefined = note.split(' ').find(elem => elem.charAt(0) === "#");

        if (note && !(note.charAt(0)==="#")) {
          setNotesArray([...notesArray, { id: commonId, note }]);
          setNote('');
          
          if (tag) {
            if (!(tags).find(elem => elem.tag === tag)) {
              setTags([...tags, { id: commonId, tag }]);
              setNote('')
            } 
          } 
        } else if(note && note.charAt(0) === "#") {
            if (!(tags).find(elem => elem.tag === tag)) {
                setTags([...tags, { id: commonId, tag }]);
                setNote('')
              } 
        };
      }

    const inputRef = useRef<HTMLInputElement>(null);
    const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {

        let tagsList: (string | undefined)[] = tags.map(elem => elem.tag);
       
        if((tagsList).includes(e.target.value)) {
           
            let resArr: Note[] = [];

            for (const elem of notesArray) {
                if((elem.note).split(' ').find(word => word === e.target.value)) {
                    resArr.push(elem)
                }
                setNotesArray(resArr);
            }
            setNote(e.target.value)
            
        } else {
            setNote(e.target.value)
        }
    }

    return <form className='create-form' onSubmit={(e) =>{
       handleAdd(e);
       inputRef.current?.blur(); 
    }
        }>
        <input className='create-form__input' type='inpet' placeholder='Type a note here' value={note} 
        onChange={(e)=>handleTags(e)} 
        ref={inputRef}/>
        <button className="create-form__submit" type='submit'>Add</button>
    </form>
};

export default InputField;