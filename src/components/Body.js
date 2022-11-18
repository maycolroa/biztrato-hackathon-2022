import React from "react";
import { Bodycontainer, Bodyuser,} from "./Body.elements";

const Body = () => {
  return (
    <>
      <Bodycontainer>
        <h1>iniciar seccion</h1>
      </Bodycontainer>
      <Bodyuser>
      <label>usuario</label>
        <input></input>
        <label>clave</label>
        <input></input>
        <button> <a href="/">continuar</a> </button> 
      </Bodyuser>
    </>
  )
}
export default Body;