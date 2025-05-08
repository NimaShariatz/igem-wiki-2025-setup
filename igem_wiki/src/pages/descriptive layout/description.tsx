import Navbar from "../../components/navbar.tsx"
import Footer from "../../components/footer.tsx"
import PopupLink from "../../components/popuplink.tsx"
import PopupImg from "../../components/popupimg.tsx"
import Carousel from "../../components/carousel.tsx"
import ProgressTracker from "../../components/progressTracker.tsx"
import Accordion from "../../components/accordion.tsx"

import "./descriptive.css"

import Example_args from "../../components/example_args.tsx" //temporary
import { mansell } from "../../static/constants.tsx"






function Description() {
    return (
        <>
            <Navbar />
            
            <br/>
            <br/>

            <div className="content_wrapper">

                <ProgressTracker/>

                <div className="descriptive_content">
                    <br/>
                    <br/>
                    <p>Carousel Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illo repellendus quia reiciendis perferendis! 
                        Iste minus sapiente soluta asperiores sint eveniet officiis quae, qui porro magni amet nostrum necessitatibus cupiditate. 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officiis vel cumque. Fuga voluptates neque dicta velit ea! 
                        Omnis assumenda delectus, praesentium qui nam fugit impedit. Ipsum atque cupiditate nesciunt? Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Tenetur temporibus nesciunt, odit quo consectetur laboriosam sit dignissimos iusto voluptatum 
                        sequi cumque, soluta ratione? Atque officiis dolor, recusandae possimus eligendi maiores? Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Blanditiis tempora alias soluta, dolor doloremque, rem dicta modi temporibus 
                        quasi nesciunt deleniti dolorum  dolores amet reiciendis 
                        possimus eaque voluptas adipisci sapiente! <PopupLink/>
                    </p>
                    
                    <br/>
                    <br/>
                    <PopupImg our_img={mansell} optional_number={4} optional_caption={"some caption for image"} />
                    <br/>
                    <br/>
                    <Accordion/>
                    <br/>
                    <br/>
                    <Carousel/>
                    <br/>
                    <br/>
                </div>

            </div>
            
            <Footer />



            {/* 
            
            <Example_args 
            text="image link" 
            count={42}
            optional_notempty_number={100} // Will be displayed
            />

            <Example_args 
            text="image link" 
            count={42}
            // No optional_notempty_number provided, so it won't be displayed
            />
            */}
        </>
    )
}

export default Description