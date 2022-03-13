import React, { Component } from "react";
import './Integrated.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FaAngleDoubleDown } from 'react-icons/fa'
import { CgChevronDoubleRight } from 'react-icons/cg'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUserAdd, AiOutlineUnlock } from 'react-icons/ai'
import { MdOutlineLanguage } from 'react-icons/md'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

function viewList() {
    var displayValue = document.getElementById('dropdown-content').style.display;
    if (displayValue === "none")
        document.getElementById('dropdown-content').style.display = "block";
    else
        document.getElementById('dropdown-content').style.display = "none";
}
class Integrated extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <div className="dropdown">
                        <div className="dropdown-content" id="dropdown-content">
                            <Link to="/home">HOME</Link>
                            <Link to="/stadium">STADIUM LOCATIONS</Link>
                            <Link to="/stor">OUR STORES</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/about">ABOUT TAZKARTI</Link>
                            <Link to="contact">CONTACT US</Link>
                            <div className="drop-social">
                                <Link to="https://www.facebook.com" className="social"><BsFacebook /></Link>
                                <Link to="https://www.facebook.com" className="social"><BsLinkedin /></Link>
                                <Link to="https://www.facebook.com" className="social"><BsTwitter /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="allofus">
                    <div className="header-new">
                        <div className="header-logo-new">
                            <button onClick={viewList} className="nav-menu-new"> <HiOutlineMenuAlt2 className="icones-new" />&nbsp;&nbsp;</button>
                            <Link to="/" className="nav-menu-new"><img src="./logoo.png" alt="logo" className="logo-img-new"></img></Link>
                        </div>
                        <div className="middiv-new"></div>
                        <div className="header-links-new">
                            <Link to="/register" className="links-icon-new"> <AiOutlineUserAdd className="icones-new" />&nbsp;<span className="link-text-new"> Register</span></Link>
                            <Link to="/login" className="links-icon-new"> <AiOutlineUnlock className="icones-new" />&nbsp;<span className="link-text-new"> Sign in</span></Link>
                            <Link to="/update" className="links-icon-new"> <BsArrowLeftRight className="icones-new" />&nbsp; <span className="link-text-new">Update Information</span></Link>
                            <Link to="/" className="links-icon-new"><MdOutlineLanguage className="icones-new" />&nbsp;<span className="link-text-new"> English</span></Link>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="landing">
                    <div className="contains">
                        <div className="text">
                            <h1>Integrated tickeing</h1>
                            <p>allows a person to make a journey that involves transfers within or between different transport
                                modes with a single ticket that is valid for the complete journey, modes being buses, trains, subways,
                                ferries, etc.</p>
                        </div>
                        <div className="image">
                            <img src="image/of_main.png" alt="" />
                        </div>
                    </div>
                    <Link to="/offers" className="go-down">
                        <FaAngleDoubleDown />
                    </Link>
                </div><div className="offers" id="offers">
                    <h2 className="main-title">Offers</h2>
                    <div className="contains">
                        <div className="box">
                            <img src="image/of1.png" alt="" />
                            <div className="content">
                                <h3>Offer 1</h3>
                                <p>Ticket price: 100$
                                    Show date: 20 Jan 2022
                                    Time: 09:00 PM
                                    Waiting for you</p>
                            </div>
                            <div className="info">
                                <Link to="">Book Ticket < CgChevronDoubleRight className="re-icones" /></Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/of2.png" alt="" />
                            <div className="content">
                                <h3>Offer 2</h3>
                                <p>Ticket price: 100$
                                    Show date: 22 Jan 2022
                                    Time: 07:00 PM
                                    Waiting for you</p>
                            </div>
                            <div className="info">
                                <Link to="">Book Ticket <CgChevronDoubleRight /></Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/of3.png" alt="" />
                            <div className="content">
                                <h3>Offer 3</h3>
                                <p>Ticket price: 100$
                                    Show date: 24 Jan 2022
                                    Time: 10:00 PM
                                    Waiting for you</p>
                            </div>
                            <div className="info">
                                <Link to="">Book Ticket <CgChevronDoubleRight /></Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/of4.png" alt="" />
                            <div className="content">
                                <h3>Offer 4</h3>
                                <p>Ticket price: 100$
                                    Show date: 27 Jan 2022
                                    Time: 08:00 PM
                                    Waiting for you</p>
                            </div>
                            <div className="info">
                                <Link to="">Book Ticket <CgChevronDoubleRight /></Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/of5.png" alt="" />
                            <div className="content">
                                <h3>Offer 5</h3>
                                <p>Ticket price: 100$
                                    Show date: 3 Feb 2022
                                    Time: 11:00 PM
                                    Waiting for you</p>
                            </div>
                            <div className="info">
                                <Link to="">Book Ticket <CgChevronDoubleRight /></Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/of6.png" alt="" />
                            <div className="content">
                                <h3>Offer 6</h3>
                                <p>Ticket price: 100$
                                    Show date: 5 Feb 2022
                                    Time: 08:00 PM
                                    Waiting for you</p>
                            </div>
                            <div className="info">
                                <Link to="">Book Ticket <CgChevronDoubleRight /></Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/of7.png" alt="" />
                            <div className="content">
                                <h3>Offer 7</h3>
                                <p>Ticket price: 100$
                                    Show date: 6 Feb 2022
                                    Time: 06:00 PM
                                    Waiting for you</p>
                            </div>
                            <div className="info">
                                <Link to="">Book Ticket <CgChevronDoubleRight /></Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/of8.png" alt="" />
                            <div className="content">
                                <h3>Offer 8</h3>
                                <p>Ticket price: 100$
                                    Show date: 8 Feb 2022
                                    Time: 12:00 PM
                                    Waiting for you</p>
                            </div>
                            <div className="info">
                                <Link to="">Book Ticket <CgChevronDoubleRight /></Link>
                            </div>
                        </div>
                    </div>
                </div><div className="spikes"></div><div className="gallery" id="gallery">
                    <h2 className="main-title">Gallery</h2>
                    <div className="contains">
                        <div className="box">
                            <div className="image">
                                <img src="image/t1.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t2.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t3.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t4.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t5.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t6.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t7.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t8.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t9.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t10.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t11.png" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src="image/t13.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Integrated;