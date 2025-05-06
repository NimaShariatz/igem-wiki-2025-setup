import Navbar from "../components/navbar.tsx"
import Footer from "../components/footer.tsx"

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
        </>
    )
}

export default Description