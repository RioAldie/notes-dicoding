import { useContext, useEffect, useState } from 'react';
import { DataCtx } from '../../context/DataContext';
import './note.css';

const CardButton = (props)=>{
    const {arsip,idtarget} = props;
    const {data,setData} = useContext(DataCtx);
    const [datachange, setDatachange] = useState(false);
    const handleDelete= ()=>{
       const dataFilter = data.filter(data => data.id !== idtarget);
       setData(dataFilter);
       setDatachange(!datachange)
       console.log(idtarget)
       console.log(dataFilter)
    }
    const handleUpdate= ()=>{
        const targetIndex = data.findIndex((data => data.id === idtarget ));
        data[targetIndex].archived = true;
        setDatachange(!datachange)
        console.log('after',data);
   
    }
    useEffect(()=>{
        
    },[handleDelete,handleUpdate,data,setDatachange])
    if(arsip){
        return(
        <div className="card-btn">
            <button className='btn-dlt' onClick={(e) => handleDelete()}>Hapus</button>
            <button className='btn-arsp' onClick={(e) => handleUpdate()}>Unarsip</button>
        </div>
        )
    }
    return(
        <div className="card-btn">
                <button className='btn-dlt' onClick={(e) => handleDelete()}>Hapus</button>
                <button className='btn-arsp' onClick={(e) => handleUpdate()}>Arsip</button>
        </div>
    )
}
export default function Note(props){
    const {_id,title,body,archived,date} = props;
    
    return(
        <div className="card-note">
            <div className='card-info'>
                 <h5>{title}</h5>
                 <h6>{date}</h6>  
            </div>
            <div className='card-content'>
               <p>{body}</p> 
            </div>
            
            <CardButton arsip={archived} idtarget={_id} />
        </div>
    )
}