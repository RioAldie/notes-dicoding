import './bar.css';

export default function Bar(props){
    const {content, setContent} = props;

    return(
        <div className="box-bar">
            <button className="btn-reg" onClick={(e)=> setContent('regular')}>Reguler Notes</button>
            <button className="btn-ars" onClick={(e)=> setContent('arsip')}>Arsip Notes</button>
            <div>
                <input className='search' type="text" placeholder='cari' />
            </div>
        </div>
    )
}