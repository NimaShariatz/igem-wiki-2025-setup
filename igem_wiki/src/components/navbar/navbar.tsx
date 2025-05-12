import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cursorLocation, setCursorLocation] = useState<number>(-1);
    // if False and isOpen is True, the popup will be on the left of the cursor
    // if True isOpen is True, the popup will be on the right of the cursor
    const [goLeft, setGoLeft] = useState<boolean | null>(null);

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
                <li onMouseEnter={(event)=>{handleMouseEnter(event)}}>
                    <p className="menu-option">Projects</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="projects-popup popup-content">
                            <div className="menu-text-section">
                                <h1>Projects</h1>
                            </div>
                            <div className="menu-options-section">
                                <Link to="/">Project Description</Link>
                                <Link to="/">Engineering Success</Link>
                                <Link to="/">Future Directions</Link>
                                <Link to="/">Contribution</Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={(event)=>{handleMouseEnter(event)}}>
                    <p className="menu-option">Wet Lab</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="wet-popup popup-content">
                            <div className="menu-text-section">
                                <h1>Wet Lab</h1>
                            </div>
                            <div className="menu-options-section">
                                <Link to="/">Notebook</Link>
                                <Link to="/">Experiments & Results</Link>
                                <Link to="/">Standard Operating Procedures</Link>
                                <Link to="/">Safety</Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={(event)=>{handleMouseEnter(event)}}>
                    <p className="menu-option">Dry Lab</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="dry-popup popup-content">
                            <div className="menu-text-section">
                                <h1>Dry Lab</h1>
                            </div>
                            <div className="menu-options-section">
                                <Link to="/">Modeling</Link>
                                <Link to="/">Parts</Link>
                                <Link to="/">Software</Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={(event)=>{handleMouseEnter(event)}}>
                    <p className="menu-option">Human Practices</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="human-popup popup-content">
                            <div className="menu-text-section">
                                <h1>Human Practices</h1>
                            </div>
                            <div className="menu-options-section">
                                <Link to="/">Integrated Human Practices</Link>
                                <Link to="/">Education</Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={(event)=>{handleMouseEnter(event)}}>
                    <p className="menu-option">Team</p>
                    <div className={`popup ${isOpen ? (goLeft === true ? "show-right" : (goLeft === false ? "show-left" : "")) : ""}`}>
                        <div className="team-popup popup-content">
                            <div className="menu-text-section">
                                <h1>Team</h1>
                            </div>
                            <div className="menu-options-section">
                                <Link to="/">Members</Link>
                                <Link to="/">Attributions</Link>
                                <Link to="/">Sponsors</Link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
    
}
export default Navbar