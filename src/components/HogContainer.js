import React from "react"
import HogTiles from "./HogTiles"

function HogContainer({ hogs }){
    const hogsTiles = hogs.map((hog) => {
        return <HogTiles
        key={ hog.name }
        name={ hog.name }
        image={ hog.image }
        specialty={ hog.speciality }
        weight={ hog.weight }
        greased={ hog.greased }
        highestMedal={ hog["highest medal achieved"]}
        />
      })
    return (
        <div className="ui grid container">
            { hogsTiles }
        </div>
    )
}

export default HogContainer