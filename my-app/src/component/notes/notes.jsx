import { useEffect, useState } from 'react';
import Bar from '../bar/bar';
import './notes.css';

const BoxContent = (props) =>{
    const {content} = props;
    if(content === 'arsip'){
        return (
            <div className="box-content">
            <h3>Catatan Arsip</h3>
            </div>
        )
    }
    return(
        <div className="box-content">
        <h3>Catatan Aktif</h3>
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