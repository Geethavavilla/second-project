import { Header } from "../Header/Header"
import travelwlpaper from "../../assets/travel-wl.jpg"
import travelimg from "../../assets/travel-img.avif"
import europe from "../../assets/europe.jpeg"
import asia from "../../assets/asia.jpeg"
import paris from "../../assets/paris.jpeg"
import jarkhand from "../../assets/jharkhand.jpg"
import golden from "../../assets/golden.jpeg"
import china from "../../assets/china.jpg"
import lotus from "../../assets/lotus.jpeg"
import badri from "../../assets/badrinadh.jpeg"
import "./Travel.css"
import { RiFacebookBoxFill, RiGoogleFill, RiTwitterFill } from "react-icons/ri"
import { Footer } from "../Footer/Footer"
export function Travel() {
    return (
        <>
            <Header></Header>
            <div className="travel-main-div">
                <div>
                    <img src={travelwlpaper} alt="" className="trl-img"></img>
                </div>
                <div className="d-flex flex-row img-div">
                    <div>
                        <img src={travelimg} alt="" className="trl-img1"></img>
                    </div>
                    <div className="login-div">
                        <center><h1 className="welcome">Welcome</h1></center>
                        <p className="login-para">Login with email</p>
                        <div className="trl-label">
                            <input type="email" placeholder="Enter your Email" className="trl-label1" ></input><br></br>
                            <input type="password" placeholder="Enter Your password"  className="trl-label1"></input>
                        </div>
                        <p className="password">Forgot password?</p>
                        <center><button className="login-btn">Login</button></center>
                        <p className="or">-----------------or-----------------</p>
                        <p className="continue">continue with..</p>
                        <div className="login-icons">
                            <RiGoogleFill className="icon-wth"></RiGoogleFill>
                            <RiFacebookBoxFill className="icon-wth"></RiFacebookBoxFill>
                            <RiTwitterFill className="icon-wth"></RiTwitterFill>
                        </div>
                    </div>
                </div>
                <h1 className="world">Explore The World</h1>
                <div className="d-flex flex-row trl-head">
                    <div  className="img-btw">
                        <img src={europe} alt="" className="travel-imgs"></img><br></br>
                        <center><h2 className="img-heading">EUROPE</h2></center>
                    </div>
                    <div  className="img-btw">
                        <img src={asia} alt="" className="travel-imgs"></img><br></br>
                        <center><h2 className="img-heading">ASIA</h2></center>
                    </div>
                    <div  className="img-btw">
                        <img src={paris} alt="" className="travel-imgs"></img><br></br>
                        <center><h2 className="img-heading">PARIS</h2></center>
                    </div>
                    <div  className="img-btw">
                        <img src={jarkhand} alt="" className="travel-imgs"></img><br></br>
                        <center><h2 className="img-heading">MALDIVES</h2></center>
                    </div>
                </div>
                <h1 className="world">Temple Treasures</h1>
                <div className="d-flex flex-row trl-head">
                    <div className="img-btw">
                        <img src={golden} alt="" className="travel-imgs"></img><br></br>
                        <center><h2 className="img-heading">Golden Temple</h2></center>
                    </div>
                    <div className="img-btw">
                        <img src={china} alt="" className="travel-imgs"></img><br></br>
                        <center><h2 className="img-heading">Budha Temple</h2></center>
                    </div>
                    <div className="img-btw">
                        <img src={lotus} alt="" className="travel-imgs"></img><br></br>
                        <center><h2 className="img-heading">Lotus Temple</h2></center>
                    </div>
                    <div className="img-btw">
                        <img src={badri} alt="" className="travel-imgs"></img><br></br>
                        <center><h2 className="img-heading">Badrinath Temple</h2></center>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}