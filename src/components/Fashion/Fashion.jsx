import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import "./Fashion.css"
import fshimg from "../../assets/fshimg.jpeg"
import fsh1 from "../../assets/fsh4.jpeg"
import fsh2 from "../../assets/fsh2.jpeg"
import fsh3 from "../../assets/fsh3.jpeg"
import card1 from "../../assets/card2.jpg"
import card2 from "../../assets/women4.jpeg"
import women1 from "../../assets/women3.jpeg"
import women2 from "../../assets/women2.jpeg"
import fsh5 from "../../assets/fsh5.webp"
import fsh6 from "../../assets/fsh6.webp"
import men1 from "../../assets/men1.webp"
import men2 from "../../assets/men2.jpg"
import men3 from "../../assets/men3.jpeg"
import men4 from "../../assets/men4.avif"
import { RiStarFill, RiStarHalfFill } from "react-icons/ri"

export function Fashion() {
    return (
        <>
            <Header></Header>
            <div className="fsh-main-div">
                <div className="parent1">
                    <div>
                        <img src={fshimg} alt="" className="fsh-img"></img>
                    </div>
                    <div className="child1">
                        <h1 className="fsh-sides">FASHION FRENZY:</h1>
                        <ul className="fsh-list">
                            <li className="hov">Womens wear</li>
                            <li className="hov">Mens Wear</li>
                            <li className="hov">Fooot wear</li>
                        </ul>
                        <div className="btn-sides">
                            <button className="fsh-btn">Shop </button>
                        </div>
                    </div>
                </div>
                <div className="sec-main">
                    <div>
                        <img src={fsh1} alt="" className="fsh1-img"></img>
                        <h4 className="fsh1-heading hov">World-class designer</h4>
                        <p className="p-hov" >"From the intricate embroidery of Indian saris to elegant silhouettes of European gowns"</p>
                    </div>
                    <div>
                        <img src={fsh2} alt="" className="fsh1-img"></img>
                        <h4 className="fsh1-heading hov">Hand-made dresses</h4>
                        <p className="p-hov" >"From the intricate embroidery of Indian saris to elegant silhouettes of European gowns"</p>
                    </div>
                    <div>
                        <img src={fsh3} alt="" className="fsh1-img"></img>
                        <h4 className="fsh1-heading hov">World-wide store</h4>
                        <p className="p-hov" >"From the intricate embroidery of Indian saris to elegant silhouettes of European gowns"</p>
                    </div>
                </div>
                <div className="popular-heading">
                    <center><h1 style={{ color: "orange" }}>Popular Products</h1></center>
                    <center><p>"From trendy statement pieces to timeless essentials, our collection of popular products features the most popular products"</p></center>
                    <div className="fsh-flex popular">
                        <div>
                            <img src={fsh5} alt="" className="fsh5"></img>
                        </div>
                        <div>
                            <img src={fsh6} alt="" className="fsh5"></img>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="card-heading">Womens Wear</h1>
                    <div className="d-flex flex-row">
                        <div className="card card-body">
                            <div><img src={card2} alt="" className="card-img"></img></div>
                            <p style={{ color: "skyblue" }}>Womens long sleeve body fit T-shirt with... </p>
                            <b>$1299.00</b>
                            <p>Terractive</p>
                            <div className="d-flex flex-row">
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill>
                            </div>
                            <p>Free Delivery</p>
                            <button className="card-btn">Add to Cart</button>
                        </div>
                        <div className="card card-body">
                            <div><img src={card1} alt="" className="card-img"></img></div>
                            <p style={{ color: "skyblue" }}>Womens long sleeve body fit T-shirt with... </p>
                            <b>$1299.00</b>
                            <p>Terractive</p>
                            <div className="d-flex flex-row">
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill>
                            </div>
                            <p>Free Delivery</p>
                            <button className="card-btn">Add to Cart</button>
                        </div>
                        <div className="card card-body">
                            <div><img src={women1} alt="" className="card-img"></img></div>
                            <p style={{ color: "skyblue" }}>Womens long sleeve body fit T-shirt with... </p>
                            <b>$1299.00</b>
                            <p>Terractive</p>
                            <div className="d-flex flex-row">
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill>
                            </div>
                            <p>Free Delivery</p>
                            <button className="card-btn">Add to Cart</button>
                        </div>
                        <div className="card card-body">
                            <div><img src={women2} alt="" className="card-img"></img></div>
                            <p style={{ color: "skyblue" }}>Womens long sleeve body fit T-shirt with... </p>
                            <b>$1299.00</b>
                            <p>Terractive</p>
                            <div className="d-flex flex-row">
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill>
                            </div>
                            <p>Free Delivery</p>
                            <button className="card-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>

                         <h1 className="card-heading">Mens Wear</h1>
                        <div className="d-flex flex-row">
                            <div className="card card-body">
                                <div><img src={men1} alt="" className="card-img"></img></div>
                                <p style={{ color: "skyblue" }}>Womens long sleeve body fit T-shirt with... </p>
                                <b>$1299.00</b>
                                <p>Terractive</p>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill>
                                </div>
                                <p>Free Delivery</p>
                                <button className="card-btn">Add to Cart</button>
                            </div>
                            <div className="card card-body">
                                <div><img src={men2} alt="" className="card-img"></img></div>
                                <p style={{ color: "skyblue" }}>Womens long sleeve body fit T-shirt with... </p>
                                <b>$1299.00</b>
                                <p>Terractive</p>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill>
                                </div>
                                <p>Free Delivery</p>
                                <button className="card-btn">Add to Cart</button>
                            </div>
                            <div className="card card-body">
                                <div><img src={men3} alt="" className="card-img"></img></div>
                                <p style={{ color: "skyblue" }}>Womens long sleeve body fit T-shirt with... </p>
                                <b>$1299.00</b>
                                <p>Terractive</p>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill>
                                </div>
                                <p>Free Delivery</p>
                                <button className="card-btn">Add to Cart</button>
                            </div>
                            <div className="card card-body">
                                <div><img src={men4} alt="" className="card-img"></img></div>
                                <p style={{ color: "skyblue" }}>Womens long sleeve body fit T-shirt with... </p>
                                <b>$1299.00</b>
                                <p>Terractive</p>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill>
                                </div>
                                <p>Free Delivery</p>
                                <button className="card-btn">Add to Cart</button>
                            </div>
                        </div> 
                   <Footer></Footer>
                
            </div>

        </>
    )
}

