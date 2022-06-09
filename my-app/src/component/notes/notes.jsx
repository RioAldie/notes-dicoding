import { useEffect, useState } from 'react';
import { getInitialData } from '../../utils/db';
import Bar from '../bar/bar';
import Note from '../note/note';
import './notes.css';

const BoxContent = (props) =>{
    const {content} = props;
    const data = getInitialData();
    if(content === 'arsip'){
        return (
            <div className="box-content">
            <h3>Catatan Arsip</h3>
            <div className='list-content'>
            {   data.map((data)=>{
                    if(data.archived){
                        return(<Note key={data.id}title={data.title} body={data.body} archived={data.archived} date={data.createdAt}/>)
                    }
                })
            }
            </div>
            </div>
        )
    }
    return(
        <div className="box-content">
        <h3>Catatan Aktif</h3>
        <div className='list-content'>
            {
                data.map((data)=>{
                    if(!data.archived){
                       return(<Note key={data.id}title={data.title} body={data.body} archived={data.archived} date={data.createdAt}/>)
                   
                    }
                })
            }
            
        </div>
            
        </div>
    )
}
export default function Notes(){
    const [content, setContent] = useState('arsip');
    const datautils = getInitialData();
    const myObj = {
        id: 7,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    }
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