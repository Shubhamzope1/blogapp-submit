import React from 'react';
import '../Styles/footer.css';
import { NavLink } from "react-router-dom";


class Footer extends React.Component {

  render() {
    return (
      <div >
        <footer id="foot" className=" container-fluid footer bg-dark  text-white">
          <div className="row">
            <div className="col-6 col-lg-4 high" >
              <h3>Nav</h3>
              <ul>
                <li id="footer li"><NavLink className="navigao" to="/" style={{ marginLeft: "-3px", textDecoration: "none", color: "#9a9a9a" }}>home</NavLink>

                </li>
                <li id="footer li"><NavLink className="navigao" to="/Digital" style={{ marginLeft: "-3px", textDecoration: "none", color: "#9a9a9a" }}>Digital</NavLink>

                </li>
                <li id="footer li"><NavLink className="navigao" to="/profs" style={{ marginLeft: "-3px", textDecoration: "none", color: "#9a9a9a" }}>professional</NavLink>

                </li>
              </ul>

            </div>
            <div className="col-6 col-lg-4 high">
              <h3>FOR YOU</h3>
              <ul>
                <li id="footer li">
                  <NavLink className="navigao" to="/report" style={{ marginLeft: "-3px", textDecoration: "none", color: "#9a9a9a" }}>Feedback</NavLink>

                </li>
                <li id="footer li">
                  <NavLink className="navigao" to="/contact" style={{ marginLeft: "-3px", textDecoration: "none", color: "#9a9a9a" }}>Contact</NavLink>

                </li>
              </ul>
            </div>
            <div className=" col-6 col-lg-4 fly " >
              <h3 className="touch">KEEP IN TOUCH</h3>
              <div className="container-fluid fly">Mini-Project Team:<a href="mailto:shubhamzope1@gmail.com" className="fly" style={{ marginRight: "30px", textDecoration: "none", color: "#9a9a9a" }}>shubhamzope</a>
              <a href="mailto:shubhamzope1@gmail.com" className="fly" style={{ marginRight: "30px", textDecoration: "none", color: "#9a9a9a" }}>Atherva</a>
              <a href="mailto:shubhamzope1@gmail.com" className="fly" style={{ marginRight: "30px", textDecoration: "none", color: "#9a9a9a" }}>Ritesh</a>

              </div>
              <div className="text-start">
                <div className="flyer">
                  <a href="#" className="fly" target="_blank">
                    <i className="fab fa-facebook-f fontawesome-style text-white"></i>
                  </a>

                </div>
                <div className="flyer">
                  <a href="https://www.instagram.com/shubhamzope1" target="_blank">
                    <i class="fab fa-instagram fontawesome-style text-white start"></i>
                  </a>
                </div>



              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;