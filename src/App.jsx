import './index.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.jsx'

export default function App(){
  const cardElement = data.map((card)=>{
    console.log(card)
    return <Card
      key={card.id}
      title={card.title}
      location={card.location}
      url={card.googleMapsUrl}
      startdate = {card.startDate}
      enddate = {card.endDate}
      description = {card.description}
      img = {card.imageUrl}
    />
  })
  return(
    <div>
      <Navbar/>
      {cardElement}
    </div>
  )
}