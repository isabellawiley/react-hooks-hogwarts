import React from 'react'

function Sort({ onSort }){

    function handleChange(evt){
        //console.log(evt.target.value)
        onSort(evt.target.value)
    }

    return(
        <select onChange={handleChange}>
            <option value="None">No Sort</option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
        </select>
    )
}

export default Sort