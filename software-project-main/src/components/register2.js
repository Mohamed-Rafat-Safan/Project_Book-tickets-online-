import React, { Component } from "react";
import './register2.css'
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
class register2 extends Component {
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
                        <h1>Contact Information</h1>
                        <p>
                            Make sure you provide your personal mobile number and email address.
                        </p>
                    </div>
                    <form action="register3.html" name="myForm" id="formId">
                        <label for="Country of Nationality">Country of Nationality*</label>
                        <select id="Country of Nationality" required>
                            <option value="">--Select--</option>
                            <option value="Egypt" selected>Egypt</option>
                        </select>

                        <label for="city">City*</label>

                        <select id="city">
                            <option value="" selected>--Select--</option>
                            <option value="cairo">Cairo</option>
                            <option value="Asyut">Asyut</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Aswan">Aswan</option>
                            <option value="Minya">Minya</option>
                            <option value="Giza">Giza</option>
                            <option value="Gharbia">Gharbia</option>
                            <option value="Beni Suef">Beni Suef</option>
                            <option value="Monufia">Monufia</option>
                        </select>
                        <label for="Region">Region*</label>
                        <select id="Region">
                            <option value="" selected>--Select--</option>
                            <option value="cairo">Cairo</option>
                            <option value="Asyut">Asyut</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Aswan">Aswan</option>
                            <option value="Minya">Minya</option>
                            <option value="Giza">Giza</option>
                            <option value="Gharbia">Gharbia</option>
                            <option value="Beni Suef">Beni Suef</option>
                            <option value="Monufia">Monufia</option>
                        </select>
                        <label for="Language">Language of communication</label>
                        <select id="Language">
                            <option value="Arabic" selected>Arabic</option>
                            <option value="English">English</option>
                            <option value="French">French</option>
                        </select>
                        <label for="Date">Date of birth*</label>
                        <input type="date" name="Date" id="Date" placeholder=" " />
                        <label for="email">Email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                        />
                        <input type="checkbox" value="remember-me" id="checkboxx" />
                        <label class="checkbox" id="check"
                        >I have read and agree to <a href="/">Terms & Conditions</a>*</label
                        >
                        <div class="verfy-pho">
                            <h3>Verify your mobile number</h3>
                            <p>
                                Choose the country code, enter your mobile number, and then use the
                                'Send' button to receive the verification code.
                            </p>
                        </div>
                        <div class="phoneNum">
                            <label for="phone_num">Mobile number*</label>
                            <select name="countryCode" id="" >
                                <option value="" selected></option>
                                <option data-countryCode="GB" value="44">UK (+44)</option>
                                <option data-countryCode="US" value="1">USA (+1)</option>
                                <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                <option data-countryCode="AO" value="244">Angola (+244)</option>
                                <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                <option data-countryCode="AG" value="1268">
                                    Antigua &amp; Barbuda (+1268)
                                </option>
                            </select>
                            <input type="tel" name="" id="phone_num" placeholder="+20" />
                            <input type="submit" value="Send" id="send" />
                        </div>
                        <label for="">Tazkarti Account Type*</label>
                        <div class="radioText">
                            <label class="main-radio m-zero"
                            ><input
                                    class="checkbox terms"
                                    id="sportstRadio"
                                    name="radio"
                                    type="radio" />
                                Entertainment Account Only (instant activation)
                                <span class="check-mark"></span
                                ></label>
                        </div>
                        <div class="radioText">
                            <label class="main-radio m-zero">
                                <input
                                    class="checkbox terms"
                                    id="sportstRadio"
                                    name="radio"
                                    type="radio" />
                                Sports and Entertainment Account <span class="check-mark"></span
                                ></label>
                        </div>
                        <div class="buttons">
                            <Link to="/register3">
                                <button
                                    class="button submit button-green"
                                    id="btn_proceed"
                                    tabindex="11"
                                    type="submit"
                                >
                                    Proceed
                                </button>
                            </Link >
                            <Link to="/register">
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

export default register2;