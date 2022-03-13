import React from "react";
import { BackTop, Collapse } from "antd";
import './faq.css'

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BsArrowLeftRight } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineUserAdd, AiOutlineUnlock } from 'react-icons/ai'
import { MdOutlineLanguage } from 'react-icons/md'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './js/main'

const { Panel } = Collapse;
function viewList() {
  var displayValue = document.getElementById('dropdown-content').style.display;
  if (displayValue === "none")
    document.getElementById('dropdown-content').style.display = "block";
  else
    document.getElementById('dropdown-content').style.display = "none";
}
function AppFaq() {
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
      <div id="faq" className="block faqBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div>
            <h1>
              <u>About Tazkarti ID</u>
            </h1>
          </div>
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="What is a Tazkarti ID?" key="1">
              <p>
                Tazkarti ID is a unique identification card used to identify a fan
                registered in Tazkarti system. It allows access to any sports
                stadium for matches around Egypt. Besides the ticket, it acts as
                an entry pass and an access tool to stadiums.
              </p>
            </Panel>
            <Panel header="Why do I need to register for a Tazkarti ID?" key="2">
              <p>
                Fans MUST apply for a Tazkarti ID to be able to book tickets and
                attend matches.
              </p>
            </Panel>
            <Panel header="How much does a Tazkarti ID cost?" key="3">
              <p>
                It is for free till now. However, you have to purchase a ticket to
                be eligible for a Tazkarti ID card.
              </p>
            </Panel>
            <Panel header="How can I get my Tazkarti ID card?" key="4">
              <p>
                In order to print or receive a Tazkarti ID card you MUST first
                purchase a ticket.
              </p>
            </Panel>
            <Panel header="Where can I receive my Tazkarti ID?" key="5">
              <p>
                You can pick it up from any of our authorized outlets.
                <br />
                Visit Our Stores page for more information.
              </p>
            </Panel>
            <Panel header="What if I lost my Tazkarti ID card?" key="6">
              <p>
                In case of losing your Tazkarti ID card, you can reprint it only
                once from any of our authorized outlets after presenting your
                valid National ID or passport.
              </p>
            </Panel>
            <Panel header="Can someone else receive my Tazkarti ID card?" key="7">
              <p>
                Yes, you can authorize someone else to receive your Tazkarti ID
                card from an authorized outlet, whether this person has a Tazkarti
                ID or not. However, you have to first purchase your first ticket
                to be eligible for a Tazkarti ID.
                <br />
                <br />
                To authorize someone to receive your Tazkarti ID card, do the
                following:
                <br />
                <ol>
                  <li>
                    Sign in to your account, and then click <b>My Profile</b>.
                  </li>
                  <li>
                    Click<b>Authorize Friend to Collect.</b>
                  </li>
                  <li>
                    Specify how to identify this person, whether by National ID or
                    Tazkarti ID, and then enter the person’s full name and ID
                    number, or Tazkarti ID number.
                  </li>
                  <li>
                    Click <b>Authorize</b>
                  </li>
                </ol>
                <br />
                This person can receive your Tazkarti ID card, and your tickets as
                well, from authorized outlets after
                <br /> presenting his or her proof of identity.
              </p>
            </Panel>
          </Collapse>

          <div>
            <h1>
              <u>Tazkarti ID Registration</u>
            </h1>
          </div>
          <Collapse defaultActiveKey={["2"]}>
            <Panel
              header="I've registered before to attend AFCON, do I have to register again to attend new matches?"
              key="1"
            >
              <p>
                No, you do not have to register again; your account is still
                valid. You can use your Tazkarti ID number and password to sign in
                and <br />
                book tickets, and you can use your Tazkarti ID card to attend
                matches you book tickets <br />
                for.
                <ul className="test">
                  <li>
                    If you have forgotten your Tazkarti ID number, you can use the
                    Sign in page to receive it on your mobile or
                    <br /> email address after providing your national ID or
                    passport number. </li>
                  <li>
                    If you have forgotten your password, you can use the Sign in
                    page to reset your password and receive a <br />
                    new password on your email or mobile after providing your
                    Tazkarti ID number and the last four digits of
                    <br /> your national ID or passport number.
                  </li>

                </ul>
              </p>
            </Panel>
            <Panel
              header="I’m Egyptian, what are the conditions to register for a Tazkarti ID?"
              key="2"
            >
              <p>
                You must:
                <ol>
                  <li>
                    Be above<b>16 years old</b> .
                  </li>
                  <li>Attach a personal photo with white background.</li>
                  <li>Have a valid National ID.</li>
                  <li>Have a mobile number.</li>
                </ol>
              </p>
            </Panel>
            <Panel
              header="I’m not Egyptian, what are the conditions to register for a Tazkarti ID?"
              key="3"
            >
              <p>
                You must:
                <ul>
                  <li>Have a valid passport.</li>
                  <li>Attach a personal photo with white background.</li>
                  <li>Have a personal email address.</li>{" "}
                </ul>
              </p>
            </Panel>
            <Panel
              header="I’m Egyptian, how can I register for a Tazkarti ID?"
              key="4"
            >
              <p>
                To register for a Tazkarti ID, follow these steps.
                <ol>
                  <li>
                    Click <b>Register</b>.
                  </li>
                  <li>
                    Click<b> Egyptian</b>.
                  </li>
                  <li>
                    Select your preferred language of communication, and enter
                    your email. The emails and SMS messages you <br />
                    receive are written in the preferred language of communication
                    you select.
                  </li>
                  <li>
                    Select the
                    <b> I have read and agree to the Terms & Conditions</b> check
                    box to accept the Terms and Conditions.
                  </li>
                  <li>
                    Select the <b>I’m not a robot</b> check box, and then select
                    the images as required to proceed.
                  </li>
                  <li>
                    Enter your mobile number, and then click<b> Send.</b> A code
                    is sent to the mobile number that you have entered.
                  </li>
                  <li>
                    Enter the verification code, and then click <b>Verify.</b>
                  </li>
                  <li>
                    Click <b>Proceed,</b> and then enter your personal information
                    as per your National ID and birth certificate.
                  </li>
                  <li>
                    Click<b> Proceed,</b> and then attach the image of your
                    National ID and your personal photo. The personal photo will
                    be printed on your Tazkarti ID.
                  </li>
                  <li>
                    Click<b> Proceed,</b> and wait till the information you have
                    entered is verified.
                  </li>
                </ol>
                If verified, your registration request is sent to the authorized
                parties to review it. If accepted, you will
                <br /> receive an SMS and email with your Tazkarti ID number and
                password to sign in to your account, start
                <br /> booking tickets, and get your Tazkarti ID.
                <br />
                Otherwise, you will receive a Request Code to update the request
                and resubmit it.
              </p>
            </Panel>
            <Panel
              header="I’m not Egyptian, how can I register for a Tazkarti ID?"
              key="5"
            >
              <p>
                To register for a Tazkarti ID, follow these steps.
                <ol>
                  <li>
                    Click <b>Register.</b>
                  </li>
                  <li>
                    Click <b>Other Nationalities</b>.
                  </li>
                  <li>
                    Select your country of nationality, select your preferred
                    language of communication, and enter your mobile number. The
                    emails and SMS messages you receive are written in the
                    preferred language of communication you select.
                  </li>
                  <li>
                    Select the
                    <b>I have read and agree to the Terms & Conditions</b> check
                    box to accept the Terms and Conditions.
                  </li>
                  <li>
                    Select the <b>I’m not a robot</b> check box, and then select
                    the images as required to proceed.
                  </li>
                  <li>
                    Enter your email address, and then click <b> Send.</b> A code
                    is sent to the email address that you have entered.
                  </li>
                  <li>
                    Enter the verification code, and then click <b>Verify.</b>
                  </li>
                  <li>
                    Click<b> Proceed,</b> and then enter your personal information
                    as per your passport.
                  </li>
                  <li>
                    Click <b>Proceed,</b> and then attach the image of your
                    passport and your personal photo. The personal photo will be
                    printed on your Tazkarti ID.
                  </li>
                  <li>
                    Click<b> Proceed.</b>
                  </li>
                </ol>
                Your registration request is sent to the authorized parties for
                review. If accepted, you will receive an email
                <br /> with your Tazkarti ID number and password to sign in to
                youraccount, start booking tickets, and get your
                <br /> Tazkarti ID.
                <br />
                <br />
                Otherwise, you will receive a Request Code to update the request
                and resubmit it.
              </p>
            </Panel>
            <Panel
              header="If I already have my AFCON Fan ID card, can I use it to attend matches?"
              key="6"
            >
              <p>
                Yes, you can use your AFCON Fan ID card for attending any of our
                exclusive matches; your account is still <br />
                valid, and you can use your Fan ID number and password to sign in
                to your account and book tickets.
              </p>
            </Panel>
            <Panel
              header="I’m under 16 and I want to book a ticket; what should I do?"
              key="7"
            >
              <p>
                You cannot register for a Tazkarti ID by yourself as you are
                underage. However, you can ask an adult from <br />
                your family to register for a Tazkarti ID and after approving the
                request, he or she can add you as a<br /> dependent. After
                approving the dependent request, he or she can book tickets for
                you.
                <br />
                <br />
                Note that this person must have a valid National ID in case you
                are Egyptians, or both you and this person
                <br /> must have valid passports in case you are from another
                country..
              </p>
            </Panel>
            <Panel
              header="My registration request is rejected; what should I do?"
              key="8"
            >
              <p>
                If your registration request is rejected, you will receive a
                request code via SMS and email.
                <br />
                Use this code to update your registration request and submit it
                again to be reviewed.
                <br />
                Follow these steps to update your request.
                <ol>
                  <li>
                    Click <b>Update Information.</b>
                  </li>
                  <li>Enter the request code you have received.</li>
                  <li>
                    Enter the last 4 numbers of your National ID if you are
                    Egyptian or of your passport number for other nationalists.
                  </li>
                  <li>
                    Click <b>Check Request.</b>
                  </li>
                  <li>
                    Edit your request, and then click<b> Proceed.</b>
                  </li>
                </ol>
                <br />
                Your request is sent for review again. Note that your National ID
                or passport number will be blocked if
                <br /> your request is rejected for three times.
              </p>
            </Panel>
            <Panel
              header="I don’t have a personal photo that matches the required criteria; what should I do?"
              key="9"
            >
              <p>
                You can use your mobile camera to capture an image of you. It’s
                preferred to ask someone else to capture <br />
                the image. However, the captured image has to meet the same
                required conditions
              </p>
            </Panel>
            <Panel
              header="I have not received any response regarding my request; what should I do?"
              key="10"
            >
              <p>
                Contact the Customer Service at<b>15355,</b> or send a message
                through the Contact us page.
              </p>
            </Panel>
          </Collapse>


          <div>
            <h1>
              <u>My Account</u>
            </h1>
          </div>
          <Collapse defaultActiveKey={["3"]}>
            <Panel header="I’ve received my Tazkarti ID number and password; what shall I do next?" key="1">
              <p>
                Use your Tazkarti ID number and password to sign in to Tazkarti to start your experience with booking<br /> your favorite matches.
              </p>
            </Panel>
            <Panel header="Can I update my registered information?" key="2">
              <p>
                In case your request is rejected, you can updateonly information that you are required to update.<br />  However, after accepting your request, you cannot edit any of the personal information you have<br /> provided; you can edit only your account information, such as your password and language of<br /> communication.
              </p>
            </Panel>
            <Panel header="I have forgotten my Tazkarti ID number; what should I do?" key="3">
              <p>
                You can either contact the Customer Service at <b>15355</b> or request to receive your Tazkarti ID number on<br /> your mobile or email address.
                <br />
                <br />
                To receive your Tazkarti ID number, do the following:
                <ol>
                  <li>Click<b>Sign in,</b>  and then click <b>Forgot your Tazkarti ID?</b></li>
                  <li>Enter your national ID or passport number.</li>
                  <li>Select the<b> I’m not a robot</b> check box, and then select the images as required to proceed.</li>
                  <li>Click <b>Send.</b></li></ol><br /> Your registered Tazkarti ID number is sent to you via SMS or email.
              </p>
            </Panel>
            <Panel header="I have forgotten my password; what should I do?" key="4">
              <p>
                You can either contact the Customer Service at 15355 or request a new password that you can use to sign<br /> in to your account.
                <br />
                To request a new password, do the following:
                <ol>
                  <li>Click<b> Sign in,</b> and then click <b>Forgot Password?</b></li>
                  <li>Enter your Tazkarti ID number and the last 4 digits of your National ID or passport number.</li>
                  <li>Select the <b>I’m not a robot</b> check box, and then select the images as required to proceed.</li>
                  <li>Click <b>Reset Password.</b> A new password is sent to you via SMS or email.</li></ol><br />
                Use the new password to sign in to your account
              </p>
            </Panel>
            <Panel header="How can I change my password?" key="5">
              <p>
                <ol>
                  <li>Sign in to Tazkarti.</li>
                  <li>Go to <b>My Profile,</b> and then in the<b> Account Information</b> part, click<b> Update.</b></li>
                  <li>In the <b>Password</b> box, enter a new password, and re-enter it again in the Confirm <b>Password</b> box.</li>
                  <li>Click<b> Save.</b></li></ol>
              </p>
            </Panel>
            <Panel header="How can I change the language of the emails and SMS messages I receive?" key="6">
              <p>
                You receive emails and SMS messages written in the language of communication selected when you<br /> registered; however, you can change it.
                <br /><br /><ol>
                  <li>Sign in to Tazkarti.</li>
                  <li>Go to<b> My Profile</b>, and then in the<b> Account Information</b> part, click<b> Update.</b></li>
                  <li>In the<b> Language of Communication</b> box, select the language you want for the SMS and emails you will receive.</li>
                  <li>Click Save.</li></ol>
              </p>
            </Panel>
          </Collapse>

          <div>
            <h1>
              <u>Family and Friends</u>
            </h1>
          </div>

          <Collapse defaultActiveKey={["4"]}>
            <Panel header="I want to bring my family to the match; what should I do?" key="1">
              <p>
                Each of your family members who is above 16 years has to independently register for a Tazkarti ID, and<br /> after approving the registration requests, you can book tickets for them.
                <br />However, you can add your family members who are between 3 and 16 years as dependents, and you can <br />book tickets for them.
                <br />To add a new dependent, follow these steps.<br /><br />
                <ol>
                  <li>Sign in to Tazkarti, and then click <b>Dependents</b>.</li>
                  <li>In the Dependents page, click<b> Add New Dependent,</b> enter the required information, and upload the required documents.</li>
                  <li>Click<b> Proceed</b> to submit the request and wait till the request is approved.</li></ol><br />
                You have to repeat these steps to add each of your dependents who are under 16. Note that if the request<br /> is rejected, you can update and resubmit it.
              </p>
            </Panel>
            <Panel header="My request to add one of my family members as dependent is rejected; what should I do?" key="2">
              <p>
                You can update the request and resubmit it again. Note that if this family member is above 16 years, he or<br /> she has to register for a separate Tazkarti ID.
                <br /><br />
                To update a rejected request, do the following:
                <ol>
                  <li>Sign in to Tazkarti, and then click<b> Dependents.</b></li>
                  <li>On the Dependents list, find the rejected request, and then click<b> Update Request</b>.</li>
                  <li>Edit your request, and then click<b> Proceed.</b></li></ol><br />
                The request is sent for review again. Note that the dependent's National ID or passport number will be <br />blocked if the request is rejected for three times.
              </p>
            </Panel>
          </Collapse>
          <div>
            <h1>
              <u> Matches and Tickets</u>
            </h1>
          </div>
          <Collapse defaultActiveKey={["5"]}>
            <Panel
              header="What should I do to get a ticket for a match?" key="1"
            >
              <p>
                <ol> <li>Use your Tazkarti ID and password to sign in to your account, or register online to create an account, and then sign in.</li>
                  <li>Search for the match you want and book the required tickets.</li>
                  <li>Pay for the tickets you booked either by credit card or through Fawry network.</li>
                  <li>Print your tickets at any of our authorized outlets.</li></ol><br />
                Note that if you select to pay through Fawry network, you will have only 4 hours to complete the <br />payment before your booking expires. So, before choosing Fawry,
                make sure that you are booking your tickets <br />in a suitable time for you where you are able to pay for them within the 4 hours. Fawry option will<br />
                not be available if you miss the payment deadline for two times, and in this case, only payment by credit<br /> card will be available.
              </p>
            </Panel>
            <Panel
              header="Can I buy a ticket on the same day of the match?" key="2"
            >
              <p>
                Yes, you can buy a ticket on the same day of the match if there are available tickets. However,
                you have to<br /> get your ticket printed from any of our
                authorized outlets and get into the stadium before gates are<br />closed.
              </p>
            </Panel>
            <Panel
              header="How much is the ticket?" key="3"
            >
              <p>
                Ticket prices vary according to the match and the category of the ticket.
              </p>
            </Panel>
            <Panel
              header="How many tickets can I book for a match?" key="4"
            >
              <p>
                The maximum number of tickets you can book for a single match is only 6 tickets. However,
                these tickets<br /> have to be assigned to different fans.
                A fan cannot have more than one ticket assigned per match.
              </p>
            </Panel>
            <Panel
              header="Can I select the seat when I book a ticket for a match?" key="5">
              <p>
                No, you cannot select a specific seat when you book a ticket.
                You can only select the team you want and<br /> the ticket category.
                Only general admission is available for each category; first come, first served.
              </p>
            </Panel>
            <Panel
              header="How can I book a ticket and pay for it?"
              key="6"
            >
              <p><ol>
                <li> Sign in to your account.</li>
                <li>Go to <b>Matches,</b> and search for the match you want.</li>
                <li>On the matches list, for the required match, click<b> Book Ticket.</b></li>
                <li>Select your favorite team and specify the number of tickets you want, and then click <b>Proceed.</b></li>
                <li>Specify for whom you book each ticket, whether yourself or your approved dependents. You can also assign<br /> tickets for others;
                  just enter the Tazkarti ID of the person you want to assign the ticket for, and then click<br /><b> Add Another Fan.</b></li>
                <li>If you want to book tickets for another match, click Book <b>Another Match,</b> and follow the previous
                  steps to <br />add the tickets to your cart.</li>
                <li>When you finish adding the tickets to your cart, click<b> Proceed to Checkout.</b></li>
                <li>Review your order details, and if required, add or delete tickets for the same match, or book tickets for <br />another match.</li>
                <li>To place your order, click <b>Pay Now.</b></li>
                <li>Choose how you want to pay, whether by credit card or through Fawry network.
                  Enter any required information<br /> depending on your choice .</li>
                <li>Click <b>Confirm</b> when you finish.</li></ol><br />
                Note that if you choose to pay through Fawry network, you have to complete the payment within the <br />allowed time period to avoid cancelling your ticket application.
              </p>
            </Panel>
            <Panel
              header="Can I book tickets for others?"
              key="7"
            >
              <p>
                Yes, you can book tickets for others who have Tazkarti IDs, whether they are your dependents or other<br /> persons.

                To book a ticket for another person, follow these steps.<br />
                <ol><li>Sign in to your account.</li>
                  <li>Go to <b>Matches,</b> and search for the match you want.</li>
                  <li>On the matches list, for the required match, click <b>Book Ticket.</b></li>
                  <li>Select your favorite team and specify the number of tickets you want to book. Then click<b> Proceed.</b></li>
                  <li>Specify for whom you book each ticket. To assign tickets for others; just enter the Tazkarti ID of the
                    person you want to assign the ticket for, and then click<b> Add Another Fan.</b></li>
                  <li>Complete booking tickets and paying for them as usual.</li></ol>
              </p>
            </Panel>
            <Panel
              header="How can I get my tickets?"
              key="8"
            >
              <p>
                You can receive your tickets only after completing the payment process either by credit or through Fawry<br /> network.
                You can collect your tickets from any authorized outlet.
                Visit Our Stores page for more<br /> information.
              </p>
            </Panel>
            <Panel
              header="Can someone else collect my tickets?"
              key="9"
            >
              <p>
                Yes, you can authorize someone else to collect your tickets from an authorized outlet, whether this person<br />
                has a Tazkarti ID or not.<br /><br />

                To authorize someone to collect your tickets, do the following:
                <ol><li>Sign in to your account, and then click <b>My Profile.</b></li>
                  <li>Click <b>Authorize Friend to Collect.</b></li>
                  <li>Specify how to identify this person, whether by National ID or Tazkarti ID,
                    and then enter the person’s full name and ID number, or Tazkarti ID number.</li>
                  <li>Click<b> Authorize.</b></li></ol><br />
                This person can receive your tickets from authorized outlets after presenting his or her proof of identity.
              </p>
            </Panel>
            <Panel
              header="When can I receive my tickets?"
              key="10"
            >
              <p>
                You can receive your tickets from any of our authorized outlets directly after
                completing the payment<br /> process.


              </p>
            </Panel>
            <Panel
              header="When do stadium gates open?"
              key="11"
            >
              <p>
                Gate opening and closing times are announced each match day.
              </p>
            </Panel>
            <Panel
              header="I don’t want my ticket anymore; can I cancel it and get my money back?"
              key="12"
            >
              <p>
                Unfortunately, you cannot exchange or get a refund for your purchased tickets.
                Note also that no one <br />except you can use these tickets to attend the matches
                . So, be sure before booking or purchasing any<br /> ticket.
              </p>
            </Panel>
            <Panel
              header="I What are the things that I cannot bring with me to the stadium?"
              key="13"
            >
              <p>
                You cannot bring any of the following to the stadium.<br />
                <ul>
                  <li>Charger cable</li>
                  <li>Earphones</li>
                  <li>Lighter</li>
                  <li>Sharp objects</li>
                  <li>Water bottles</li>
                  <li>Perfumes and body sprays</li>
                  <li>Food</li>
                  <li>Fireworks</li>
                  <li>Alcohol</li>
                </ul>
              </p>
            </Panel>
          </Collapse>

          <div><b>For any further information or inquiries contact us at our hotline 15355.</b></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="footer">
          <div className="logo">
            <i className="fas fa-bolt"></i>

          </div>
          <ul className="socials">
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
          </ul>
          <div className="copyright">Copyright &copy; 2022</div>
          <BackTop>
            <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
          </BackTop>
        </div>
      </div>
    </div>
  );
}

export default AppFaq;
