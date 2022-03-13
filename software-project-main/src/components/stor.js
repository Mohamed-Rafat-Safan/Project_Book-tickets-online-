import './stor.css';
import { Link, Outlet } from 'react-router-dom';
import { BsArrowLeftRight, BsFillPersonPlusFill } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUserAdd, AiOutlineUnlock } from 'react-icons/ai'
import { MdOutlineLanguage } from 'react-icons/md'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import React, { Component } from 'react'
function viewList() {
    var displayValue = document.getElementById('dropdown-content').style.display;
    if (displayValue === "none")
        document.getElementById('dropdown-content').style.display = "block";
    else
        document.getElementById('dropdown-content').style.display = "none";
}
class Stor extends Component {
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
                <div class="contenet">
                    <div class="container-stor">
                        <h1>Tazkarti Stores</h1>
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Dedicted To</th>
                                    <th>Outlet Name</th>
                                    <th>City</th>
                                    <th>District</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Entertainment</td>
                                    <td>Fawry Plus</td>
                                    <td>Cairo</td>
                                    <td>Hlio Police</td>
                                    <td>store2,ground floor,building,54 othman ibn afan</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Sports</td>
                                    <td>We</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                                <tr>
                                    <td>Entertainment</td>
                                    <td>Fawry Plus</td>
                                    <td>Cairo</td>
                                    <td>Hlio Police</td>
                                    <td>store2,ground floor,building,54 othman ibn afan</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Entertainment</td>
                                    <td>Auntie Ann`s</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                                <tr>
                                    <td>Entertainment</td>
                                    <td>Fawry Plus</td>
                                    <td>Cairo</td>
                                    <td>Hlio Police</td>
                                    <td>store2,ground floor,building,54 othman ibn afan</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Entertainment</td>
                                    <td>Auntie Ann`s</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                                <tr>
                                    <td>Entertainment</td>
                                    <td>Fawry Plus</td>
                                    <td>Cairo</td>
                                    <td>Hlio Police</td>
                                    <td>store2,ground floor,building,54 othman ibn afan</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Entertainment</td>
                                    <td>Auntie Ann`s</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                                <tr>
                                    <td>Entertainment</td>
                                    <td>Fawry Plus</td>
                                    <td>Cairo</td>
                                    <td>Hlio Police</td>
                                    <td>store2,ground floor,building,54 othman ibn afan</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Sports</td>
                                    <td>We</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                                <tr>
                                    <td>Entertainment</td>
                                    <td>Fawry Plus</td>
                                    <td>Cairo</td>
                                    <td>Hlio Police</td>
                                    <td>store2,ground floor,building,54 othman ibn afan</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Entertainment</td>
                                    <td>Auntie Ann`s</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                                <tr>
                                    <td>Entertainment</td>
                                    <td>Fawry Plus</td>
                                    <td>Cairo</td>
                                    <td>Hlio Police</td>
                                    <td>store2,ground floor,building,54 othman ibn afan</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Sports</td>
                                    <td>We</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                                <td>Entertainment</td>
                                <td>Fawry Plus</td>
                                <td>Cairo</td>
                                <td>Hlio Police</td>
                                <td>store2,ground floor,building,54 othman ibn afan</td>
                                <tr class="active-row">
                                    <td>Entertainment</td>
                                    <td>Auntie Ann`s</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                                <tr>
                                    <td>Entertainment</td>
                                    <td>Fawry Plus</td>
                                    <td>Cairo</td>
                                    <td>Hlio Police</td>
                                    <td>store2,ground floor,building,54 othman ibn afan</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Sports</td>
                                    <td>We</td>
                                    <td>Nasr City</td>
                                    <td>Hlio Police</td>
                                    <td>store13,ground floor,building,20 Nasr street</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="footers">
                    <div className="header-new">
                        <div className="header-logo-new">
                            <Link to="/" className="nav-menu-new"><img src="./logoo.png" alt="logo" className="logo-img-new"></img></Link>
                        </div>
                        <div className="middiv-new"></div>
                        <div className="header-links-new">
                            <Link to="/" className="links-icon-new"> &nbsp;<span className="link-text-new"> Home</span></Link>
                            <Link to="/faq" className="links-icon-new"> &nbsp;<span className="link-text-new"> FAQ</span></Link>
                            <Link to="/about" className="links-icon-new"> &nbsp; <span className="link-text-new"> About</span></Link>
                            <Link to="/contact" className="links-icon-new"> &nbsp; <span className="link-text-new"> contact</span></Link>
                            <Link to="/stor" className="links-icon-new"> &nbsp; <span className="link-text-new"> Stors</span></Link>
                            <Link to="/stadium" className="links-icon-new"> &nbsp; <span className="link-text-new"> Stadium Location</span></Link>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Stor;
