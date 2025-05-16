import { useState } from "react";//for popup
import "./popupimg.css"




interface popupimg_input{
    our_img: string;
    alt_text: string;
    optional_caption?: string;// optional
    optional_number?: number;/// optional
}



function PopupImg({ our_img, alt_text, optional_number, optional_caption }:popupimg_input) {

    const [isExpanded, setIsExpanded] = useState(false);// state tracker for a the component

    const toggleExpansion = () =>{
        setIsExpanded(!isExpanded);//change the state to the opposite of whatever it is
    }



    //the following sorts out download image logic

    const handle_content_click = (e: React.MouseEvent) => {// this makes it when whatever is clicked with this onClick in it, the overlay doesnt close!!
        e.stopPropagation();//STOP propogation. useful tool.
    }

    const download_image = (e: React.MouseEvent) => {
        e.stopPropagation();

        const link = document.createElement('a');
        link.href = our_img;
        //console.log(our_img)
        const filename = our_img.split('/').pop() || 'downloaded-image';// gets the filename
        link.download = filename
        //console.log(filename)

        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link);

    }


    //the following sorts out download image logic



    return (
        <>
            <div className="popup_img_container" onClick={toggleExpansion}>{/* in a div so when hovered on the img grows */}
                <img 
                    src={our_img}
                    className="popup_img"
                    alt={alt_text}
                />
            </div>
            {/* Only render the paragraph if either optional_number or optional_caption exists */}
            {(optional_number !== undefined || optional_caption !== undefined) && (
                <p className="image_optional_text">
                    {/* Only render the Fig number if optional_number exists */}
                    {optional_number !== undefined && optional_caption!==undefined && <b>Fig {optional_number}|</b>}
                    {/* Show caption if it exists */}
                    {optional_caption !== undefined && ` ${optional_caption}`}
                </p>
            )}





            {isExpanded && (//so if isExpanded is true... do popup
            
                <div className="popup_overlay" onClick={toggleExpansion}>
                    <div className="popup_content" onClick={handle_content_click}>
                        <img src={our_img} className="popup_expanded" />
                    </div>

                    <div className="popup_icons_set" onClick={handle_content_click}>
                        <button className="popup_download_button" onClick={download_image}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
	                            <path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 
                                5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 
                                3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 
                                15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z" />
                            </svg>
                        </button>


                        <button className="popup_exit_button" onClick={toggleExpansion}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z" />
                                </g>
                            </svg>
                        </button>


                    </div>
                    
                
                </div>
            
            )}





        </>
    )

}
export default PopupImg