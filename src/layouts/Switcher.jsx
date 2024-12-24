import React from "react";
// import "./Switcher.css";

function Switcher() {
  return (
    <div className="switcher-wrapper">
      <div className="demo_changer">
        <div className="demo-icon customBgColor">
          <i className="fa fa-cog fa-spin fa-2x" />
        </div>
        <div className="form_holder">
          <div className="row">
            <div className="col-lg-12">
              <div className="predefined_styles">
                <div className="skin-theme-switcher">
                  <h4>Color</h4>
                  {["#fe5656", "#4fb0fd", "#ffc73c", "#ff8300", "#02cc8b"].map(
                    (color, index) => (
                      <a
                        key={index}
                        href="#"
                        className="styleswitch"
                        style={{ backgroundColor: color }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Switcher;
