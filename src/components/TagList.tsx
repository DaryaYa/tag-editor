import React, { useState } from 'react';
import { Tag, Note } from './model';
import '../style/tagList.css';
import { BiXCircle } from "react-icons/bi";
import InitialList from "../data.json";
import {v4 as uuidv4} from 'uuid';

interface Tags{
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
    notesArray: Note[];
    setNotesArray: React.Dispatch<React.SetStateAction<Note[]>>;
}

const TagList: React.FC<Tags> = ({ tags, setTags, notesArray, setNotesArray}) => {

    let initTags = InitialList.map(elem => {
        let el = (elem.note).split(' ').find(el => el.charAt(0) === "#")
        if (el) {
          if(!(tags).find(elem => elem.tag === el)) {
         return { id: uuidv4(), tag: el };
          }     
        }
      });


    const handleDel = (id: string | undefined) => {
        setTags(tags.filter(tag => tag.id !== id));
        console.log('tag id', id)
    }

    return <ul className="tag-list" >
            {tags.map(tag =>(
                <li className="tag__item" key={tag.id} >{tag.tag}  
                <span className="tag__icon" onClick={()=>handleDel(tag.id)}><BiXCircle/></span>
                </li>               
            ))}
    </ul>
};

export default TagList;