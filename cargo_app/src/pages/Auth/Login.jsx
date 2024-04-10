export default function Login() {
    return (
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="section-hero" aria-label="section" className="jarallax">
                <img src="images/background/2.jpg" className="jarallax-img" alt="" />
                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 offset-lg-4">
                                <div className="padding40 rounded-3 shadow-soft" data-bgcolor="#ffffff">
                                    <h4>Login</h4>
                                    <div className="spacer-10"></div>
                                    <form id="form_register" className="form-border" method="post" action="account-dashboard.html">
                                        <div className="field-set">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="field-set">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div id="submit">
                                            <input type="submit" id="send_message" value="Sign In" className="btn-main btn-fullwidth rounded-3" />
                                        </div>
                                    </form>
                                    <div className="title-line">Or&nbsp;sign&nbsp;up&nbsp;with</div>
                                    <div className="row g-2">
                                        <div className="col-lg-6">
                                            <a className="btn-sc btn-fullwidth mb10" href="#"><img src="images/svg/google_icon.svg" alt="" />Google</a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a className="btn-sc btn-fullwidth mb10" href="#"><img src="images/svg/facebook_icon.svg" alt="" />Facebook</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}