import './form.css';

export default function Form(){
    return(
        <>
            <div className="form-container">
                
                <form action="">
                <h3>Make a Note </h3>
                    <input type="text"className="input-title" placeholder="Title..."  />
                    <textarea name="content" id="content" className='input-content' cols="30" rows="10" placeholder="Content..."/>
                    <button className="btn-save">Save Note</button>
                </form>
            </div>
        </>
    )
}