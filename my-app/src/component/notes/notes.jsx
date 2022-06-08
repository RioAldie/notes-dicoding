import { useEffect, useState } from 'react';
import Bar from '../bar/bar';
import Note from '../note/note';
import './notes.css';

const BoxContent = (props) =>{
    const {content} = props;
    if(content === 'arsip'){
        return (
            <div className="box-content">
            <h3>Catatan Arsip</h3>
            <div className='list-content'>
                <Note arsip={true}/>
                <Note arsip={true}/>
            </div>
            </div>
        )
    }
    return(
        <div className="box-content">
        <h3>Catatan Aktif</h3>
        <div className='list-content'>
            <Note arsip={false}/>
        </div>
            
        </div>
    )
}
export default function Notes(){
    const [content, setContent] = useState('arsip');
    useEffect(()=>{
        
    },[content])
    return(
        <>
            <section className="content-container">
                <Bar content={content} setContent={setContent}/>
                <BoxContent content={content}/>
            </section>
        </>
    )
}