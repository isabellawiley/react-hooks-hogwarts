import React from "react"

function HideHogs({ onHide }){
    
    function handleClick(){
        console.log('hello')
        onHide()
    }

    return (
        <div>
            <button onClick={ handleClick }>HideDemHoggos</button>
        </div>
    )
}

export default HideHogs