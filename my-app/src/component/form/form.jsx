import { useEffect, useState } from 'react';
import './form.css';

export default function Form(){
    const [title,setTitle] = useState('');
    const [content, setContent] = useState('');
    const [note, setNote] = useState({});

    function handleNote(e){
        e.preventDefault();

        setNote({
            id: new Date().getTime(),
            title: title,
            content: content,
            date: new Date()
        })
        e.target.title.value = '';
        e.target.content.value = '';
    }
    useEffect(()=>{
        console.log('note:' ,note);
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