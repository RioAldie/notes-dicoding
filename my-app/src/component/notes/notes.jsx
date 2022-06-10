import { useContext, useEffect, useState } from 'react';
import { DataCtx } from '../../context/DataContext';
import { getInitialData } from '../../utils/db';
import Bar from '../bar/bar';
import Note from '../note/note';
import './notes.css';

const NullContent = () =>{
    return(
        <div className='list-content'>
            <p>Tidak ada catatan</p>
        </div>
        )
}
const BoxContent = (props) =>{
    const {content} = props;
    const {data,setData} = useContext(DataCtx);
    const [datanote, setDatanote] = useState(data);
    const handleListContent =(archived) =>{
        if(archived){
            if(data.length < 1){
                return <NullContent/>
            }
             return  data.map((data)=>{
                if(data.archived){
                    return(<Note key={data.id}title={data.title} body={data.body} _id={data.id} archived={data.archived} date={data.createdAt}/>)
                }
            })
        }
        if(!archived){
            if(data.length < 1){
                return <NullContent/>
            }
            return  datanote.map((data)=>{
                if(!data.archived){
                    return(<Note key={data.id}title={data.title} body={data.body} _id={data.id} archived={data.archived} date={data.createdAt}/>)
                }
            })
        }
           
        
    }
    useEffect(()=>{
        setDatanote(data);
    },[data,datanote])

    if(content === 'arsip'){
        return (
            <div className="box-content">
            <h3>Catatan Arsip</h3>
            <div className='list-content'>
            {   
                handleListContent(true)
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
                handleListContent(false)
            }
            
        </div>
            
        </div>
    )
}
export default function Notes(){
    const [content, setContent] = useState('regular');
  
    return(
        <>
            <section className="content-container">
                <Bar content={content} setContent={setContent}/>
                <BoxContent content={content}/>
            </section>
        </>
    )
}