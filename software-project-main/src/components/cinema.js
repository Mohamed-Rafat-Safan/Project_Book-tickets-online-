import React, { Component } from "react";
import './cinema.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BsArrowLeftRight } from 'react-icons/bs';
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
class Cinema extends Component {
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
                <div className="search">
                    <select name="event_type" id="type">
                        <option value="1" selected>All Type</option>
                        <option value="2">Consert</option>
                        <option value="threater">Threater</option>
                        <option value="family">Family</option>
                        <option value="other">Other</option>
                    </select>
                    <input id="tf" type="date" placeholder="select DateTime" />
                    <input id="btn" type="button" value="Search" />
                </div>
                <h3 className="main-title">Event</h3>
                <div className="offers" id="offers">
                    <div className="containerm">
                        <div className="box">
                            <a target="_self" href="#elkahen">
                                <img src="image/elkahen.jpg" alt="" />
                            </a>

                            <p id="text_data">
                                El-Kahen (2021) In the context of<br />
                                excitement, suspense and action .
                            </p>

                            <span id="date">Des 25, 2021</span><br />

                            <p id="text_data">
                                <span>start from</span> 450 EGP
                            </p>

                            <p id="text_data">Tazkarti Entertainment</p>

                            <div className="info">
                                <a href="#te">Book Ticket <CgChevronDoubleRight /></a>
                            </div>
                        </div>

                        <div className="box">
                            <a target="_self" href="#mosa">
                                <img src="./image/mosa.jpg" alt="" />
                            </a>

                            <p id="text_data">
                                Mosa (2021) The events take place<br />
                                within the framework of science fiction.
                            </p>

                            <span id="date">Des 28, 2021</span><br />

                            <p id="text_data">
                                <span>start from</span> 350 EGP
                            </p>

                            <p id="text_data">Tazkarti Entertainment</p>
                            <div className="info">
                                <a href="/">Book Ticket <CgChevronDoubleRight /></a>
                            </div>
                        </div>

                        <div className="box">
                            <a target="_self" href="#al3aref">
                                <img src="image/al3aref.jpg" alt="" />
                            </a>

                            <p id="text_data">
                                El-Aref (2021) The events of the film <br />
                                revolve around the idea of a war of<br />
                                minds events, in our contemporary time
                            </p>

                            <span id="date">Des 29, 2021</span><br />

                            <p id="text_data">
                                <span>start from</span> 400 EGP
                            </p>

                            <p id="text_data">Tazkarti Entertainment</p>

                            <div className="info">
                                <a href="/">Book Ticket <CgChevronDoubleRight /></a>
                            </div>
                        </div>

                        <div className="box">
                            <a target="_self" href="#Al-Shanta">
                                <img src="image/Al-Shanta.jpg" alt="" />
                            </a>

                            <p id="text_data">
                                El-Shanta (2021) <br />In the context of an action comedy.
                            </p>

                            <span id="date">Des 30, 2021</span><br />

                            <p id="text_data">
                                <span>start from</span> 300 EGP
                            </p>

                            <p id="text_data">Tazkarti Entertainment</p>

                            <div className="info">
                                <a href="/">Book Ticket <CgChevronDoubleRight /></a>
                            </div>
                        </div>

                        <div className="box">
                            <a target="_self" href="#mesh_ana">
                                <img src="image/mesh_ana.jpg" alt="" />
                            </a>

                            <p id="text_data">
                                Mish-Ana (2021) <br />
                                Hassan suffers from a strange condition that loses control of his
                                hand
                            </p>

                            <span id="date">Jan 2, 2022</span><br />

                            <p id="text_data">
                                <span>start from</span> 250 EGP
                            </p>

                            <p id="text_data">Tazkarti Entertainment</p>

                            <div className="info">
                                <a href="/">Book Ticket <CgChevronDoubleRight /></a>
                            </div>
                        </div>

                        <div className="box">
                            <a target="_self" href="#nas_yoom">
                                <img src="image/nas_yoom.jpg" alt="" />
                            </a>

                            <p id="text_data">
                                Nasu-Yawm (2021) <br />Omar Ibn Al-Hajj Mukhtar disappears in
                                mysterious circumstances
                            </p>

                            <span id="date">Jan 5, 2022</span><br />

                            <p id="text_data">
                                <span>start from</span> 150 EGP
                            </p>

                            <p id="text_data">Tazkarti Entertainment</p>

                            <div className="info">
                                <a href="/">Book Ticket <CgChevronDoubleRight /></a>
                            </div>
                        </div>

                        <div className="box">
                            <a target="_self" href="#al3aref">
                                <img src="image/al3aref.jpg" alt="" />
                            </a>

                            <p id="text_data">
                                Al-eins&Nams (2021) <br />
                                In the context of comedy horror Tahseen lives with his mother,
                            </p>

                            <span id="date">Des 30, 2021</span><br />

                            <p id="text_data">
                                <span>start from</span> 275 EGP
                            </p>

                            <p id="text_data">Tazkarti Entertainment</p>

                            <div className="info">
                                <a href="/">Book Ticket <CgChevronDoubleRight /></a>
                            </div>
                        </div>

                        <div className="box">
                            <a target="_self" href="#ahmad">
                                <img src="image/ahmad.jpg" alt="" />
                            </a>

                            <p id="text_data">
                                Ahmad Nutirdam (2021) <br />A series of murders and kidnappings take
                                place by an unknown killer
                            </p>

                            <span id="date">Jan 6, 2022</span><br />

                            <p id="text_data">
                                <span>start from</span> 350 EGP
                            </p>

                            <p id="text_data">Tazkarti Entertainment</p>

                            <div className="info">
                                <a href="/">Book Ticket <CgChevronDoubleRight /></a>
                            </div>
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

export default Cinema;