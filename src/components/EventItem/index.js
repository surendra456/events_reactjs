// Write your code here
import './index.css'

const EventItem = props => {
  const {item, setActive, isActive} = props
  const {id, imageUrl, name, location} = item
  const className = isActive ? 'image image-border' : 'image'

  const imageClick = () => {
    setActive(id)
  }
  return (
    <li className="item">
      <button className="button" type="button" onClick={imageClick}>
        <img src={imageUrl} alt="event" className={className} />
      </button>
      <p className="head">{name}</p>
      <p className="loco">{location}</p>
    </li>
  )
}

export default EventItem
