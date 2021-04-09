import React from "react";

function Filter({onHandle}){
    
    function handleClick(){
        onHandle()
    }


    return(
        <div>
            <button onClick={handleClick}>Filter</button>
        </div>

    )

}

export default Filter;