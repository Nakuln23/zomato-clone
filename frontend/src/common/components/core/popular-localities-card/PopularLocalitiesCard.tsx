import React from 'react'

interface IPopularLocalitiesCard {
  placeName : string
  noOfPlaces : number
}

const PopularLocalitiesCard = ({placeName,noOfPlaces} : IPopularLocalitiesCard ) => {
    return (
        <div>
            {placeName}
            `(${noOfPlaces} places)`
        </div>
    )
}

export default PopularLocalitiesCard
