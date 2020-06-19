import React,{Component} from "react";
import Image from "../components/image/photo_profil.jpg";

function WhoIAM(){
    return(
        <div>
        <h1>Who I am</h1>
        <img src={Image}/>
        <p>I'm someone who is serious curious and passionned</p>
        </div>
  
    )
}

export default WhoIAM;