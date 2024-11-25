import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import "./Location.css"
export function Location() {
    return (
        <>
            <Header></Header>
            <div className="location-main-div">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15221.546962651935!2d78.4001745!3d17.4890425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916c804f5a83%3A0xa43b26601de149d5!2sNeosys%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1724760896401!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Footer></Footer>

            </div>
        </>
    )
}