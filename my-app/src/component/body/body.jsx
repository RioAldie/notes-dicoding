
import { useEffect, useState } from 'react';
import Form from '../form/form';
import Notes from '../notes/notes';
import './body.css';

export default function Body(){
    const [datachange, setDatachange] = useState(false);
    useEffect(()=>{
        setDatachange(datachange);
    },[datachange])
    return(
        <>
            <section className="body">
            <Form datachange={datachange} setDatachange={setDatachange}/>
            <Notes/>
            </section>
        </>
    )
}