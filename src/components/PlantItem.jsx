import React, {useState} from 'react';


function PlantItem({ name, type, description, image, isIndoor }) {
  const [likes, setLikes] = useState(0);
  
  function handleLikeClick() {
    setLikes(likes + 1);
  }
  
  return (
    <div className='plant-card'>
        <h3>{name}</h3>
        <img src={image} alt={name} width="200" />
        <p><strong>Type:</strong> {type}</p>
        <p>{description}</p>

        {/* conditional rendering for isIndoor */}
        {
            isIndoor
            ? <span style={{backgroundColor: "lightgreen", padding: "4px", borderRadius: "4px"}}>Indoor Plant</span>
            : <span style={{backgroundColor: "lightyellow", padding: "4px", borderRadius: "4px"}}>Outdoor Plant</span>
        }
        <button onClick={handleLikeClick}>{likes}</button>
        
    </div>
  )
}

export default PlantItem;