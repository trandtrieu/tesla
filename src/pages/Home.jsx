function Home() {
  return (
    <>
      <div
        id="this-top"
        className="layout-theme animated-css"
        data-header="sticky"
        data-header-top="200"
      >
        <div id="wrapper">
          {/* Header */}
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <a href="/" className="logo">
                    <img
                      className="logo__img img-responsive"
                      src="assets/img/logo.png"
                      height={20}
                      width={80}
                      alt="Tesla Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="header__inner"></div> */}
          </div>

          {/* Main Content */}
          <div className="block-title">
            <div className="block-title__inner section-bg section-bg_second">
              <div className="bg-inner">
                <h1 className="ui-title-page">Tesla - The Future of Cars</h1>
                <div className="decor-1 center-block" />
              </div>
            </div>
          </div>

          {/* Tesla Highlights */}
          <div className="layout-theme animated-css" data-header="sticky">
            <div id="wrapper">
              <section className="section_mod-a section-bg-2">
                <div className="bg-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <div
                          className="main-block text-center wow bounceInUp"
                          data-wow-duration="2s"
                        >
                          <div className="main-block__label">Welcome</div>
                          <div className="decor-1 center-block" />
                          <h1 className="main-block__title">
                            Join the <strong>Tesla Referral Program</strong>
                          </h1>
                          <div className="h4-container">
                            <h4>
                              The first 10 people who use the referral link will
                              now get $1,000 off Model Y, $1,500 off Model 3 or
                              $2,000 off Model S, Model X or Cybertruck.
                            </h4>
                            <h4>
                              All new orders that take delivery by December 31,
                              2024, can also enjoy 3 months of free
                              Supercharging and Full Self-Driving (Supervised).
                            </h4>
                          </div>

                          <div className="row">
                            <div className="col-xs-12">
                              <a
                                className="brand-link text-center wow bounceInUp"
                                href="https://www.tesla.com/referral/tho925939"
                                target="blank"
                              >
                                <i className="icon fa fa-caret-right" />
                                Referral Code Link
                                <i className="icon fa fa-caret-left" />
                                <span className="br" />
                                <div className="decor-1 decor-1_mod-b" />
                              </a>{" "}
                            </div>
                            {/* end col */}
                          </div>
                        </div>
                        <div className="wrap-link-img">
                          <ul
                            className="link-img link-img_mod-a list-inline wow bounceInLeft"
                            data-wow-duration="2s"
                          >
                            <li className="link-img__item">
                              <a
                                className="link-img__link"
                                href="https://www.tesla.com/models/design?referral=tho925939&redirect=no#overview"
                                target="blank"
                              >
                                <img
                                  className="img-responsive"
                                  src="assets/img/banner/1.jpg"
                                  alt="Model S"
                                />
                                <div className="link-img__wrap-title">
                                  <span className="link-img__title">
                                    Model S
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="link-img__item">
                              <a
                                className="link-img__link"
                                href="https://www.tesla.com/model3/design?referral=tho925939&redirect=no#overview"
                                target="blank"
                              >
                                <img
                                  className="img-responsive"
                                  src="assets/img/banner/2.jpg"
                                  alt="Model 3"
                                />
                                <div className="link-img__wrap-title">
                                  <span className="link-img__title">
                                    Model 3
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                          <ul
                            className="link-img link-img_mod-b list-inline wow bounceInRight"
                            data-wow-duration="2s"
                          >
                            <li className="link-img__item">
                              <a
                                className="link-img__link"
                                href="https://www.tesla.com/modely/design?referral=tho925939&redirect=no#overview"
                                target="blank"
                              >
                                <img
                                  className="img-responsive"
                                  src="assets/img/banner/4.jpg"
                                  alt="Model Y"
                                />
                                <div className="link-img__wrap-title">
                                  <span className="link-img__title">
                                    Model Y
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="link-img__item">
                              <a
                                className="link-img__link"
                                href="https://www.tesla.com/modelx/design?referral=tho925939&redirect=no#overview"
                                target="blank"
                              >
                                <img
                                  className="img-responsive"
                                  src="assets/img/banner/3.jpg"
                                  alt="Model X"
                                />
                                <div className="link-img__wrap-title">
                                  <span className="link-img__title">
                                    Model X
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* <footer className="footer">
            <div className="container text-center">
              <p>
                © {new Date().getFullYear()} Tesla, Inc. All Rights Reserved. |{" "}
                <a href="/privacy">Privacy Policy</a>
              </p>
            </div>
          </footer> */}
        </div>
      </div>
    </>
  );
}

export default Home;
