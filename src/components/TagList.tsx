import React from 'react';
import { Tag } from './model';
import '../style/tagList.css';
import { BiXCircle } from "react-icons/bi";

interface Tags{
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

const TagList: React.FC<Tags> = ({ tags, setTags }) => {

    const handleDel = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    }

    return <ul className="tagList" >
        {
            tags.map(tag =>(
                <li className="tag__item" key={tag.id}>{tag.tag}
                <span className="tag__icon" onClick={()=>handleDel(tag.id)}><BiXCircle/></span>
                </li>               
            ))
        }
    </ul>
};

export default TagList;