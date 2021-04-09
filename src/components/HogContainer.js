import React, {useState} from "react"
import HogTiles from "./HogTiles"
import Filter from "./Filter"

function HogContainer({ hogs }){

    let filteredArray = [...hogs]

    const [filter, setFilter] = useState(false)

    if(filter){
        filteredArray = filteredArray.filter((hog) => {
            console.log(hog.greased)
            return hog.greased
        })
    }

    function handleFilter(){
        setFilter(!filter)
        
    }

    const hogsTiles = filteredArray.map((hog) => {
        return <HogTiles
        key={ hog.name }
        name={ hog.name }
        image={ hog.image }
        specialty={ hog.specialty }
        weight={ hog.weight }
        greased={ `${hog.greased}` }
        highestMedal={ hog["highest medal achieved"]}
        />
      })

    

    return (
        <div className="ui grid container">
            <Filter onHandle={handleFilter}/>
            { hogsTiles }
        </div>
    )
}

export default HogContainer