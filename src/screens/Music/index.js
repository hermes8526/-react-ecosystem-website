import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import "./index.css";

import Frames from "../../assets/clubs/background_music.png";
import ExpatClubs from "../../assets/clubs/expat_clubs.png";
import EcosystemClubs from "../../assets/clubs/ecosystem_clubs.png";
import EcosystemClubsYellow from "../../assets/clubs/ecosystem_clubs_yellow.png";
import default_logo from "../../assets/new/eco-logo.png";
import burgerImg from "../../assets/burger.png";
import HeaderCountry from "../../assets/team/Unitedkingdom.png";
import LiveYourBest from "../../assets/clubs/live_your_best_music.png";
import Brand1 from "../../assets/clubs/brand_1.png";
import Brand2 from "../../assets/clubs/brand_2.png";
import Brand3 from "../../assets/clubs/brand_3.png";
import Brand4 from "../../assets/clubs/brand_4.png";
import BackLeft from "../../assets/clubs/back_left.png";
import BackRight from "../../assets/clubs/back_right.png";
import Phone from "../../assets/clubs/phone.png";
import Club1 from "../../assets/clubs/club_1.png";
import Club2 from "../../assets/clubs/club_2.png";
import Club3 from "../../assets/clubs/club_3.png";
import Club4 from "../../assets/clubs/club_4.png";

function Music() {
	const [menuVisible, setMenuVisible] = useState(false);
  const outOfMenu = useRef(null);

	useEffect(() => {
    document.addEventListener("mousedown", handleClick, true);
	}, []);

	const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  };

  const clickul = () => {
    setMenuVisible(false)
  };

  const handleClick = (e) => {
    if (outOfMenu.current 
      && !outOfMenu.current.contains(e.target)) {
      setMenuVisible(false)
    } 
    else {
      return;
    }
  };

  const onGetStarted = () => {
    window.open("https://brands.ecosystem.co.uk/signup", "_blank");
  };

	return (
		<div className="Div-Container">
			<header className='Header-Clubs-Music' id="page-header">
				<div className="content-header">
					<div className="heading">
						<div className='d-flex justify-content-center'>
							<button
        				className="header-music"
      				>
        			{/* <img src={logo ? logo : default_logo} height="60px" alt="logo" /> */}
      				</button>
              <button
                className="header-ecosystem"
              >
              </button>
						</div>

            <ul
              className={menuVisible ? "show" : "hide"}
              onClick={clickul}
              ref={outOfMenu}
            >
              <li className="nav-main-item profile">
                <a className="nav-main-link" onClick={() => window.open("https://brands.ecosystem.co.uk/signup", "_blank")}>
                  <span className="nav-main-link-name">
                    Create an Ecosystem
                  </span>
                </a>
              </li>
              <li className="nav-main-item profile">
                <a className="nav-main-link" onClick={() => window.open("https://brands.ecosystem.co.uk/signup", "_blank")}>
                  <span className="nav-main-link-name">
                    Log into your Ecosystem
                  </span>
                </a>
              </li> 
              <li className="nav-main-item">
                <NavLink
                  to={{
                    pathname: "/",
                  }}
                  className="nav-main-link"
                >                  
                  Ecosystem Home
                </NavLink>
              </li>
              <li className="nav-main-item">
                <NavLink
                  to={{
                    pathname: "/clubs",
                  }}
                  className="nav-main-link"
                >                  
                  Clubs Home
                </NavLink>
              </li>
            </ul>

            <button
              className={`burger ${menuVisible ? "hide" : "show"}`}
              onClick={() => {
                toggleMenu();
              }}
            >
              <img
                className="img-burger"
                src={burgerImg}
                width="30"
                alt="burger"
              />
            </button>
					</div>	

          <img className='Img-Header-Country' src={HeaderCountry} />

      		<div className="second_menu">
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn top-btn"
                id="page-header-notifications-dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {/* <i className="fas fa-user" /> */}
                <FontAwesomeIcon 
                  icon={faUserCircle} 
                  color={'#FFFFFF'}
                  size={'lg'}
                />
                <span className="badge badge-pill">Your Ecosystem</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-2 border-top">
                  <a className="btn btn-light btn-block text-center" onClick={() => window.open("https://brands.ecosystem.co.uk/signup", "_blank")}>
                    <span className="nav-main-link-name">
                      Create an Ecosystem
                    </span>
                  </a>
                  <a className="btn btn-light btn-block text-center" onClick={() => window.open("https://brands.ecosystem.co.uk/signup", "_blank")}>
                    <span className="nav-main-link-name">
                      Log into your Ecosystem
                    </span>
                  </a>       
                </div>
              </div>
            </div>
          </div>
				</div>
			</header>

			<img className="Img-Frames-Music" src={Frames} />

      <div className='Div-Content'>
        <img className='Img-Live-Best' src={LiveYourBest} />
        <p className='P-Title Text-41 text-center'>Your music club ecosystem is the heartbeat of your relationships with your fans and followers. Drive next level engagement, loyalty and growth in your community, to help them live their best life.</p>
        <p className='P-Title Text-41 poppins-semibold text-center Desktop'>
          It's quick a free to create your whitelabeled bespoke ecosystem.
        </p>
        <p className='P-Title Text-41 poppins-semibold text-center Mobile'>
          It's quick a free to create your<br/>whitelabeled bespoke ecosystem.
        </p>

        <div className='Div-Customer-Container mt-5'>
          <div className='Div-Customer Customer-1'>            
            <p className='poppins-regular Text-51 text-center'>Turn followers and fans into subscribed super members.</p>
          </div>
          <div className='Div-Customer Customer-2'>            
            <p className='poppins-regular Text-51 text-center'>Make your content Premium. Teaser via social media.</p>
          </div>
          <div className='Div-Customer Customer-3'>            
            <p className='poppins-regular Text-51 text-center'>Better engagement by rewarding your fan loyalty.</p>
          </div>
          <div className='Div-Customer Customer-4'>            
            <p className='poppins-regular Text-51 text-center'>Monetise through your marketplace and drive referrals.</p>
          </div>
        </div>

        <div className='Div-Brand-Container'>
          <img className='Img-Brand' src={Brand1} />
          <img className='Img-Brand' src={Brand2} />
          <img className='Img-Brand' src={Brand3} />
          <img className='Img-Brand' src={Brand4} />
        </div>

        <div className='Div-Buttons mt-5'>
          <button className="Btn Btn-Purple" onClick={onGetStarted}>
            Create your Ecosystem
          </button>
          <button className="Btn Btn-Yellow" onClick={onGetStarted}>
            Request a demo and more info
          </button>
        </div>

        <Container className='mt-5'>
          <Row>
            <Col xs lg="6 d-flex justify-content-center mb-5 p-0">
              <div className='Div-Heartbeat-Left'>
                <img className='Background' src={BackLeft} />
                <img className='Img-Phone' src={Phone} />
              </div>              
            </Col>
            <Col xs lg="6 d-flex justify-content-center">
              <div className='Div-Heartbeat-Right'>
                <p className='Text-2 poppins-semibold'>The heartbeat of your<br/>community interaction.</p>
                <div className='Div-Heartbeat-Content'>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='Desktop'>
          <Row>
            <Col xs lg="6 d-flex justify-content-center mb-5">
              <div className='Div-Heartbeat-Right'>
                <p className='Text-2 poppins-semibold'>Rewards and monetise<br/>your new members.</p>
                <div className='Div-Heartbeat-Content'>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                </div>
                <div className='Div-Brand-Container'>
                  <img className='Img-Brand' src={Brand1} />
                  <img className='Img-Brand' src={Brand2} />
                  <img className='Img-Brand' src={Brand3} />
                  <img className='Img-Brand' src={Brand4} />
                </div>
              </div>
            </Col>
            <Col xs lg="6 d-flex justify-content-center mb-5 p-0">
              <div className='Div-Heartbeat-Left pr-0 pl-5'>
                <img className='Background' src={BackRight} />
                <img className='Img-Phone' src={Phone} />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='Mobile'>
          <Row>
            <Col xs lg="6 d-flex justify-content-center p-0">
              <div className='Div-Heartbeat-Left pr-0 pl-5'>
                <img className='Background' src={BackRight} />
                <img className='Img-Phone' src={Phone} />
              </div>
            </Col>
            <Col xs lg="6 d-flex justify-content-center mb-5">
              <div className='Div-Heartbeat-Right'>
                <p className='Text-2 poppins-semibold'>Rewards and monetise<br/>your new members.</p>
                <div className='Div-Heartbeat-Content'>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                  <p className='Text-42 poppins-regular'>
                    Your music club ecosystem is the heartbeat of your relationships with your fans and followers
                  </p>
                </div>
                <div className='Div-Brand-Container'>
                  <img className='Img-Brand' src={Brand1} />
                  <img className='Img-Brand' src={Brand2} />
                  <img className='Img-Brand' src={Brand3} />
                  <img className='Img-Brand' src={Brand4} />
                </div>
              </div>
            </Col>            
          </Row>
        </Container>

        <p className='Text-2 poppins-semibold'>Checkout the latest music clubs.</p>

        <div className='Div-Clubs'>
          <div className='Div-Club'>
            <img src={Club1} />
            <p className='poppins-medium mb-2'>Brand name</p>
            <p className='Text-51 poppins-regular mb-2'>Turn followers and<br/>fans into subscribed<br/>super members.</p>
          </div>
          <div className='Div-Club'>
            <img src={Club2} />
            <p className='poppins-medium mb-2'>Brand name</p>
            <p className='Text-51 poppins-regular mb-2'>Turn followers and<br/>fans into subscribed<br/>super members.</p>
          </div>
          <div className='Div-Club'>
            <img src={Club3} />
            <p className='poppins-medium mb-2'>Brand name</p>
            <p className='Text-51 poppins-regular mb-2'>Turn followers and<br/>fans into subscribed<br/>super members.</p>
          </div>
          <div className='Div-Club'>
            <img src={Club4} />
            <p className='poppins-medium mb-2'>Brand name</p>
            <p className='Text-51 poppins-regular mb-2'>Turn followers and<br/>fans into subscribed<br/>super members.</p>
          </div>
        </div>

        <div className='Div-Buttons mt-5'>
          <button className="Btn Btn-Purple" onClick={onGetStarted}>
            Create your Ecosystem
          </button>
          <button className="Btn Btn-Yellow" onClick={onGetStarted}>
            Request a demo and more info
          </button>
        </div>

      </div>      

      <div className='Div-Footer'>
        <img src={EcosystemClubs} />
        <p className="address">
          All rights reserved Ecosystem Labs Ltd
          <br />
          UK - 22 Notting Hill Gate, London, W11 3JE
          <br />
          USA - 1601 Dove Street, Newport Beach, 9266
        </p>
      </div>
		</div>
	)
}

export default Music;


