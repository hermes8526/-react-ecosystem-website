import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import "./index.scss";
import default_logo from "../../assets/new/eco-logo.png";
import burgerImg from "../../assets/burger.png";
// import { inIframe } from "../../../Utils/methods";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      menuVisible: false,
    };
    this.outOfMenu = React.createRef();
  }  
  componentDidMount() {
    this.setState({      
    });
    document.addEventListener("mousedown", this.handleClick, true);
  }

  componentDidUpdate(prevProps) {    
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, true);
  }
  toggleMenu = () => {
    const { menuVisible } = this.state;
    this.setState({ menuVisible: !menuVisible });
  };
  click = () => {
    this.setState({ menuVisible: false });
  };
  onBl = () => {
    console.log("blur");
  };
  clickul = () => {
    this.setState({ menuVisible: false });
  };
  //  start of when click the outsite of menu
  handleClickOutSide() {
    this.setState({ menuVisible: false });
  }
  handleClick = (e) => {
    if (!this.outOfMenu.current.contains(e.target)) {
      this.handleClickOutSide();
    } else {
      return;
    }
  };
  // end of
  render() {    
    const { menuVisible, tabIndex } = this.state;
    const { onClickTab } = this.props;

    return (
      <header id="page-header">
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
              onClick={this.clickul}
              onBlurCapture={this.onBl}
              ref={this.outOfMenu}
            >
              <li className="nav-main-item profile">
                <a className="nav-main-link" onClick={() => window.open("https://brands.ecosystem.co.uk/signup", "_blank")}>
                  <span className="nav-main-link-name">
                    Create an Ecosystem
                  </span>
                </a>
              </li>
              <li className="nav-main-item profile">
                <a className="nav-main-link" onClick={() => window.open("https://brands.ecosystem.co.uk/", "_blank")}>
                  <span className="nav-main-link-name">
                    Log into your Ecosystem
                  </span>
                </a>
              </li> 
              <li className="nav-main-item">
                <a 
                  className={tabIndex == 0 ? "nav-main-link active" : "nav-main-link"}
                  onClick={() => {
                    onClickTab(0);
                    this.setState({ tabIndex: 0 });
                  }}
                >
                  <span className="nav-main-link-name">
                    EcoFeatures
                  </span>
                </a>
                {/* <NavLink
                  to={{
                    pathname: "/",
                  }}
                  className="nav-main-link"
                >                  
                  The Ecosystems
                </NavLink> */}
              </li>
              <li className="nav-main-item">
                <a 
                  className={tabIndex == 1 ? "nav-main-link active" : "nav-main-link"}
                  onClick={() => {
                    onClickTab(1);
                    this.setState({ tabIndex: 1 });
                  }}
                >
                  <span className="nav-main-link-name">
                    EcoChat
                  </span>
                </a>
              </li>
              <li className="nav-main-item">
                <a 
                  className={tabIndex == 2 ? "nav-main-link active" : "nav-main-link"}
                  onClick={() => {
                    onClickTab(2);
                    this.setState({ tabIndex: 2 });
                  }}
                >
                  <span className="nav-main-link-name">
                    EcoTokens
                  </span>
                </a>
              </li>
              <li className="nav-main-item">
                <a 
                  className={tabIndex == 3 ? "nav-main-link active" : "nav-main-link"}
                  onClick={() => {
                    onClickTab(3);
                    this.setState({ tabIndex: 3 });
                  }}
                >
                  <span className="nav-main-link-name">
                    EcoPay
                  </span>
                </a>                
              </li>
              <li className="nav-main-item">
                <a 
                  className={tabIndex == 4 ? "nav-main-link active" : "nav-main-link"}
                  onClick={() => {
                    onClickTab(4);
                    this.setState({ tabIndex: 4 });
                  }}
                >
                  <span className="nav-main-link-name">
                    EcoCRM
                  </span>
                </a>
              </li>
              <li className="nav-main-item">
                <NavLink
                  to={{
                    pathname: "/clubs",
                  }}
                  className="nav-main-link"
                >                  
                  EcoClubs
                </NavLink>
              </li>
              <li className="nav-main-item">
                <a 
                  className={tabIndex == 5 ? "nav-main-link active" : "nav-main-link"}
                  onClick={() => {
                    onClickTab(5);
                    this.setState({ tabIndex: 5 });
                  }}
                >
                  <span className="nav-main-link-name">
                    Meet the team
                  </span>
                </a>
              </li>
              {/* <li className="nav-main-item">
                <a 
                  className={tabIndex == 6 ? "nav-main-link active" : "nav-main-link"}
                  onClick={() => {
                    onClickTab(6);
                    this.setState({ tabIndex: 6 });
                  }}
                >
                  <span className="nav-main-link-name">
                    EcoValues
                  </span>
                </a>
              </li> */}
              <li className="nav-main-item">
                <a 
                  className={tabIndex == 7 ? "nav-main-link active" : "nav-main-link"}
                  onClick={() => {
                    onClickTab(7);
                    this.setState({ tabIndex: 7 });
                  }}
                >
                  <span className="nav-main-link-name">
                    Pricing Plans
                  </span>
                </a>
              </li>
              {/* <li className="nav-main-item">
                <a className="nav-main-link" onClick={() => window.open("https://weareeco.com/", "_blank")}>
                  <span className="nav-main-link-name">
                    EcoApp
                  </span>
                </a>
              </li> */}
              <li className="nav-main-item profile">
                <a className="nav-main-link" onClick={() => window.open("https://savingrobot.io/", "_blank")}>
                  <span className="nav-main-link-name">
                    See how much you'd save...
                  </span>
                </a>
              </li> 
            </ul>
            
            <button
              className={`burger ${menuVisible ? "hide" : "show"}`}
              onClick={() => {
                this.toggleMenu();
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
                <FontAwesomeIcon icon={faUser} />
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
                  <a className="btn btn-light btn-block text-center" onClick={() => window.open("https://brands.ecosystem.co.uk/", "_blank")}>
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
    );
  }
}

export default Header;
