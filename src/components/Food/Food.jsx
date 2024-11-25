import { Header } from "../Header/Header"
import fdimg from "../../assets/fd-walpaper.jpg"
import biryani from "../../assets/biryani.webp"
import biryani1 from "../../assets/biryani1.jpg"
import biryani2 from "../../assets/biryani2.jpeg"
import chapati from "../../assets/chapati.webp"
import chapati1 from "../../assets/chapati1.jpeg"
import chapati2 from "../../assets/chapati2.jpeg"
import chicken from "../../assets/chicken.jpeg"
import paneer from "../../assets/paneer.png"
import fry from "../../assets/fry.jpeg"
import "./Food.css"
import { RiStarFill, RiStarHalfFill } from "react-icons/ri"
import { Footer } from "../Footer/Footer"
export function Food() {
    return (
        <>
            <Header></Header>
            <div className="fd-main-div">
                <div className="parent2">
                    <div>
                        <img src={fdimg} alt="" className="fdimg-sides"></img>
                    </div>
                    <div className="child2">
                        <h1 className="fd-heading">Food For The Soul:</h1>
                        <p className="fd-para">"Food is a universal language, bridging cultures and cuisines, and igniting emotions, memories, and sensations with every bite, flavor, and aroma,<br></br> making it a true delight for the senses"Food is a culinary journey that takes us on a path of discovery, exploring flavors, textures, and aromas are<br></br> that evoke emotions and create memories. With every bite, we savor not just the taste, but the culture, tradition, and love that goes into creating<br></br>a each dish."."</p>
                    </div>
                </div>
                <h1 className="biryani-heading">BIRYANI</h1>
                <div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={biryani1} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Chicken Mandi Biryani:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={biryani} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Chicken Biryani:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={biryani2} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Mushroom Biryani:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="biryani-heading">ROTIES</h1>
                <div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={chapati} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Chapati:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={chapati1} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Pulka:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={chapati2} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Butter-Naan:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="biryani-heading">CURRIES</h1>
                <div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={chicken} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Chicken Curry:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={paneer} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Paneer Curry:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-body1">
                        <div className="d-flex flex-row">
                            <div>
                                <img src={fry} alt="" className="biryani-img"></img>
                            </div>
                            <div className="biryani-data">
                                <h3 className="head">Chicken Fry:</h3>
                                <p className="biryani-para">Biryani, the quintessential queen of Indian cuisine, is a fragrant fusion of flavors, textures, and aromas that tantalizes the taste buds and leaves you craving for more. This majestic dish, made with tender basmati rice, marinated meat or vegetables, and a blend of warming spices, is a masterclass in culinary art, with each spoonful a perfect harmony of flavors, a symphony of spices, and a celebration of the senses."</p>
                                <b>$450.00</b>
                                <div className="d-flex flex-row">
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarFill style={{ color: "orange" }}></RiStarFill>
                                    <RiStarHalfFill style={{ color: "orange" }}></RiStarHalfFill><br></br>
                                </div>
                                <button className="card-btn1">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}