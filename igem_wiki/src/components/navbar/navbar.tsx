import { useState } from "react";

import "./navbar.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cursorLocation, setCursorLocation] = useState<number>(-1);
    // if False and isOpen is True, the popup will be on the left of the cursor
    // if True isOpen is True, the popup will be on the right of the cursor
    const [goLeft, setGoLeft] = useState<boolean | null>(null);

    console.log("isOpen: ", isOpen)
    console.log("cursorLocation: ", cursorLocation)
    console.log("goLeft: ", goLeft)

    /* 
    This function handles the mouse enter event for the menu options.
    It sets the cursor location and determines if the popup should go left or right.
    */
    function handleMouseEnter(event: React.MouseEvent) {
        if (cursorLocation < 0){
            setCursorLocation(event.screenX)
        }
        else{
            if ((event.screenX > cursorLocation) && isOpen){
                setGoLeft(false);
                setCursorLocation(event.screenX)
            }else if ((event.screenX < cursorLocation) && isOpen){
                setGoLeft(true);
                setCursorLocation(event.screenX)
            }
        }
        
    }
    return(
        <div className="navbar-container">
            <ul onMouseEnter={()=>{setIsOpen(true)}} onMouseLeave={()=>{setIsOpen(false); setGoLeft(null); setCursorLocation(-1)}}>
                <li>
                    <p className="menu-option">Home</p>
                </li>
                <li>
                    <p className="menu-option" onMouseEnter={(event)=>{handleMouseEnter(event)}}>Projects</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="projects-popup">
                            <h1>Projects</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <p className="menu-option" onMouseEnter={(event)=>{handleMouseEnter(event)}}>Wet Lab</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="wet-popup">
                            <h1>Wet Lab</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <p className="menu-option" onMouseEnter={(event)=>{handleMouseEnter(event)}}>Dry Lab</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="dry-popup">
                            <h1>Dry Lab</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <p className="menu-option" onMouseEnter={(event)=>{handleMouseEnter(event)}}>Human Practices</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="human-popup">
                            <h1>Human Practices</h1>
                        </div>
                    </div>
                </li>
                <li>
                    <p className="menu-option" onMouseEnter={(event)=>{handleMouseEnter(event)}}>Team</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="team-popup">
                            <h1>Team</h1>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
    
}
export default Navbar