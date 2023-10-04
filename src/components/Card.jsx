import '../index.css'

export default function Navbar(props){
    let location = props.location.toUpperCase()
    return(
        <div className='card'>
            <div className='card-image-div'>
            <img className='card-image' src={props.img}/>
            </div>
            <div className='card-about'>
                <div className='location-maps'>
                    <h4>{location}</h4>
                    <a href={props.url}>View on Google Maps</a>
                </div>
                <h2 className='title'>{props.title}</h2>
                <h4>{`${props.startdate} - ${props.enddate}`}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}