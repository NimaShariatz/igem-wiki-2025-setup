import { Outlet, Link } from "react-router-dom";



function PopupLink() {
    return (
        <>
            <Link to="/">tooltip link</Link>

            <Outlet/>
        </>
    )

}
export default PopupLink