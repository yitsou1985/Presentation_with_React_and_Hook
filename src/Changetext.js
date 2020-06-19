import React,{useState} from "react";
import "./Changetext.css";


function Changetext(){
    const[text,setText]=useState("Hello")

    return(
        <div className="COLOR">
        <h3 className="coo" >{text}</h3>
        <button onClick={()=>setText("every")}className="Color">every</button><br/><br/>
        <button onClick={()=>setText("body")}className="Coloor">body</button><br/><br/>
        <button onClick={()=>setText("Hello")}className="Coloor">Hello</button>
        </div>
    )
}

export default Changetext; 