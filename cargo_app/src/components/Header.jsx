import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="transparent scroll-light has-topbar">
            <div id="topbar" className="topbar-dark text-light">
                <div className="container">
                    <div className="topbar-left xs-hide">
                        <div className="topbar-widget">
                            <div className="topbar-widget"><i className="fa fa-phone"></i>+208 333 9296</div>
                            <div className="topbar-widget"><i className="fa fa-envelope"></i>contact@rentaly.com</div>
                            <div className="topbar-widget"><i className="fa fa-clock-o"></i>Mon - Fri 08.00 - 18.00</div>
                        </div>
                    </div>
                
                    <div className="topbar-right">
                        <div className="social-icons">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-youtube fa-lg"></i></a>
                            <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                    </div>  
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    {/* logo begin */}
                                    <div id="logo">
                                        <Link to="/">
                                            <img className="logo-1" src="images/logo-light.png" alt="" />
                                            <img className="logo-2" src="images/logo.png" alt="" />
                                        </Link>
                                    </div>
                                    {/* logo close */}
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li><Link className="menu-item" to="/">Home</Link>
                                        <ul>
                                            <li><Link className="menu-item new" to="/02_dark-index-1">Homepage 1 Dark</Link></li>
                                            <li><Link className="menu-item new" to="/02_dark-index-2">Homepage 2 Dark</Link></li>
                                            <li><Link className="menu-item" to="/">Homepage Main</Link></li>
                                            <li><Link className="menu-item" to="/index-2">Homepage 2</Link></li>
                                            <li><Link className="menu-item" to="/index-3">Homepage 3</Link></li>
                                            <li><Link className="menu-item" to="/index-4">Homepage 4</Link></li>
                                            <li><Link className="menu-item" to="/index-5">Homepage 5</Link></li>
                                            <li><Link className="menu-item" to="/index-6">Homepage 6</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" to="/cars">Cars</Link>
                                        <ul>
                                            <li><Link className="menu-item" to="/cars">Cars List 1</Link></li>
                                            <li><Link className="menu-item" to="/02_dark-cars">Cars List 1 Dark</Link></li>
                                            <li><Link className="menu-item" to="/cars-list">Cars List 2</Link></li>
                                            <li><Link className="menu-item" to="/02_dark-cars-list">Cars List 2 Dark</Link></li>
                                            <li><Link className="menu-item" to="/car-single">Cars Single</Link></li>
                                            <li><Link className="menu-item" to="/02_dark-car-single">Cars Single Dark</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" to="/quick-booking">Booking</Link>
                                        <ul>
                                            <li><Link className="menu-item new" to="/quick-booking">Quick Booking</Link></li>
                                            <li><Link className="menu-item" to="/booking">Booking</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" to="/account-dashboard">My Account</Link>
                                        <ul>
                                            <li><Link className="menu-item" to="/account-dashboard">Dashboard</Link></li>
                                            <li><Link className="menu-item" to="/account-profile">My Profile</Link></li>
                                            <li><Link className="menu-item" to="/account-booking">My Orders</Link></li>
                                            <li><Link className="menu-item" to="/account-favorite">My Favorite Cars</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" to="#">Pages</Link>
                                        <ul>
                                            <li><Link className="menu-item" to="/about">About Us</Link></li>
                                            <li><Link className="menu-item" to="/contact">Contact</Link></li>
                                            <li><Link className="menu-item" to="/login">Login</Link></li>
                                            <li><Link className="menu-item" to="/register">Register</Link></li>
                                            <li><Link className="menu-item" to="/404">Page 404</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" to="#">News</Link>
                                        <ul>
                                            <li><Link className="menu-item" to="/news-standart-right-sidebar">News Standard</Link>
                                                <ul>
                                                    <li><Link className="menu-item" to="/news-standart-right-sidebar">Right Sidebar</Link></li>
                                                    <li><Link className="menu-item" to="/news-standart-left-sidebar">Left Sidebar</Link></li>
                                                    <li><Link className="menu-item" to="/news-standart-no-sidebar">No Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link className="menu-item" to="/news-grid-right-sidebar">News Grid</Link>
                                                <ul>
                                                    <li><Link className="menu-item" to="/news-grid-right-sidebar">Right Sidebar</Link></li>
                                                    <li><Link className="menu-item" to="/news-grid-left-sidebar">Left Sidebar</Link></li>
                                                    <li><Link className="menu-item" to="/news-grid-no-sidebar">No Sidebar</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" to="#">Elements</Link>
                                        <ul>
                                            <li><Link className="menu-item" to="/preloader">Preloader</Link></li>
                                            <li><Link className="menu-item" to="/icon-boxes">Icon Boxes</Link></li>
                                            <li><Link className="menu-item" to="/badge">Badge</Link></li>
                                            <li><Link className="menu-item" to="/counters">Counters</Link></li>
                                            <li><Link className="menu-item" to="/gallery-popup">Gallery Popup</Link></li>
                                            <li><Link className="menu-item" to="/icons-elegant">Icons Elegant</Link></li>
                                            <li><Link className="menu-item" to="/icons-etline">Icons Etline</Link></li>
                                            <li><Link className="menu-item" to="/icons-font-awesome">Icons Font Awesome</Link></li>
                                            <li><Link className="menu-item" to="/map">Map</Link></li>
                                            <li><Link className="menu-item" to="/modal">Modal</Link></li>
                                            <li><Link className="menu-item" to="/popover">Popover</Link></li>
                                            <li><Link className="menu-item" to="/tabs">Tabs</Link></li>
                                            <li><Link className="menu-item" to="/tooltips">Tooltips</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                                <div className="menu_side_area">
                                    <Link to="/login" className="btn-main">Sign In</Link>
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
