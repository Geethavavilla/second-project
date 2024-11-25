import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs"
import logo from "../../assets/life_style logo.webp"
import { Link } from "react-router-dom"



export function Header() {
    return (
        <>
            <div className="main">
                <Link to="/home"><img src={logo} alt="" className="img-wth"></img></Link>
                <div className="list-top">
                    <ul className="list">
                        <Link to="/fashion" className="sub-list"><li >FASHION</li></Link>
                        <Link to="/food" className="sub-list"><li>FOOD</li></Link>
                        <Link to="/travel" className="sub-list"><li >TRAVEL</li></Link>
                        <Link to="/study" className="sub-list"><li >EDUCATION</li></Link>
                        <Link to="/location" className="sub-list"><li>LOCATION</li></Link>
                        <Link to="/location" className="sub-list"><li>MAP</li></Link>
                    </ul>
                </div>
                <div className="btn-sides">
                    <button className="btn-border"><b>Contact Us</b></button>
                </div>
                <div className="icon-sides">
                    <BsFacebook className="icon-wth"></BsFacebook>
                    <BsInstagram className="icon-wth"></BsInstagram>
                    <BsTwitterX className="icon-wth"></BsTwitterX>
                </div>
            </div>

        </>
    )
}