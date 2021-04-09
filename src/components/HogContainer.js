import React, {useState} from "react"
import HogTiles from "./HogTiles"
import Filter from "./Filter"
import Sort from "./Sort"

function HogContainer({ hogs }){
    const [filter, setFilter] = useState(false)
    const [sort, setSort] = useState("None")

    function handleFilter(){
        setFilter(!filter)
    }

    function handleSort(sorter) {
        setSort(sorter) 
    }

    let filteredArray = [...hogs]


    if(filter){
        filteredArray = filteredArray.filter((hog) => {
            console.log(hog.greased)
            return hog.greased
        })
    }

    let sortedArray = [...filteredArray]

    if(sort==="Name"){
        sortedArray = sortedArray.sort((hog1, hog2) => {
            return hog1.name.localeCompare(hog2.name)
        })
    }

    if(sort==="Weight"){
        sortedArray = sortedArray.sort((hog1, hog2) => {
            return hog1.weight - hog2.weight 
        })
    }

    //console.log(sortedArray)

    const hogsTiles = sortedArray.map((hog) => {
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
            <Sort onSort={ handleSort }/>
            { hogsTiles }
        </div>
    )
}

export default HogContainer