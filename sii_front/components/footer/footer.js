//import ... from ''

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <aside className="widget widget-text">
                                <div className="widget-title"><h6>About Us</h6></div>
                                <div className="textwidget">
                                    <p>
                                        We are a high-performing investor in growth markets with unique operational expertise to identify overlooked opportunities <br />
                                    </p>
                                    <p>
                                        Location: *** **** *****, Wuse, Abuja <br />
                                        Email: contact@siinvest.com <br />
                                        Phone: **** **** *** <br />
                                    </p>
                                    <ul className="social-icons">
                                        <li><a href="#"><i className="bi-twitter"></i></a></li>
                                        <li><a href="#"><i className="bi-instagram"></i></a></li>
                                        <li><a href="#"><i className="bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="bi-telegram"></i></a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div className="col-md-3">
                            <aside className="widget widget-insights">
                            <div className="widget-title"><h6>Recent Insights</h6></div>
                            <div className="insightwidget"></div>
                            </aside>
                        </div>
                        <div className="col-md-3">
                            <aside className="widget widget-twitter">
                                <div className="widget-title"><h6>Twitter Feed</h6></div>
                                <div></div>
                            </aside>
                        </div>
                        <div className="col-md-3">
                            <aside className="widget widget-impact">
                                <div className="widget-title"><h6>Impact</h6></div>
                                <div></div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright">
                                <p>
                                    © 2022 Social Impact Investments, All Rights Reserved. Design with love by <a href="https://hubx.kacetech.ng">HubX</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}