import React,{Component} from "react";
import Counter from "../counter";
import Changetext from "../Changetext";
import Get_time from "../get_time";

 
const MySkill = ()=>{
    return(
        <div>
        <h1>My Skill</h1>
        <Get_time/><br/>
        <Counter/><br/>
        <Changetext/><br/>
        </div>
        


        
    )
}
export default MySkill;