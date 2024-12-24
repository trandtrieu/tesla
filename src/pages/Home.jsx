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
            <div className="header__inner">
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
                    <div className="navbar yamm">
                      <ul className="nav navbar-nav">
                        <li>
                          <a href="/">HOME</a>
                        </li>
                        <li>
                          <a href="/vehicles">VEHICLES</a>
                        </li>
                        <li>
                          <a href="/technology">TECHNOLOGY</a>
                        </li>
                        <li>
                          <a href="/about">ABOUT TESLA</a>
                        </li>
                        <li>
                          <a href="/contact">CONTACT</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                          <h5 style={{ padding: "0 20px" }}>
                            Share your Tesla experience with friends and family.
                            Earn rewards like Supercharging credits, exclusive
                            Tesla gear, and more!
                          </h5>
                          <a
                            href="https://www.tesla.com/referral/tho925939"
                            className="btn btn-primary btn-effect"
                            target="blank"
                          >
                            Learn More
                          </a>
                        </div>
                        <div className="wrap-link-img">
                          <ul
                            className="link-img link-img_mod-a list-inline wow bounceInLeft"
                            data-wow-duration="2s"
                          >
                            <li className="link-img__item">
                              <a className="link-img__link" href="/model-s">
                                <img
                                  className="img-responsive"
                                  src="assets/media/link-img/1.png"
                                  height={250}
                                  width={170}
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
                              <a className="link-img__link" href="/model-3">
                                <img
                                  className="img-responsive"
                                  src="assets/media/link-img/2.png"
                                  height={250}
                                  width={170}
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
                              <a className="link-img__link" href="/model-x">
                                <img
                                  className="img-responsive"
                                  src="assets/media/link-img/3.png"
                                  height={250}
                                  width={170}
                                  alt="Model X"
                                />
                                <div className="link-img__wrap-title">
                                  <span className="link-img__title">
                                    Model X
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li className="link-img__item">
                              <a className="link-img__link" href="/model-y">
                                <img
                                  className="img-responsive"
                                  src="assets/media/link-img/4.png"
                                  height={250}
                                  width={170}
                                  alt="Model Y"
                                />
                                <div className="link-img__wrap-title">
                                  <span className="link-img__title">
                                    Model Y
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
        </div>
      </div>
    </>
  );
}

export default Home;
