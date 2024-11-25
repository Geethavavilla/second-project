import "./Menu.css"
import { Link } from "react-router-dom"
import logo from "../../assets/life_style logo.webp"
import img from "../../assets/sideimg.jpg"
import hub from "../../assets/hub.jpeg"
import fashion from "../../assets/fashion.webp"
import food from "../../assets/food.webp"
import travel from "../../assets/travel.jpg"
import study from "../../assets/study.jpg"
import career from "../../assets/career.jpg"
import { BsFacebook, BsInfoCircleFill, BsInstagram, BsQuestionCircleFill, BsTwitterX } from "react-icons/bs"
import { BiSolidContact } from "react-icons/bi"
export function Menu() {
    return (
        <>
            <div >
                <div >
                    <div className="top">
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
                        <div className="right-side" >
                            {/* <div className="parent"> */}
                                <div className="img-sides">
                                    <img src={img} alt="" className="img1-wth"></img>
                                </div >
                                {/* <div className="child">
                                    <h1 className="img-head">LIFE-STYLE LAYERS:</h1>
                                    <p className="img-head1"><span style={{color:"yellow"}}>"Lifestyle Layers"</span> is a vibrant hub where life's moments, memories, and musings converge. Imagine a canvas where every layer reveals a new story, a new passion, or a new perspective. From the latest trends and styles to heartfelt reflections and inspiring stories, our layers weave together to create a rich tapestry of modern living. Join us as we explore the intersections of fashion, beauty, wellness, travel, and culture, and discover how to curate a life that's authentically yours.</p>
                                </div> */}
                            {/* </div> */}
                            <div className="heading-top">
                                <h3 className="hov">LIFE-STYLE HUB:</h3>
                                <p className="content">"<span style={{ color: "red" }}>Welcome to Lifestyle Hub</span>, your ultimate online destination for living your best life! Our platform is designed to inspire, educate, and connect you with like-minded individuals. Explore our comprehensive resources and tools on wellness, personal growth, relationships, home and living, travel, food, style, entertainment, and technology. Join our vibrant community to share ideas, learn from experts, and connect with others who share your passions. At Lifestyle Hub, we empower you to curate a life that reflects your values, interests, and aspirations."</p>
                                <h3 className="hov">INFO:</h3>
                                <p className="content">A Lifestyle Hub is a comprehensive online platform that offers a wide range of resources, tools, and services to help individuals manage and enhance their daily lives. It's a one-stop destination for people to discover, learn, and connect with others who share similar interests and passions.
                                </p>
                            </div>
                            <div className="fashion-single">
                                <div>
                                    <img src={fashion} alt="" className="fashion-img"></img>
                                </div>
                                <div className="text-sides">
                                    <h3 className="hov">FASHION:</h3>
                                    <p className="ltr content">"Unleash your personal style with our fashion section! Stay ahead of the curve with the latest trends, must-have pieces, and expert advice. From runway looks to street style, we've got you covered. Discover new designers, learn about sustainable fashion, and get tips on how to elevate your wardrobe. Whether you're a fashionista or just looking for inspiration, our fashion hub is your ultimate resource for all things style, beauty, and glamour."</p>
                                </div>
                            </div>
                            <div className="fashion-single">
                                <div className="food-text">
                                    <h3 className="hov">FOOD:</h3>
                                    <p className="ltr content">"Savor the flavor with our food section! Explore a world of culinary delights, from recipes and cooking tips to restaurant reviews and foodie trends. Discover new ingredients, learn about different cuisines, and get inspiration for your next meal. Whether you're a food enthusiast, a busy home cook, or a professional chef, our food hub is your go-to destination for all things delicious, nutritious, and mouth-watering."</p>
                                </div>
                                <div>
                                    <img src={food} alt="" className="food-img"></img>
                                </div>
                            </div>
                            <div className="fashion-single">
                                <div>
                                    <img src={travel} alt="" className="travel-img"></img>
                                </div>
                                <div className="text-sides">
                                    <h3 className="hov">TRAVEL:</h3>
                                    <p className="ltr content">"Explore the world with us! Our travel section is your passport to adventure, featuring destination guides, travel tips, and inspiring stories from around the globe. Discover hidden gems, plan your dream trip, and get practical advice on where to stay, what to do, and how to make the most of your journey. Whether you're a seasoned explorer or just starting to plan your next escape, our travel hub is your ultimate resource for wanderlust inspiration and expert advice."</p>
                                </div>
                            </div>
                            <div className="fashion-single">
                                <div className="food-text">
                                    <h3 className="hov">EDUCATION:</h3>
                                    <p className="ltr content">"Unlock your potential with our study section! Empower your learning journey with access to a vast library of resources, including online courses, tutorials, study guides, and expert advice. Stay ahead of the curve with the latest learning trends, tools, and technologies. Whether you're a student, a professional looking to upskill, or simply a curious learner, our study hub is your one-stop-shop for knowledge, inspiration, and academic success."</p>
                                </div>
                                <div>
                                    <img src={study} alt="" className="food-img"></img>
                                </div>
                            </div>
                            <div className="fashion-single">
                                <div>
                                    <img src={career} alt="" className="travel-img"></img>
                                </div>
                                <div className="text-sides">
                                    <h3 className="hov">CAREER DEVELOPMENT:</h3>
                                    <p className="ltr content">"Advance your career with our expert guidance! Our career development section offers valuable resources, insights, and tools to help you navigate the modern workforce. Discover new opportunities, enhance your skills, and stay ahead of industry trends. From resume building and job search strategies to professional networking and leadership development, our career hub is your partner in achieving success and realizing your career aspirations."</p>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "gainsboro" }}>
                                <center><h2 className="contact">Contact Us</h2></center>
                                <div className="label-sides">
                                    <input type="text" placeholder="Name" className="label"></input>
                                    <input type="text" placeholder="Phone" className="label"></input>
                                    <input type="text" placeholder="Email" className="label"></input> <br></br>
                                    <textarea rows="3" cols="75" name="Message" className="text-btn" placeholder="Message"></textarea> <br></br>
                                </div>
                                <center><button className="btn1">Send message</button></center>
                            </div>
                            <div className="footer-display">
                                <div className="col1">
                                    <h2>Get in Touch</h2>
                                    <p>Drop us an email at geethavavilla2003@gmail.com,<br></br>alternatively,here are some useful links.</p>
                                    <div className="footer-box">
                                        <h6><BsInfoCircleFill></BsInfoCircleFill>More info</h6>
                                        <h6><BiSolidContact></BiSolidContact>Contact</h6>
                                        <h6><BsQuestionCircleFill></BsQuestionCircleFill>Frequent Questions</h6>
                                    </div>
                                </div>
                                <div className="col1">
                                    <h4>Shop</h4>
                                    <p>Skin care</p>
                                    <p>Hair care</p>
                                    <p>Exclusive kits</p>
                                    <p>Full range</p>
                                </div>
                                <div className="col1">
                                    <h4>Support</h4>
                                    <p>Contact</p>
                                    <p>FAQ</p>
                                    <p>Privacy & policy</p>
                                    <p>Terms & conditions</p>
                                </div>
                                <div className="col1">
                                    <h4>About</h4>
                                    <p>Our story</p>
                                    <p>Community</p>
                                    <p>Magazine</p>
                                    <p>Research</p>
                                </div>
                                <div className="col1">
                                    <h4>My account</h4>
                                    <p>Register</p>
                                    <p>Login</p>
                                </div>
                                <div className="col1">
                                    <img src={hub} alt="" className="footer-img"></img><br></br>
                                    <BsFacebook className="footer-icon"></BsFacebook>
                                    <BsTwitterX className="footer-icon"></BsTwitterX>
                                    <BsInstagram className="footer-icon"></BsInstagram>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}