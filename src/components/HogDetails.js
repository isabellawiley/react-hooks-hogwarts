import React from "react"


function HogDetails({specialty, weight, greased, highestMedal}){
    return(
        <div>
            <p name="specialty">{ specialty }</p>
            <p name="weight">{ weight }</p>
            <p name="greased">{ greased }</p>
            <p name="highestMedal">{ highestMedal }</p>
        </div>
    )
}

export default HogDetails;