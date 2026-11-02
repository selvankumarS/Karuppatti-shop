import { Navigate, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer =() => {
   const Navigate = useNavigate()
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-section">
          <h2><span className="sk">SK</span> Karuppatti</h2>
          <p>
            Natural & traditional Karuppatti products.
            Healthy choice for your family.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => Navigate ("/")}>Home</li>
            <li onClick={ () => Navigate ("/about")}>About Us</li>
            <li onClick={ () => Navigate ("/product")}>Products</li>
            <li onClick={ () => Navigate ('/contact')}>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Chennai, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ skkaruppatti@gmail.com</p>
        </div>

      </div>


      <div className="footer-bottom">
        <p>© 2026 SK Karuppatti. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;