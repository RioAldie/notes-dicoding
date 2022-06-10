import { useContext, useEffect, useState } from 'react';
import { ChangeCtx } from '../../context/ChangeContext';
import { DataCtx } from '../../context/DataContext';
import { getInitialData } from '../../utils/db';
import './form.css';

export default function Form(){
    const [title,setTitle] = useState('');
    const [content, setContent] = useState('');
    const [note, setNote] = useState({});
    const {data, setData} = useContext(DataCtx);
    const {datachange, setDatachange} = useContext(ChangeCtx);
    const initialData = getInitialData();
    const handleNote = (e) =>{
        e.preventDefault();

        const newdata = {
            id: new Date().getTime(),
            title: title,
            body: content,
            createdAt: new Date(),
            archived: false
        };
        setTimeout(()=>{
            data.push(newdata);
            console.log('save data success',newdata);
            setDatachange(!datachange);
        },[500]);
        
        e.target.title.value = '';
        e.target.content.value = '';
    }
    useEffect(()=>{
        console.log(data)
    },[note]);

    return(
        <>
            <div className="form-container">
                
                <form action="" onSubmit={(e) => handleNote(e)}>
                <h3>Make a Note </h3>
                    <input type="text"className="input-title" placeholder="Title..." name='title' onChange={(e) => setTitle(e.target.value)} required/>
                    <textarea name="content" id="content" className='input-content' cols="30" rows="10" placeholder="Content..."  onChange={(e) => setContent(e.target.value)} required/>
                    <button className="btn-save" type="submit" >Save Note</button>
                </form>
            </div>
        </>
    )
}