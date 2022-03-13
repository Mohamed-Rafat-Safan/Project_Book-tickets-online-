import './sport.css';
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
class Sport extends Component {
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
                <div class="slideShow">
                    <div class="para">
                        <p>
                            <span class="sp1">Welcome To Egyption League,</span>
                            <span class="sp2">Watch all League by Book a Ticket.</span>
                            <span class="sp3">Harry up !!!</span>
                        </p>
                    </div>
                </div>
                <div class="chooseOptions">
                    <div class="container-sport">
                        <div>
                            <label>Team</label>
                            <select name="" id="">
                                <option value="">Zamalke</option>
                                <option value="">Ahly</option>
                                <option value="">Peyramids</option>
                                <option value="">Isamily</option>
                            </select>
                        </div>
                        <div>
                            <label>Stadium</label>
                            <select name="" id="">
                                <option value="">Borg Alarb Stadium</option>
                                <option value="">Cairo Stadium</option>
                                <option value="">El sallam</option>
                                <option value="">Perto Sport</option>
                            </select>
                        </div>
                        <div>
                            <label>Group</label>
                            <select name="" id="">
                                <option value="">Borg Alarb Stadium</option>
                                <option value="">Cairo Stadium</option>
                                <option value="">El sallam</option>
                                <option value="">Perto Sport</option>
                            </select>
                        </div>
                        <div>
                            <label>Satge</label>
                            <select name="" id="">
                                <option value="">Borg Alarb Stadium</option>
                                <option value="">Cairo Stadium</option>
                                <option value="">El sallam</option>
                                <option value="">Perto Sport</option>
                            </select>
                        </div>
                        <div>
                            <label class="search">Serach</label>
                            <button>Search</button>
                        </div>
                    </div>
                </div>

                <div class="matches">
                    <div class="container-sport">
                        <h1>Matches</h1>
                        <div class="boxes">
                            <div class="box">
                                <img src="./image/AZ.jpg" alt="zamalke" />
                                <h2>Alahly <span>VS</span> Elzamalek</h2>
                                <div class="paraDate">
                                    <i><i class="far fa-calendar-alt"></i></i>
                                    <p>Petro spoert</p>
                                </div>
                                <div class="paraDate">
                                    <p>30/6/2021</p>
                                </div>
                                <button class="book">Book Ticket</button>
                            </div>
                            <div class="box">
                                <img src="./image/MS.jpg" alt="zamalke" />
                                <h2>Alahly <span>VS</span> Elzamalek</h2>
                                <div class="paraDate">
                                    <p>Petro spoert</p>
                                </div>
                                <div class="paraDate">
                                    <p>30/6/2021</p>
                                </div>
                                <button class="book">Book Ticket</button>
                            </div>
                            <div class="box">
                                <img src="./image/EE.jpg" alt="zamalke" />
                                <h2>Alahly <span>VS</span> Elzamalek</h2>
                                <div class="paraDate">
                                    <p>Petro spoert</p>
                                </div>
                                <div class="paraDate">
                                    <p>30/6/2021</p>
                                </div>
                                <button class="book">Book Ticket</button>
                            </div>
                            <div class="box">
                                <img src="./image/MT.jpg" alt="zamalke" />
                                <h2>Alahly <span>VS</span> Elzamalek</h2>
                                <div class="paraDate">
                                    <i><i class="far fa-calendar-alt"></i></i>
                                    <p>Petro spoert</p>
                                </div>
                                <div class="paraDate">
                                    <p>30/6/2021</p>
                                </div>
                                <button class="book">Book Ticket</button>
                            </div>
                            <div class="box">
                                <img src="./image/PS.jpg" alt="zamalke" />
                                <h2>Alahly <span>VS</span> Elzamalek</h2>
                                <div class="paraDate">
                                    <p>Petro spoert</p>
                                </div>
                                <div class="paraDate">
                                    <p>30/6/2021</p>
                                </div>
                                <button class="book">Book Ticket</button>
                            </div>
                            <div class="box">
                                <img src="./image/AZ.jpg" alt="zamalke" />
                                <h2>Alahly <span>VS</span> Elzamalek</h2>
                                <div class="paraDate">
                                    <i><i class="far fa-calendar-alt"></i></i>
                                    <p>Petro spoert</p>
                                </div>
                                <div class="paraDate">
                                    <p>30/6/2021</p>
                                </div>
                                <button class="book">Book Ticket</button>
                            </div>
                        </div>
                    </div>
                    <div class="ViewMore">
                        <div class="container-sport">
                            <h2>View more</h2>
                        </div>
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
export default Sport;