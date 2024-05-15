import React from "react";
import { useState, useMemo } from "react";

function ExampleComponent(){
    const[isDarkMode ,setDarkMode] = useState(false)

    const theme = useMemo(()=>{
        return{
            backgroundColor : isDarkMode ? "black" : "white" , 
            color : isDarkMode ? "white" : "black"
        }
    },[isDarkMode])
    document.body.style.backgroundColor = theme.backgroundColor
    document.body.style.color = theme.color

    return(
        <>
        <div>
            <center><button onClick={()=> setDarkMode(!isDarkMode)}>
                {isDarkMode ? "Change to Light" : "Change to dark"}
            </button></center>
        <header style={{display:"flex"}}>
            <center>
            <div>
                <img width={"150px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTung2SkGjr4F7F0nU3zQ_MdpEOtPZQkpHCco_icPOFYT_vH_DQq6EUXBo-WFPsk13uSmE&usqp=CAU"></img>
            </div>
            <div style={{marginLeft:"500px"}}>
                <ul style={{display:"flex",padding:"15px", }}>
                    <li style={{listStyle:"none", margin:"10px"}}>Home</li>
                    <li style={{listStyle:"none", margin:"10px"}}>Service</li>
                    <li style={{listStyle:"none", margin:"10px"}}>About</li>
                    <li style={{listStyle:"none", margin:"10px"}}>Blog</li>
                    <li style={{listStyle:"none", margin:"10px"}}>Contact</li>
                </ul>
                </div>

        <p>
        Eyeglasses (U.S), glasses or spectacles (also more rarely cheaters) are pieces of glass or clear plastic, called lenses, that are held in front of a person's eyes by a frame made of metal or plastic. They can be used for many reasons. These include safety, fashion and to correct a person's vision.
        </p>
            
            </center>
        </header>
        
        </div>
        </>
    )
}
export default ExampleComponent