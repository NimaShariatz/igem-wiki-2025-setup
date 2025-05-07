import Navbar from "../components/navbar.tsx"
import Footer from "../components/footer.tsx"

import Example_args from "../components/example_args.tsx" //temporary

import {
    mansell
} from "../static/constants.tsx"




function Description() {
    return (
        <>
            <Navbar />
            <p>project Description</p>
            <img src={mansell}  style={{width:"100px", height:"100px"}} />
            <Footer />



            <div style={{height:"100px"}}></div>


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