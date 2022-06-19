import React from 'react';
import { Tag, Note } from './model';
import '../style/tagList.css';
import { BiXCircle } from "react-icons/bi";

interface Tags{
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    notesArray: Note[];
    setNotesArray: React.Dispatch<React.SetStateAction<Note[]>>;
}

const TagList: React.FC<Tags> = ({ tags, setTags,  notesArray, setNotesArray}) => {

    const handleDel = (id: string | undefined, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        setTags(tags.filter(tag => tag.id !== id));
        setNotesArray(notesArray.filter(note => note.id !== id))
    }

    const handleClick = (id: string | undefined) => {
        setNotesArray(notesArray.filter(note => note.id === id))
        setTags(tags.filter(tag => tag.id === id));
    }

    return <ul className="tag-list" >
            {tags.map(tag =>(
                <li className="tag__item" key={tag.id} onClick={()=>handleClick(tag.id)} >{tag.tag}  
                <span className="tag__icon" onClick={(e)=>handleDel(tag.id, e)}><BiXCircle/></span>
                </li>               
            ))}
    </ul>
};

export default TagList;