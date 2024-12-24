import React from "react";
// import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="header-contacts">
                <span className="header-contacts__item">
                  <i className="icon fa fa-phone" /> +987 654 3210
                </span>
                <a
                  className="header-contacts__item"
                  href="mailto:autoz@zone.com"
                >
                  <i className="icon fa fa-envelope" /> autoz (at) zone.com
                </a>
              </div>
              <ul className="social-links list-inline">
                <li>
                  <a className="icon fa fa-facebook" href="#" />
                </li>
                <li>
                  <a className="icon fa fa-twitter" href="#" />
                </li>
                <li>
                  <a className="icon fa fa-youtube-play" href="#" />
                </li>
                <li>
                  <a className="icon fa fa-instagram" href="#" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
