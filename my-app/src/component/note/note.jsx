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
    const {arsip} = props;

    return(
        <div className="card-note">
            <div className='card-info'>
                 <h5>Judul Catatan</h5>
                 <h6>12/10/2022</h6>  
            </div>
            <div className='card-content'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> 
            </div>
            
            <CardButton arsip={arsip} />
        </div>
    )
}