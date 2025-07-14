import React from 'react'
import PlantItem from './PlantItem';

function PlantList({plants}) {
  return (
    <div>
        <h2>Garden Plants</h2>
        {/* conditional rendering  */}
        {plants.length > 0 ? (
            <ul>
                {plants.map((plant) => (
                    <PlantItem key={plant.id} name={plant.name} />
                ))}
            </ul>
        ) : (
            <p>No plants yet!</p>
        )}
    </div>
  )
}

export default PlantList;