
import Form from '../form/form';
import Notes from '../notes/notes';
import './body.css';

export default function Body(){
    return(
        <>
            <section className="body">
            <Form/>
            <Notes/>
            </section>
        </>
    )
}