import React from "react";
import "./Footer.css";
import footer_logo from "../images/logo_big.png";
import instagram_icon from "../images/instagram_icon.png";
import pintester_icon from "../images/pintester_icon.png";
import whatsapp_icon from "../images/whatsapp_icon.png";
import { Link } from "react-router-dom";
// import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <div className="footer_content">
        <div className="footer_about">
          <h1 className="footer_about-logo">HSangShop</h1>
          <ul>
            <li>Address: 60 Da Son, Hoa Khanh Nam, Lien Chieu, Da Nang</li>
            <li>Phone: 0896 234 384</li>
            <li>Email: hoanngsanng1902@gmail.com</li>
          </ul>
        </div>
        <div className="footer_widget">
          <h1>SHOP</h1>
          <ul>
            <li>
              <Link to="#">Contact</Link>
            </li>

            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Products</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="#">Account Information</Link>
            </li>
            <li>
              <Link to="#">Favorites List</Link>
            </li>
          </ul>
        </div>
        <div className="footer_widget">
          <h1>Promotions & Offers</h1>
          <p>Subcribe to receive information here</p>
          <form action="#">
            <div className="input-group">
              <input type="text" placeholder="Email" />
              <button type="Submit" className="button-submit">
                Subcribe
              </button>
            </div>
            <div className="footer_widget-social">
              {/* <div>
                                <AiOutlineFacebook />
                            </div>
                            <div>
                                <AiOutlineInstagram />
                            </div>
                            <div>
                                <AiOutlineLinkedin />
                            </div> */}
              <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
              </div>
              <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
              </div>
              <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Adress: 32 Chon Tam 5,Hoa Minh,Lien Chieu,Da Nang.</p>
            </div> */}
    </div>
  );
};

export default Footer;
