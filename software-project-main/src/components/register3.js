import React, { Component } from "react";
import './register3.css'
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
class register3 extends Component {
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
                                        <span class="circle cir-active">1</span>
                                    </a>
                                </li>

                                <li class="active cir">
                                    <a href="/">
                                        <span class="circle cir-active">2</span>
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
                        <h1>Contact Information</h1>
                        <p>
                            Make sure you provide your personal mobile number and email address.
                        </p>
                    </div>
                    <form action="/register4.html" id="formId">
                        <label for="Name">Name*</label>
                        <input
                            type="f-name"
                            name="f-name"
                            id="f-name"
                            placeholder=" First Name"
                        />
                        <input
                            type="m-name"
                            name="m-name"
                            id="m-name"
                            placeholder=" Middle Name"
                        />
                        <input
                            type="l-name"
                            name="l-name"
                            id="l-name"
                            placeholder=" Last Name"
                        />
                        <label for="blood-type">Blood type</label>
                        <select id="blood-type">
                            <option value="" selected>--select--</option>
                            <option value="select">Prefer Not To Say</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        <label for="Gender">Gender</label>
                        <select id="Gender">
                            <option value="" selected>--select--</option>
                            <option value="select">Prefer Not To Say</option>
                            <option value="Female">Female</option>
                            <option value="male">male</option>
                        </select>

                        <div class="buttons">
                            <Link to="/register4"><button
                                class="button submit button-green"
                                id="btn_proceed"
                                tabindex="11"
                                type="submit"
                            >
                                Proceed
                            </button>
                            </Link>
                            <Link to="/register2">
                                <button class="button button-grey" tabindex="12" type="button">
                                    Back
                                </button>
                            </Link>
                        </div>
                    </form>
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

export default register3;