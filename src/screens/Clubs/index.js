import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import "./index.css";

import Frames from "../../assets/clubs/frames.png";
import ExpatClubs from "../../assets/clubs/expat_clubs.png";
import EcosystemClubs from "../../assets/clubs/ecosystem_clubs.png";
import EcosystemClubsYellow from "../../assets/clubs/ecosystem_clubs_yellow.png";
import default_logo from "../../assets/new/eco-logo.png";
import burgerImg from "../../assets/burger.png";
import HeaderCountry from "../../assets/team/Unitedkingdom.png";
import LifeBest from "../../assets/new/live_your_best.png";
import LiveYourBest from "../../assets/clubs/live_your_best_life.png";

function Clubs() {
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

	return (
		<div className="Div-Container">
			<header className='Header-Clubs' id="page-header">
				<div className="content-header">
					<div className="heading">
						<div className='d-flex justify-content-center'>
							<button
        				className="header-logo"
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

			<img className="Img-Frames" src={Frames} />

      <div className='Div-Content'>
        <img className='Img-Live-Best-Clubs' src={LiveYourBest} />
        <p className='P-Title Text-43 text-center'>
          Create your bespoke community club for your sector, to<br/>engage, reward, monetise and grow your community.
        </p>
        <div className='Div-Category-Container mt-5'>
          <Link className='Div-Category Music' to='/clubs/music'>
            <p className='Text-41 poppins-bold'><b>Music</b></p>
          </Link>
          <Link className='Div-Category Wellness'>
            <p className='Text-41 poppins-bold'><b>Wellness</b></p>
          </Link>
          <Link className='Div-Category Culture'>
            <p className='Text-41 poppins-bold'><b>Culture</b></p>
          </Link>
          <Link className='Div-Category Sport' to='/clubs/sport'>
            <p className='Text-41 poppins-bold'><b>Sport</b></p>
          </Link>
          <Link className='Div-Category Shopping'>
            <p className='Text-41 poppins-bold'><b>Shopping</b></p>
          </Link>
          <Link className='Div-Category Travel'>
            <p className='Text-41 poppins-bold'><b>Travel</b></p>
          </Link>
          <Link className='Div-Category Property'>
            <p className='Text-41 poppins-bold'><b>Property</b></p>
          </Link>
          <Link className='Div-Category Cars'>
            <p className='Text-41 poppins-bold'><b>Cars</b></p>
          </Link>
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

export default Clubs;


