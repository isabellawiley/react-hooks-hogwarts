import React, {useState} from "react"
import HogDetails from "./HogDetails"

function HogTiles({ name, image, specialty, weight, greased, highestMedal}) {

    const [click, setClick] = useState(false);
    function HandleClick(){
        setClick((click) => click=!click)
    }

    const hideDetails = click ? <HogDetails specialty={specialty} weight={weight} greased={greased} highestMedal={highestMedal}/> : null

    return (
    <div className="ui eight wide column">
        <div onClick={HandleClick} className="pigTile">
            <h3 name={ name }>{ name }</h3>
            <img src={ image } alt={ name }/>
            {hideDetails}
       </div>
    </div>
    )
}

export default HogTiles