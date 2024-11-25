import { Header } from "../Header/Header"
import studylogo from "../../assets/education logo.webp"
import studywlpaper from "../../assets/std1.avif"
import ai from "../../assets/ai.webp"
import ml from "../../assets/ml.jpg"
import bi from "../../assets/bi.png"
import azure from "../../assets/azure.jpeg"
import python from "../../assets/python.webp"
import java from "../../assets/java.png"
import ldr from "../../assets/leadership.jpg"
import c from "../../assets/c.png"
import register from "../../assets/register.jpg"
import "./Study.css"
import { Footer } from "../Footer/Footer"
export function Study() {
    return (
        <>
            <Header></Header>
            <div className="study-main-div">
                <div className="menu-bar">
                    <div>
                        <img src={studylogo} alt="" className="study-logo"></img>
                    </div>
                    <div className="about">
                        <h4>About us</h4>
                    </div>
                    <div className="select">
                        <select name="what do you want to learn?" className="select1">
                            <option>"what do you want to learn?"</option>
                            <option>Artificial Intelligence</option>
                            <option>Data Analytics</option>
                            <option>Python</option>
                            <option>Devops</option>
                            <option>Azure</option>
                            <option>Machine Learning</option>
                            <option>Power BI</option>
                        </select>
                    </div>
                </div>
                <div className="parent3">
                    <div>
                        <img src={studywlpaper} alt="" className="study-img"></img>
                    </div>
                    <div className="child3">
                        <h1 className="study-heading">Bring your <br></br>goals into<br></br>focus</h1>
                        <input type="text" placeholder="search our courses" className="search-bar"></input><button className="search-btn">SEARCH</button>
                    </div>
                </div>
                <h1 className="popular">Popular Topics</h1>
                <div className="img-topics">
                    <div className="img-border">
                        <center><img src={ai} alt="" className="img"></img></center>
                        <h5 className="ai-heading">Artificial Intelligence</h5>
                    </div>
                    <div className="img-border">
                        <center><img src={ml} alt="" className="img"></img></center>
                        <h5 className="ai-heading">Machine Learning</h5>
                    </div>
                    <div className="img-border">
                    <center><img src={bi} alt="" className="img"></img></center>
                        <h5 className="ai-heading1">Power BI</h5>
                    </div>
                    <div className="img-border">
                    <center><img src={azure} alt="" className="img"></img></center>
                        <h5 className="ai-heading1">Azure</h5>
                    </div>
                </div>
                <h1 className="popular">Programming Languages</h1>
                <div className="img-topics">
                    <div className="img-border">
                        <center><img src={python} alt="" className="img"></img></center>
                        <h5 className="ai-heading1">Python</h5>
                    </div>
                    <div className="img-border">
                        <center><img src={java} alt="" className="img"></img></center>
                        <h5 className="ai-heading1">Java</h5>
                    </div>
                    <div className="img-border">
                    <center><img src={ldr} alt="" className="img"></img></center>
                        <h5 className="ai-heading1">Ruby</h5>
                    </div>
                    <div className="img-border">
                    <center><img src={c} alt="" className="img"></img></center>
                        <h5 className="ai-heading1">C Language</h5>
                    </div>
                </div>
                <div className="parent4">
                        <div>
                            <img src={register} alt="" className="reg-img"></img>
                        </div>
                        <div className="child4">
                            <h1 className="reg-heading">Register for a free account</h1>
                            <h3 className="sign">Sign up now</h3>
                            <button className="get-btn">Get started</button>
                        </div>
                    </div>
                <Footer></Footer>
            </div>
        </>
    )

}