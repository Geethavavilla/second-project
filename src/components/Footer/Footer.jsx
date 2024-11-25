import { BiSolidContact } from "react-icons/bi";
import { BsFacebook, BsInfoCircleFill, BsInstagram, BsQuestionCircleFill, BsTwitterX } from "react-icons/bs";
import hub from "../../assets/hub.jpeg"
export function Footer() {
    return (
        <>
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

        </>
    )
}