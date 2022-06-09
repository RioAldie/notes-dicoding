import './note.css';

const CardButton = (props)=>{
    const {arsip} = props;
    
    if(arsip){
        return(
        <div className="card-btn">
            <button className='btn-dlt'>Hapus</button>
            <button className='btn-arsp'>Unarsip</button>
        </div>
        )
    }
    return(
        <div className="card-btn">
                <button className='btn-dlt'>Hapus</button>
                <button className='btn-arsp'>Arsip</button>
        </div>
    )
}
export default function Note(props){
    const {title,body,archived,date} = props;

    return(
        <div className="card-note">
            <div className='card-info'>
                 <h5>{title}</h5>
                 <h6>{date}</h6>  
            </div>
            <div className='card-content'>
               <p>{body}</p> 
            </div>
            
            <CardButton arsip={archived} />
        </div>
    )
}