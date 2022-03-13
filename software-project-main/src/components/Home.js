import { BsArrowLeftRight } from 'react-icons/bs';
import { GiFootyField, GiCupcake } from 'react-icons/gi';
import { FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './Home.css';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineUnlock } from 'react-icons/ai'
import { MdOutlineLanguage } from 'react-icons/md'

function viewList() {
    var displayValue = document.getElementById('dropdown-content').style.display;
    if (displayValue === "none")
        document.getElementById('dropdown-content').style.display = "block";
    else
        document.getElementById('dropdown-content').style.display = "none";
}

class Home extends Component {
    render() {
        return (
            <div className="containers">
                <div>
                    <div className="head">
                        <div className="dropdown">
                            <div className="dropdown-content" id="dropdown-content">
                                <Link to="/">HOME</Link>
                                <Link to="/stadium">STADIUM LOCATIONS</Link>
                                <Link to="/stor">OUR STORES</Link>
                                <Link to="/faq">FAQ</Link>
                                <Link to="/about">ABOUT TAZKARTI</Link>
                                <Link to="/contact">CONTACT US</Link>
                                <div className="drop-social">
                                    <Link to="https://www.facebook.com" className="social"><BsFacebook /></Link>
                                    <Link to="https://www.facebook.com" className="social"><BsLinkedin /></Link>
                                    <Link to="https://www.facebook.com" className="social"><BsTwitter /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="header-new">
                            <div className="header-logo-new">
                                <button onClick={viewList} className="nav-menu-new button-menu"> <HiOutlineMenuAlt2 className="icones-new" />&nbsp;&nbsp;</button>
                                <Link to="/" className="nav-menu-new"><img src="./logoo.png" alt="logo" className="logo-img-new"></img></Link>
                            </div>
                            <div className="middiv-new"></div>
                            <div className="header-links-new">
                                <Link to="/register" className="links-icon-new"> <AiOutlineUserAdd className="icones-new" />&nbsp;<span className="link-text-new"> Register</span></Link>
                                <Link to="/login" className="links-icon-new"> <AiOutlineUnlock className="icones-new" />&nbsp;<span className="link-text-new"> Sign in</span></Link>
                                <Link to="/update" className="links-icon-new"> <BsArrowLeftRight className="icones-new" />&nbsp; <span className="link-text-new">Update Information</span></Link>
                                <Link to="/buy" className="links-icon-new"><MdOutlineLanguage className="icones-new" />&nbsp;<span className="link-text-new"> English</span></Link>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <div>
                        <h2>What is your next plan?</h2>
                        <p>Explore and book all exclusive events and matches.</p>
                        <div className="section">
                            <Link to="/sport">
                                <div className="event first">
                                    <div className="images">
                                        <GiFootyField />
                                    </div>
                                    <p className="firsts">Sports</p>
                                    <p>Matches Tickets</p>
                                </div>
                            </Link>
                            <Link to="/cinema">
                                <div className="event second">
                                    <div className="images">
                                        <GiCupcake />
                                    </div>
                                    <p className="firsts">Entertainment</p>
                                    <p>Event Tickets</p>
                                </div>
                            </Link>
                            <Link to="/event">
                                <div className="event third">
                                    <div className="images">
                                        <FaCalendarAlt />
                                    </div>
                                    <p className="firsts">More</p>
                                    <p>Events</p>
                                </div>
                            </Link>
                            <Link to="/integrated">
                                <div className="event last">
                                    <div className="images">
                                        <FaTicketAlt />
                                    </div>
                                    <p className="firsts">Integrity</p>
                                    <p>Tickets</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sign">
                    <Link to="/login"><button className="first">Sign in</button></Link>
                    <p className="paragraph"> or </p>
                    <Link to="register"><button className="second">Register Now!</button></Link>
                </div>
                <div className="foot">
                    <p className="paragraph">© 2021 Tazkarti. All rights reserved.</p>
                    <p className="paragraph">Developed and Powered by GET Group and Payment by Fawry</p>
                </div>
            </div>

        );
    }
};

export default Home;