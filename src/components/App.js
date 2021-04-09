import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import HideHogs from "./HideHogs";
import HogForm from "./HogForm";

//console.log(hogs)

function App() {
  const [hidden, setHidden] = useState(false)
  const [addHogs, setAddHogs] = useState(hogs)

  function handleData (formData) {
    console.log(formData)
    setAddHogs([...addHogs, formData])
    return
  }

  function handleHide(){
    console.log('hi')
    setHidden(!hidden)
  }

  return (
    <div className="App">
      <Nav />
      <HideHogs onHide={ handleHide }/>
      <HogForm onDataSent={ handleData }/>
      { hidden ? null : <HogContainer hogs={ addHogs }/> }
    </div>
  );
}

export default App;
