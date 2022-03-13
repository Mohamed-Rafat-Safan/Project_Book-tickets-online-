import React, { Component } from "react";
import './register.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BsArrowLeftRight } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUserAdd, AiOutlineUnlock } from 'react-icons/ai'
import { MdOutlineLanguage } from 'react-icons/md'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './js/main'

function viewList() {
    var displayValue = document.getElementById('dropdown-content').style.display;
    if (displayValue === "none")
        document.getElementById('dropdown-content').style.display = "block";
    else
        document.getElementById('dropdown-content').style.display = "none";
}
class register extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <div className="dropdown">
                        <div className="dropdown-content" id="dropdown-content">
                            <Link to="/">HOME</Link>
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
                <div class="header-re">
                    <div class="header-info">
                        <h1>Sign up for Tazkarti Account</h1>
                        <p>Fill in all the required fields marked by (*).</p>
                    </div>
                    <div class="rowcir">
                        <div class="col">
                            <ul class="stepper stepper-horizontal">
                                <li class="active cir">
                                    <a href="/">
                                        <span class="circle">1</span>
                                    </a>
                                </li>
                                <li class="disabled cir">
                                    <a href="/">
                                        <span class="circle">2</span>
                                    </a>
                                </li>

                                <li class="disabled cir">
                                    <a href="/">
                                        <span class="circle">3</span>
                                    </a>
                                </li>
                                <li class="disabled cir">
                                    <a href="/">
                                        <span class="circle">4</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="select-nationality">
                    <div class="info">
                        <h1>Select Your Nationality</h1>
                        <p>Specify if you are Egyptian or from another country.</p>
                    </div>
                    <div class="card">
                        <Link to="/register2">
                            <div class="image">
                                <img src="./image/egypt-flag.svg" alt="" srcset="" />
                                <h3>Egyptian</h3>
                            </div>
                        </Link>
                        <Link to="/register2">
                            <div class="image">
                                <img src="image/nationality-flag.svg" alt="" srcset="" />
                                <h3>Other Nationalities</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div />

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

export default register;