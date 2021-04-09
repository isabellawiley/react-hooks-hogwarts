import React from "react"

function HogTiles({ name, image, specialty, weight, greased, highestMedal}) {
    return (
    <div className="ui eight wide column">
        <div className="pigTile">
            <h3 name={ name }>{ name }</h3>
            <img src={ image } alt={ name }/>
            <div>
                <p name="specialty">{ specialty }</p>
                <p name="weight">{ weight }</p>
                <p name="greased">{ greased }</p>
                <p name="highestMedal">{ highestMedal }</p>
            </div>
       </div>
    </div>
    )
}

export default HogTiles