import React, { Component } from "react";
import './Stadium.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BsArrowLeftRight } from 'react-icons/bs';
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
class Stadium extends Component {
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
                <h3 class="main-title">Stadiums</h3>
                <div class="containermm">
                    <table class="table">
                        <tr>
                            <th>Stadium Name</th>
                            <th>City</th>
                            <th id="last_colum_th">Location</th>
                        </tr>
                        <tr id="content_tr">
                            <td>Cairo Stadium Sports Hall</td>
                            <td>Cairo</td>
                            <td id="last_colum">
                                <img src="./image/map-icon.png" alt="" width="40px" height="40px" />
                            </td>
                        </tr>
                        <tr id="content_tr">
                            <td>New Captial Sports Hall</td>
                            <td>Cairo</td>
                            <td id="last_colum">
                                <img src="./image/map-icon.png" alt="" width="40px" height="40px" />
                            </td>
                        </tr>
                        <tr id="content_tr">
                            <td>Hassan Mostafa Sports Hall (6th of October City)</td>
                            <td>Cairo</td>
                            <td id="last_colum">
                                <img src="./image/map-icon.png" alt="" width="40px" height="40px" />
                            </td>
                        </tr>
                        <tr id="content_tr">
                            <td>Borg Al Arab Sports Hall</td>
                            <td>Cairo</td>
                            <td id="last_colum">
                                <img src="./image/map-icon.png" alt="" width="40px" height="40px" />
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        );
    }
}
export default Stadium;