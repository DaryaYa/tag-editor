import React, { useRef } from 'react';
import '../style/inputField.css';

interface Notes {
    note: string;
    setNote: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
}


const InputField: React.FC<Notes> = ({ note, setNote, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return <form className='create-form' onSubmit={(e) =>{
       handleAdd(e);
       inputRef.current?.blur(); 
    }
        }>
        <input className='create-form__input' type='inpet' placeholder='Type a note here' value={note} onChange={(e)=>setNote(e.target.value)} ref={inputRef}/>
        <button className="create-form__submit" type='submit'>Add</button>
    </form>
};

export default InputField;