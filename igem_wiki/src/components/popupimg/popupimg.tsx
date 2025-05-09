import { useState } from "react";//for popup
import "./popupimg.css"




interface popupimg_input{
    our_img: string;
    optional_caption?: string;// optional
    optional_number?: number;/// optional
}



function PopupImg({ our_img, optional_number, optional_caption }:popupimg_input) {

    const [isExpanded, setIsExpanded] = useState(false);// state tracker for a the component

    const toggleExpansion = () =>{
        setIsExpanded(!isExpanded);//change the state to the opposite of whatever it is
    }




    return (
        <>
            <div className="popup_img_container" onClick={toggleExpansion}>{/* in a div so when hovered on the img grows */}
                <img 
                    src={our_img}
                    className="popup_img"
                    alt="Nigel Mansell"
                />
            </div>
            {/* Only render the paragraph if either optional_number or optional_caption exists */}
            {(optional_number !== undefined || optional_caption !== undefined) && (
                <p>
                    {/* Only render the Fig number if optional_number exists */}
                    {optional_number !== undefined && optional_caption!==undefined && <b>Fig {optional_number}|</b>}
                    {/* Show caption if it exists */}
                    {optional_caption !== undefined && ` ${optional_caption}`}
                </p>
            )}





            {isExpanded && (//so if isExpanded is true... do popup
            
                <div className="popup_overlay" onClick={toggleExpansion}>
                    <div className="popup_content">
                        <img src={our_img} className="popup_expanded" />
                    </div>
                </div>
            
            )}





        </>
    )

}
export default PopupImg