
import { useContext, useEffect, useState } from 'react';
import { ChangeCtx } from '../../context/ChangeContext';
import Form from '../form/form';
import Notes from '../notes/notes';
import './body.css';

export default function Body(){
    const {datachange} = useContext(ChangeCtx);
    const [isChange, setIsChange] = useState(datachange);
    useEffect(()=>{
        setIsChange(isChange);
    },[isChange,datachange])
    return(
        <>
            <section className="body">
            <Form />
            <Notes/>
            </section>
        </>
    )
}