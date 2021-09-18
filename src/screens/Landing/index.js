import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";

import Logo from "../../assets/new/eco-logo.png";
import EcoTokens from "../../assets/new/ecotokens.png";
import EcosystemTM from "../../assets/new/ecosystem_tm.png";
import EcosystemTMBlack from "../../assets/new/ecosystem_tm_black.png";
import LifeBest from "../../assets/new/live_your_best.png";
import HelpCommunity from "../../assets/new/help_your_community.png";
import SectionBg from "../../assets/new/bg_ecosystem.png";
import BrandLogos from "../../assets/new/logos.png";
import Lettering from "../../assets/new/lettering.png";

import Property from "../../assets/new/property.png";
import Tasker from "../../assets/new/tasker.png";
import ControlHub from "../../assets/new/controlhub.png";
import AI from "../../assets/new/ai.png";
import Chatbot from "../../assets/new/chatbot.png";
import Marketplace from "../../assets/new/marketplace.png";
import Wallet from "../../assets/new/wallet.png";
import EcoID from "../../assets/new/ecoid.png";
import Community from "../../assets/new/community.png";

import UKEcopay from "../../assets/new/uk_ecopay.png";
import USAEcopay from "../../assets/new/usa_ecopay.png";
import Quote from "../../assets/new/quote.png";

import Logo1 from "../../assets/new/logos/1.png";
import Logo2 from "../../assets/new/logos/2.png";
import Logo3 from "../../assets/new/logos/3.png";
import Logo4 from "../../assets/new/logos/4.png";
import Logo5 from "../../assets/new/logos/5.png";
import Logo6 from "../../assets/new/logos/6.png";

import USA from "../../assets/new/usa.jpg";
import UK from "../../assets/new/uk.jpg";
import Interaction from "../../assets/gifs/3.png";
import Member1 from "../../assets/community-members/1.png";
import Member2 from "../../assets/community-members/2.png";
import Member3 from "../../assets/community-members/3.png";
import Barclaycard from "../../assets/gifs/phone_home.png";
import Introduction from "../../assets/gifs/home_right.png";
import Introduction1 from "../../assets/gifs/intro_1.png";

import communityInsider from "../../assets/community_insider.png";
import communityTokens from "../../assets/community_tokens.png";
import communitySolidarity from "../../assets/community_solidarity.png";
import communityMember from "../../assets/community_member.png";
import ecoChat from "../../assets/eco_chat.png";
import ecoID from "../../assets/eco_id.png";
import ecoStore from "../../assets/eco_store.png";
import ecoPay from "../../assets/eco_pay.png";
import ecoTokens from "../../assets/eco_tokens.png";
import ecoCRM from "../../assets/eco_crm.png";
import ecoPayTokens from "../../assets/eco_pay_tokens.png";
import ecoPayTokensMobile from "../../assets/eco_pay_tokens_mobile.png";
import ecoTokens1 from "../../assets/gifs/home_right.png";
import ecoTokens1Gif from "../../assets/gifs/video_2.gif";
import ecoTokens2 from "../../assets/gifs/eco_tokens_2.png";
import bgEcoTokens from "../../assets/bg_ecotokens.png";
import ecoPost from "../../assets/eco_post.png";
import ecoAnswer from "../../assets/eco_answer.png";
import ecoHelp from "../../assets/eco_help.png";
import ecoRefer from "../../assets/eco_refer.png";
import ecoBuy from "../../assets/eco_buy.png";
import ecoShop from "../../assets/eco_shop.png";
import ecoLeave from "../../assets/eco_leave.png";
import ecoValues from "../../assets/eco_values.png";
import liveYourBestLifeL from "../../assets/live_your_best_life_l.png";
import value1 from "../../assets/value_1.png";
import value2 from "../../assets/value_2.png";
import value3 from "../../assets/value_3.png";
import value4 from "../../assets/value_4.png";
import value5 from "../../assets/value_5.png";
import value6 from "../../assets/value_6.png";
import memberAmelia from "../../assets/team/Amelia.png";
import memberCameron from "../../assets/team/Cameron.png";
import memberChris from "../../assets/team/Chris.png";
import memberLucas from "../../assets/team/Lucas.png";
import memberMark from "../../assets/team/Mark.png";
import memberDavid from "../../assets/team/David.png";
import memberNick from "../../assets/team/Nick.png";
import memberNidhi from "../../assets/team/Nidhi.png";
import memberRyle from "../../assets/team/Ryle.png";
import memberLinkedIn from "../../assets/team/linkedin.png";
import memberGermany from "../../assets/team/Germany.png";
import memberSpain from "../../assets/team/Spain.png";
import memberUK from "../../assets/team/Unitedkingdom.png";
import memberUS from "../../assets/team/Unitedstates.png";
import ecosystemTrial from "../../assets/ecosystem_trial.png";
import ecosystemGo from "../../assets/ecosystem_go.png";
import ecosystemPro from "../../assets/ecosystem_pro.png";
import iconCommunity from "../../assets/icon_community.png";
import iconCRM from "../../assets/icon_crm.png";
import iconEngagement from "../../assets/icon_engagement.png";
import iconReviews from "../../assets/icon_reviews.png";
import iconForumFeeds from "../../assets/icon_forum_feeds.png";
import iconGamification from "../../assets/icon_gamification.png";
import iconKYC from "../../assets/icon_kyc.png";
import iconLiveChat from "../../assets/icon_live_chat.png";
import iconMarketplace from "../../assets/icon_marketplace.png";
import iconOpenBanking from "../../assets/icon_open_banking.png";
import iconPollsSurvey from "../../assets/icon_polls_surveys.png";
import iconReferrals from "../../assets/icon_referrals.png";
import iconRewardsPerks from "../../assets/icon_rewards_perks.png";
import iconCheck from "../../assets/icon_check.png";
import iconArticle from "../../assets/icon_article.png";
import iconGames from "../../assets/icon_games.png";
import iconGroupChat from "../../assets/icon_group_chat.png";
import iconTaskerChat from "../../assets/icon_tasker_chat.png";
import iconVideoStream from "../../assets/icon_videostream.png";
import member1 from "../../assets/member_1.png";
import member2 from "../../assets/member_2.png";
import member3 from "../../assets/member_3.png";
import member4 from "../../assets/member_4.png";
import member5 from "../../assets/member_5.png";
import member6 from "../../assets/member_6.png";
import member7 from "../../assets/member_7.png";
import member8 from "../../assets/member_8.png";
import member9 from "../../assets/member_9.png";
import member10 from "../../assets/member_10.png";
import member11 from "../../assets/member_11.png";
import member12 from "../../assets/member_12.png";
import member13 from "../../assets/member_13.png";
import member14 from "../../assets/member_14.png";
import member15 from "../../assets/member_15.png";
import itemIcon1 from "../../assets/2_icon_1.png";
import itemIcon2 from "../../assets/2_icon_2.png";
import itemIcon3 from "../../assets/2_icon_3.png";
import social from "../../assets/social.png";
import check from "../../assets/check.png";
import ecoTokensRight from "../../assets/eco_tokens_right.png";
import bgEcoTokensLeft from "../../assets/bg_eco_tokens_left.png";
import ecoStorePhone from "../../assets/eco_store_phone.png";
import iconStore1 from "../../assets/icon_store_1.png";
import iconStore2 from "../../assets/icon_store_2.png";
import iconStore3 from "../../assets/icon_store_3.png";
import iconStore4 from "../../assets/icon_store_4.png";
import ecoIDPhone from "../../assets/eco_id_phone.png";
import ecoID1 from "../../assets/eco_id_1.png";
import ecoID2 from "../../assets/eco_id_2.png";
import ecoID3 from "../../assets/eco_id_3.png";
import ecoID4 from "../../assets/eco_id_4.png";
import iconUncheckRed from "../../assets/icon_uncheck_red.png";
import iconCheckYellow from "../../assets/icon_check_yellow.png";
import iconCheckGreen from "../../assets/icon_check_green.png";
import ecoTeam from "../../assets/eco_team.png";

import "./index.css";
import Firebase from "../../firebasehelper";
import Header from "../../components/Header";

function Landing() {
  const [selectedCountry, setSelectedCountry] = useState("UK");
  const [retailers, setRetailers] = useState([]);
  const [deactivated, setDeactivated] = useState({});
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    Firebase.getAllRetailers((res) => {
      const keys = Object.keys(res);
      const items = keys.map((key) => ({
        ...res[key],
        id: key,
      }));
      setRetailers(items);
    });

    Firebase.getAllDeactiveRetailers((res) => {
      setDeactivated(res);
    });

    checkDeviceStatus();
    window.addEventListener("resize", checkDeviceStatus);
  }, []);

  const checkDeviceStatus = () => {
    setMobileView(window.innerWidth < 550);
  };

  const onGetStarted = () => {
    window.open("https://brands.ecosystem.co.uk/signup", "_blank");
  };

  const onPricingPlan = () => {
    window.open("https://brands.ecosystem.co.uk/signup", "_blank");
  };

  const checkTerritory = (retailer, territory) => {
    if (territory === "UK") {
      return !retailer.territory || retailer.territory === "UK";
    } else {
      return retailer.territory === "USA";
    }
  };
  const filteredRetailers = retailers
    .filter(
      (retailer) =>
        checkTerritory(retailer, selectedCountry) &&
        !deactivated[retailer.id] &&
        retailer.top10 &&
        retailer.top10 !== "none"
    )
    .sort((a, b) => a.top10 - b.top10)
    .slice(0, 20);

  const descriptionRef = useRef(null);
  const communityRef = useRef(null);
  const tokensRef = useRef(null);
  const communityMemberRef = useRef(null);
  const ecoTokensRef = useRef(null);
  const ecoValuesRef = useRef(null);
  const meetTeamRef = useRef(null);
  const ecoCRMRef = useRef(null);
  const pricingPlanRef = useRef(null);

  const scrollToRef = (ref) => {
    // console.log('ref', ref);
    if (ref && ref.current) {
      window.scrollTo(0, ref.current.offsetTop - 70);
    }
  };

  const onClickTab = (index) => {
    if (index == 0) {
      // The Ecosystems
      scrollToRef(communityRef); //descriptionRef
    } else if (index == 1) {
      // EcoChat
      scrollToRef(communityMemberRef);
    } else if (index == 2) {
      // EcoTokens
      scrollToRef(ecoTokensRef);
    } else if (index == 3) {
      // EcoPay
      scrollToRef(tokensRef);
    } else if (index == 4) {
      // EcoCRM
      scrollToRef(ecoCRMRef);
    } else if (index == 5) {
      // Meet the team
      scrollToRef(meetTeamRef);
    }
    // else if (index == 6) { // EcoValues
    //   scrollToRef(ecoValuesRef);
    // }
    else if (index == 6) {
      // EcoiD
      window.open("https://ecoid.io/", "_blank");
    } else if (index == 7) {
      // Pricing Plan
      scrollToRef(pricingPlanRef);
    }
  };

  return (
    <div className="app-container">
      <Header screen="wallet" onClickTab={onClickTab} />
      <div className="introduction-container mt-5" ref={descriptionRef}>
        <div className="description">
          {!isMobileView && (
            <img
              className="ecosystem-tm mb-5"
              src={EcosystemTMBlack}
              alt="ecosystem-tm"
            />
          )}

          {isMobileView && (
            <p className="P-What-Ecosystem Text-2 poppins-bold mb-2">
              The private social network
              <br />
              exclusively for your brand.
            </p>
          )}

          {!isMobileView && (
            <p className="P-What-Ecosystem Text-1 poppins-bold mb-4">
              The private social network
              <br />
              exclusively for your brand.
            </p>
          )}

          {isMobileView && (
            <p className="Text-42 poppins-medium text-center ls-30 mb-2">
              Your whitelabel community platform
              <br />
              turns unengaged customers & followers
              <br />
              info super-engaged loyal members.
            </p>
          )}
          {!isMobileView && (
            <p className="Text-4 poppins-medium mb-4">
              Your whitelabel community platform turns
              <br />
              unengaged customers & followers info
              <br />
              super-engaged loyal members.
            </p>
          )}
          <button
            className="primary-btn mobile mb-3 mt-3"
            onClick={onGetStarted}
          >
            Create your Ecosystem
          </button>
          <img className="life-best" src={LifeBest} alt="life-best" />
          <img
            className="help-community mb-3"
            src={HelpCommunity}
            alt="help-community"
          />
          <div className="brand-logo-group mt-5">
            <div className="brand-logo-row">
              <img src={Logo1} alt="logo" />
              <img src={Logo2} alt="logo" />
              <img src={Logo3} alt="logo" />
            </div>
            <div className="brand-logo-row">
              <img src={Logo4} alt="logo" />
              <img src={Logo5} alt="logo" />
              <img src={Logo6} alt="logo" />
            </div>
          </div>
          <div className="gifs-container-mobile">
            <div className="introduction-gif-wrapper">
              <img
                className="introduction"
                src={Introduction}
                alt="introduction"
              />
              <img
                className="introduction gif"
                src={Introduction1}
                alt="introduction"
              />
            </div>
          </div>

          <button className="primary-btn mb-5 mt-5" onClick={onGetStarted}>
            Create your Ecosystem
          </button>
        </div>
        <div className="instruction-img-container">
          <img
            src={SectionBg}
            className="grey-container"
            alt="section-bg"
          ></img>
          <img className="barclaycard" src={Introduction} alt="introduction" />
          <img
            className="barclaycard gif"
            src={Barclaycard}
            alt="introduction"
          />
          <img className="introduction" src={Introduction} alt="introduction" />
          <img
            className="introduction gif"
            src={Introduction1}
            alt="introduction"
          />
        </div>
      </div>

      {!isMobileView && (
        <div className="Div-Ecosystem mt-5 mb-5">
          <Container>
            <Row>
              <Col xs lg="6 d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column">
                  <p className="Text-01 poppins-bold mb-4">
                    What is an Ecosystem?
                  </p>
                  <div className="d-flex justify-content-center flex-column">
                    <div className="Div-Ecosystem-Content">
                      <div className="Div-Ecosystem-Item mb-1">
                        <img className="" src={check} />
                        <p className="Text-41 ml-2">
                          Reward your community with retail tokens.
                        </p>
                      </div>
                      <div className="Div-Ecosystem-Item mb-1">
                        <img className="" src={check} />
                        <p className="Text-41 ml-2">
                          Engage your members with exclusive content.
                        </p>
                      </div>
                      <div className="Div-Ecosystem-Item mb-1">
                        <img className="" src={check} />
                        <p className="Text-41 ml-2">
                          Super-boost customer loyalty and retention.
                        </p>
                      </div>
                      <div className="Div-Ecosystem-Item mb-1">
                        <img className="" src={check} />
                        <p className="Text-41 ml-2">
                          Incentivise referrals and grow your community.
                        </p>
                      </div>
                      <div className="Div-Ecosystem-Item mb-1">
                        <img className="" src={check} />
                        <p className="Text-41 ml-2">
                          Manage your brand campaigns immersively.
                        </p>
                      </div>
                      <div className="Div-Ecosystem-Item mb-1">
                        <img className="" src={check} />
                        <p className="Text-41 ml-2">
                          Drive vast insights through your analytics tools.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs lg="6">
                <div className="Div-Ecosystem-Wrapper">
                  <img className="" src={social} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {!isMobileView && (
        <Container className="C-EcoChat">
          <Row>
            <Col md="auto d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
                <div className="Div-Section-Item">
                  <img className="Img-Item-Top" src={itemIcon2} />
                  <img className="mb-4" src={ecoChat} />
                  <p className="text-center">
                    Your community messaging app
                    <br />
                    for free, secure and fast chatting
                    <br />
                    between your groups or DMs.
                    <br />
                    <br />
                    Host live streaming and videos,
                    <br />
                    run polls between groups, create
                    <br />
                    events, split costs and plan your
                    <br />
                    timeline, to live your best life.
                  </p>
                  <button className="primary-btn" onClick={onPricingPlan}>
                    Create your Ecosystem
                  </button>
                  <div className="Div-Item-Member mt-4">
                    <img className="" src={member4} />
                    <p className="Text-5 ml-2">
                      "This is WeChat for the western
                      <br />
                      world but 10x better. I Love it!"
                    </p>
                  </div>
                  <div className="Div-Item-Member">
                    <img className="" src={member5} />
                    <p className="Text-5 ml-2">
                      "This is everything I need to run my
                      <br />
                      personal life and organize friends."
                    </p>
                  </div>
                  <div className="Div-Item-Member mb-3">
                    <img className="" src={member6} />
                    <p className="Text-5 ml-2">
                      "It's like whatsapp, instagram
                      <br />
                      and facebook, but much better."
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column">
                <div
                  className="Div-Ecosystem-Header mb-4 p-5"
                  ref={communityRef}
                >
                  <p className="Text-1 poppins-semibold mb-0">
                    What are the social features?
                  </p>
                  <div className="d-flex justify-content-center">
                    {/* <img className="Img-Logo mr-3" src={Logo} alt="logo" /> */}
                    <img
                      className="Img-Ecosystem mt-0"
                      src={ecoChat}
                      alt="eco-system"
                    ></img>
                  </div>
                </div>
                <div className="Div-Options-Desktop mb-5">
                  <img className="Background" src={bgEcoTokens} />
                  <div className="Div-Options-Desktop-Content">
                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">
                          {isMobileView ? "Forum" : "Forum & feeds"}
                        </p>
                        <img className="Img-Option-Icon" src={iconForumFeeds} />
                      </div>
                      <p className="text-center P-Option-Content">
                        Own your social network, growing user content and
                        interactuon in a happy place.
                      </p>
                      <img className="Img-Option-Logo" src={ecoChat} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">
                          {isMobileView ? "Polls" : "Polls & surveys"}
                        </p>
                        <img
                          className="Img-Option-Icon"
                          src={iconPollsSurvey}
                        />
                      </div>
                      <p className="text-center P-Option-Content">
                        Drive feedback, grow your touch points and help your
                        community feel belonging.
                      </p>
                      <img className="Img-Option-Logo" src={ecoChat} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">Articles & Topics</p>
                        <img className="Img-Option-Icon" src={iconArticle} />
                      </div>
                      <p className="text-center P-Option-Content">
                        Long form articles develop into your culture. Hot topics
                        drive conversation traction.
                      </p>
                      <img className="Img-Option-Logo" src={ecoChat} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">
                          {isMobileView ? "Video" : "Video & Stream"}
                        </p>
                        <img
                          className="Img-Option-Icon"
                          src={iconVideoStream}
                        />
                      </div>
                      <p className="text-center P-Option-Content">
                        Your streaming platform for community wide live events
                        and direct user appointments.
                      </p>
                      <img className="Img-Option-Logo" src={ecoPay} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">Gamification</p>
                        <img
                          className="Img-Option-Icon"
                          src={iconGamification}
                        />
                      </div>
                      <p className="text-center P-Option-Content">
                        Set engaging tasks for your community and reward actions
                        with tokens.
                      </p>
                      <img className="Img-Option-Logo" src={ecoPay} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">
                          {isMobileView ? "Games" : "Games & Goals"}
                        </p>
                        <img className="Img-Option-Icon" src={iconGames} />
                      </div>
                      <p className="text-center P-Option-Content">
                        Set engaging tasks for your community and reward actions
                        with tokens.
                      </p>
                      <img className="Img-Option-Logo" src={ecoCRM} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">Marketplace</p>
                        <img
                          className="Img-Option-Icon"
                          src={iconMarketplace}
                        />
                      </div>
                      <p className="text-center P-Option-Content">
                        Your pop up digital marketplace for subscriptions, quick
                        buys and group splitting.
                      </p>
                      <img className="Img-Option-Logo" src={ecoStore} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">Referrals</p>
                        <img className="Img-Option-Icon" src={iconReferrals} />
                      </div>
                      <p className="text-center P-Option-Content">
                        Make referrals rewarding and slick. Drive organic growth
                        via your user networks.
                      </p>
                      <img className="Img-Option-Logo" src={ecoChat} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">
                          {isMobileView ? "Group chat" : "Group chat"}
                        </p>
                        <img className="Img-Option-Icon" src={iconGroupChat} />
                      </div>
                      <p className="text-center P-Option-Content">
                        Your community are able to build groups, chat and then
                        manage their lives together.
                      </p>
                      <img className="Img-Option-Logo" src={ecoCRM} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">
                          {isMobileView ? "Service chat" : "Service chat"}
                        </p>
                        <img className="Img-Option-Icon" src={iconLiveChat} />
                      </div>
                      <p className="text-center P-Option-Content">
                        Chat linked to tickets with multiple users and taskers
                        solving a wide array of issues.
                      </p>
                      <img className="Img-Option-Logo" src={ecoChat} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">Appointments</p>
                        <img className="Img-Option-Icon" src={iconTaskerChat} />
                      </div>
                      <p className="text-center P-Option-Content">
                        Book appointments with your community, meeting in person
                        or via digital chat and video.
                      </p>
                      <img className="Img-Option-Logo" src={ecoPay} />
                    </div>

                    <div className="Div-Option-Wrapper">
                      <div className="Div-Option-Header">
                        <p className="Text-3">
                          {isMobileView ? "Reviews" : "Reviews hub"}
                        </p>
                        <img className="Img-Option-Icon" src={iconReviews} />
                      </div>
                      <p className="text-center P-Option-Content">
                        Invite your customers to review service, making it
                        rewarding to answer.
                      </p>
                      <img className="Img-Option-Logo" src={ecoCRM} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {!isMobileView && (
        <Container className="C-EcoChat">
          <img className="Img-Eco-Tokens-Left" src={bgEcoTokensLeft} />
          <Row>
            <Col md="auto d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
                <div className="Div-Section-Item">
                  <img className="Img-Item-Top" src={itemIcon1} />
                  <img className="mb-4" src={ecoTokens} />
                  <p className="text-center mb-1">
                    Your mobile payment friend with
                    <br />
                    benefits saves you money on every
                    <br />
                    payment you make through it.
                  </p>
                  <p className="poppins-semibold text-center mb-1">
                    Earn tokens
                  </p>
                  <p className="text-center">
                    Make it fun and compelling for
                    <br />
                    visitors to purchase, share with
                    <br />
                    friends and give their feedback.
                  </p>
                  <button className="primary-btn" onClick={onPricingPlan}>
                    Create your Ecosystem
                  </button>

                  <div className="Div-Item-Member mt-4">
                    <img className="" src={member10} />
                    <p className="Text-5 ml-2">
                      "This engaged and grew our faith
                      <br />
                      based audience to new heights."
                    </p>
                  </div>
                  <div className="Div-Item-Member">
                    <img className="" src={member11} />
                    <p className="Text-5 ml-2">
                      "Gamified fitness tracking is
                      <br />
                      so rewarding for my members."
                    </p>
                  </div>
                  <div className="Div-Item-Member mb-3">
                    <img className="" src={member12} />
                    <p className="Text-5 ml-2">
                      "Amazing tool to motivate
                      <br />
                      followers to boost wellness."
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column">
                <p className="Text-2 poppins-semibold mt-5">
                  How do we gamify the experience?
                </p>
                <div className="Div-Eco-Tokens-Desktop-Category">
                  <div className="Div-Eco-Category-Desktop-Wrapper">
                    <img className="" src={ecoPost} />
                    <p>
                      Post ideas, questions and inspo to the community forum.
                    </p>
                  </div>
                  <div className="Div-Eco-Category-Desktop-Wrapper">
                    <img className="" src={ecoAnswer} />
                    <p>Answer community polls to give your opinions.</p>
                  </div>
                  <div className="Div-Eco-Category-Desktop-Wrapper">
                    <img className="" src={ecoHelp} />
                    <p>Help other community members through your skills.</p>
                  </div>
                  <div className="Div-Eco-Category-Desktop-Wrapper">
                    <img className="" src={ecoRefer} />
                    <p>Refer your friends to join the community.</p>
                  </div>
                  <div className="Div-Eco-Category-Desktop-Wrapper">
                    <img className="" src={ecoBuy} />
                    <p>Buy products from the community marketplace.</p>
                  </div>
                  <div className="Div-Eco-Category-Desktop-Wrapper">
                    <img className="" src={ecoShop} />
                    <p>Shop with our retailers friends who gift you tokens.</p>
                  </div>
                  <div className="Div-Eco-Category-Desktop-Wrapper">
                    <img className="" src={ecoLeave} />
                    <p>Leave positive reviews.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="auto">
              <div className="Div-Eco-Tokens-Right">
                <img
                  className="Img-Eco-Tokens mr-4 mt-5 mb-3"
                  src={ecoTokens}
                />
                <img className="Img-Eco-Tokens-Phone" src={ecoTokensRight} />
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {!isMobileView && (
        <Container className="C-EcoPay">
          <img className="Img-Eco-Pay-Right" src={bgEcoTokens} />
          <Row>
            <Col md="auto d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
                <div className="Div-Section-Item">
                  <img className="Img-Item-Top" src={itemIcon1} />
                  <img className="mb-4" src={ecoPay} />
                  <p className="text-center mb-1">
                    Your mobile payment friend with
                    <br />
                    benefits saves you money on every
                    <br />
                    payment you make through it.
                  </p>
                  <p className="poppins-semibold text-center mb-1">
                    Spend tokens
                  </p>
                  <p className="text-center">
                    Make it fun and compelling for
                    <br />
                    visitors to purchase, share with
                    <br />
                    friends and give their feedback.
                  </p>
                  <button className="primary-btn" onClick={onPricingPlan}>
                    Create your Ecosystem
                  </button>

                  <div className="Div-Item-Member mt-4">
                    <img className="" src={member1} />
                    <p className="Text-5 ml-2">
                      "I've saved £46 off my shopping
                      <br />
                      online and in store this month."
                    </p>
                  </div>
                  <div className="Div-Item-Member">
                    <img className="" src={member2} />
                    <p className="Text-5 ml-2">
                      "All of my favourite brand are on it,
                      <br />I just linked my card and saved."
                    </p>
                  </div>
                  <div className="Div-Item-Member mb-3">
                    <img className="" src={member3} />
                    <p className="Text-5 ml-2">
                      "It's quick and easy, I don't even
                      <br />
                      need to use a card or contactless."
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="Div-Eco-Pay" ref={tokensRef}>
                <div className="best-experience-title-container">
                  <p className="Text-2 poppins-semibold mb-0">
                    How do we make loyalty rewarding?
                  </p>
                  <img className="mr-3" src={ecoPay} alt="eco-tokens"></img>
                </div>

                <div className="best-exp-content">
                  <div className="retailers">
                    <div className="retailers-tab-container">
                      <p
                        className={classNames("retailer-tab", {
                          selected: selectedCountry === "USA",
                        })}
                        onClick={() => {
                          setSelectedCountry("USA");
                        }}
                      >
                        <img src={USA} alt="flag"></img>Top 20 US retailers
                      </p>
                      <p
                        className={classNames("retailer-tab", {
                          selected: selectedCountry === "UK",
                        })}
                        onClick={() => {
                          setSelectedCountry("UK");
                        }}
                      >
                        <img src={UK} alt="flag"></img>Top 20 UK retailers
                      </p>
                    </div>
                    <div className="retailers-container">
                      {filteredRetailers.map((retailer, index) => (
                        <div className="retailer-item" key={index}>
                          <img src={retailer.logo} alt="logo" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <img
                    className="ecopay-img"
                    src={selectedCountry === "USA" ? USAEcopay : UKEcopay}
                    alt="ecopay"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {!isMobileView && (
        <Container className="C-EcoChat">
          <img className="Img-Eco-Tokens-Left" src={bgEcoTokensLeft} />
          <Row>
            <Col md="auto d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
                <div className="Div-Section-Item">
                  <img className="Img-Item-Top" src={itemIcon1} />
                  <img className="mb-4" src={ecoStore} />
                  <p className="text-center mb-1">
                    Your PS2 safe, pop up digital
                    <br />
                    marketplace for subscriptions,
                    <br />
                    quick buys and group splitting.
                  </p>
                  <p className="poppins-semibold text-center mb-1">
                    Gamified shopping
                  </p>
                  <p className="text-center">
                    Make it fun and compelling for
                    <br />
                    visitors to purchase, share with
                    <br />
                    friends and give their feedback.
                  </p>
                  <button className="primary-btn" onClick={onPricingPlan}>
                    Create your Ecosystem
                  </button>

                  <div className="Div-Item-Member mt-4">
                    <img className="" src={member13} />
                    <p className="Text-5 ml-2">
                      "It was quick and hassle free
                      <br />
                      to launch referral based sales."
                    </p>
                  </div>
                  <div className="Div-Item-Member">
                    <img className="" src={member14} />
                    <p className="Text-5 ml-2">
                      "Very effective in growing the
                      <br />
                      loyalty of irregular purchasers."
                    </p>
                  </div>
                  <div className="Div-Item-Member mb-3">
                    <img className="" src={member15} />
                    <p className="Text-5 ml-2">
                      "Socially growing my members and
                      <br />
                      sales is a game changer."
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column">
                <p className="Text-2 poppins-semibold mt-5">
                  How do we increase your sales?
                </p>
                <div className="Div-Eco-Store-Desktop-Category">
                  <div className="Div-Eco-Store-Desktop-Wrapper">
                    <img className="" src={iconStore1} />
                    <div className="d-flex flex-column">
                      <p className="poppins-semibold mb-1">Spread and split</p>
                      <p className="mb-0">
                        Make it fun and compelling for visitors to purchase,
                        share with friends and give their feedback.
                      </p>
                    </div>
                  </div>

                  <div className="Div-Eco-Store-Desktop-Wrapper">
                    <img className="" src={iconStore2} />
                    <div className="d-flex flex-column">
                      <p className="poppins-semibold mb-1">
                        Social sharing and referrals
                      </p>
                      <p className="mb-0">
                        Make it fun and compelling for visitors to purchase,
                        share with friends and give their feedback.
                      </p>
                    </div>
                  </div>

                  <div className="Div-Eco-Store-Desktop-Wrapper">
                    <img className="" src={iconStore3} />
                    <div className="d-flex flex-column">
                      <p className="poppins-semibold mb-1">Reward and review</p>
                      <p className="mb-0">
                        Make it fun and compelling for visitors to purchase,
                        share with friends and give their feedback.
                      </p>
                    </div>
                  </div>

                  <div className="Div-Eco-Store-Desktop-Wrapper">
                    <img className="" src={iconStore4} />
                    <div className="d-flex flex-column">
                      <p className="poppins-semibold mb-1">Linked articles</p>
                      <p className="mb-0">
                        Make it fun and compelling for visitors to purchase,
                        share with friends and give their feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="auto" className="ml-4">
              <div className="Div-Eco-Store-Right">
                <img className="Img-Eco-Store mt-5 mb-3" src={ecoStore} />
                {/* <img className="Img-Eco-Store-Phone" src={ecoStorePhone} /> */}
                <div className="Img-Eco-Store-Phone">
                  <img
                    className="template"
                    src={Introduction}
                    alt="introduction"
                  />
                  <img
                    className="phone-content"
                    src={Introduction1}
                    alt="introduction"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {!isMobileView && (
        <Container className="C-EcoID">
          <img className="Img-Eco-ID-Right" src={bgEcoTokens} />
          <Row>
            <Col md="auto d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
                <div className="Div-Section-Item">
                  <img className="Img-Item-Top" src={itemIcon3} />
                  <img className="mb-4" src={ecoID} />
                  <p className="text-center">
                    Own your data and life with your
                    <br />
                    private ID, which gives you the
                    <br />
                    ability to say yes/no and stops
                    <br />
                    you from becoming the product.
                    <br />
                    <br />
                    Verify your identity, learn new
                    <br />
                    insights about yourself and share
                    <br />
                    your identity into with 3rd parties.
                  </p>
                  <button className="primary-btn" onClick={onPricingPlan}>
                    Create your Ecosystem
                  </button>

                  <div className="Div-Item-Member mt-4">
                    <img className="" src={member7} />
                    <p className="Text-5 ml-2">
                      "It's so fun to learn things about
                      <br />
                      myself which I didn't know before."
                    </p>
                  </div>
                  <div className="Div-Item-Member">
                    <img className="" src={member8} />
                    <p className="Text-5 ml-2">
                      "Knowing that I'm in control of my
                      <br />
                      data and making it pay is awesome."
                    </p>
                  </div>
                  <div className="Div-Item-Member mb-3">
                    <img className="" src={member9} />
                    <p className="Text-5 ml-2">
                      "Sharing my iD with friends and
                      <br />
                      acquaintances is quick and easy."
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column">
                <p className="Text-2 poppins-semibold mt-5">
                  How do we grow data safe insights?
                </p>
                <div className="Div-Eco-ID-Desktop-Category">
                  <div className="Div-Eco-ID-Desktop-Wrapper">
                    <img className="" src={ecoID1} />
                    <p className="poppins-semibold mt-3 mb-3">Login</p>
                    <p className="text-center mb-0">
                      EcoiD builds your own soveregin data hub, helping you grow
                      new insights on your life and likes, making you the data
                      controller.
                    </p>
                  </div>

                  <div className="Div-Eco-ID-Desktop-Wrapper">
                    <img className="" src={ecoID2} />
                    <p className="poppins-semibold mt-3 mb-3">Own</p>
                    <p className="text-center mb-0">
                      Choose which verified people in the community you share
                      your data with, putting user in control of sharing
                      insights and living their best life.
                    </p>
                  </div>

                  <div className="Div-Eco-ID-Desktop-Wrapper">
                    <img className="" src={ecoID3} />
                    <p className="poppins-semibold mt-3 mb-3">Safe</p>
                    <p className="text-center mb-0">
                      EcoiD builds insights across socials shopping and health,
                      so you can be more economical across all walks of life,
                      gaining time and money.
                    </p>
                  </div>

                  <div className="Div-Eco-ID-Desktop-Wrapper">
                    <img className="" src={ecoID4} />
                    <p className="poppins-semibold mt-3 mb-3">Share</p>
                    <p className="text-center mb-0">
                      Build your personal Ai imprint of what makes you, with out
                      Ai mapping trends saving time and money, to help live your
                      best life.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="auto">
              <div className="Div-Eco-ID-Right">
                <img className="Img-Eco-ID mt-5 mb-3" src={ecoID} />
                <img className="Img-Eco-ID-Phone" src={ecoIDPhone} />
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {isMobileView && (
        <div className="Div-Section-2">
          <div className="Div-Section-Item">
            <img className="Img-Item-Top" src={itemIcon1} />
            <img className="mb-4" src={ecoPay} />
            <p className="text-center">
              Your mobile payment friend with
              <br />
              benefits saves you money on every
              <br />
              payment you make through it.
              <br />
              <br />
              Earn tokens for social engagement,
              <br />
              through sharing economy or from
              <br />
              friends or family, redeem your
              <br />
              tokens with 100s of top retailers.
            </p>
            <button className="primary-btn" onClick={onPricingPlan}>
              Start saving now
            </button>
            <div className="Div-Item-Member mt-4">
              <img className="" src={member1} />
              <p className="Text-5 ml-2">
                "I've saved £46 off my shopping
                <br />
                online and in store this month"
              </p>
            </div>
            <div className="Div-Item-Member">
              <img className="" src={member2} />
              <p className="Text-5 ml-2">
                "All of my favourite brand are on it,
                <br />I just linked my card and saved."
              </p>
            </div>
            <div className="Div-Item-Member mb-3">
              <img className="" src={member3} />
              <p className="Text-5 ml-2">
                "It's quick and easy, I don't even
                <br />
                need to use a card or contactless."
              </p>
            </div>
          </div>
          <div className="Div-Section-Item">
            <img className="Img-Item-Top" src={itemIcon2} />
            <img className="mb-4" src={ecoChat} />
            <p className="text-center">
              Your community messaging app
              <br />
              for free, secure and fast chatting
              <br />
              between your groups or DMs.
              <br />
              <br />
              Host live streaming and videos,
              <br />
              run polls between groups, create
              <br />
              events, split costs and plan your
              <br />
              timeline, to live your best life.
            </p>
            <button className="primary-btn" onClick={onPricingPlan}>
              Get chatty now
            </button>
            <div className="Div-Item-Member mt-4">
              <img className="" src={member4} />
              <p className="Text-5 ml-2">
                "This is WeChat for the western
                <br />
                world but 10x better. I Love it!"
              </p>
            </div>
            <div className="Div-Item-Member">
              <img className="" src={member5} />
              <p className="Text-5 ml-2">
                "This is everything I need to run my
                <br />
                personal life and organize friends."
              </p>
            </div>
            <div className="Div-Item-Member mb-3">
              <img className="" src={member6} />
              <p className="Text-5 ml-2">
                "It's like whatsapp, instagram
                <br />
                and facebook, but much better."
              </p>
            </div>
          </div>
          <div className="Div-Section-Item">
            <img className="Img-Item-Top" src={itemIcon3} />
            <img className="mb-4" src={ecoID} />
            <p className="text-center">
              Own your data and life with your
              <br />
              private ID, which gives you the ability to say yes/no and stops
              <br />
              you from becoming the product.
              <br />
              <br />
              Verify your identity, learn new
              <br />
              insights about yourself and share
              <br />
              your identity info with 3rd parties.
              <br />
            </p>
            <button className="primary-btn" onClick={onPricingPlan}>
              Create your iD now
            </button>
            <div className="Div-Item-Member mt-4">
              <img className="" src={member7} />
              <p className="Text-5 ml-2">
                "It's so fun to learn things about
                <br />
                myself which I didn't know before."
              </p>
            </div>
            <div className="Div-Item-Member">
              <img className="" src={member8} />
              <p className="Text-5 ml-2">
                "Knowing that I'm in control of my
                <br />
                data and making it pay is awesome"
              </p>
            </div>
            <div className="Div-Item-Member mb-3">
              <img className="" src={member9} />
              <p className="Text-5 ml-2">
                "Sharing my iD with friends and
                <br />
                acquaintances is quick and easy"
              </p>
            </div>
          </div>
        </div>
      )}

      {isMobileView && (
        <Container className="p-0">
          <div className="Div-Ecosystem-Header mb-4" ref={communityRef}>
            <p className="Text-01 poppins-bold mb-0">What are your features?</p>
            <div className="d-flex justify-content-center">
              {/* <img className="Img-Logo mr-3" src={Logo} alt="logo" /> */}
              <img
                className="Img-Ecosystem"
                src={EcosystemTMBlack}
                alt="eco-system"
              ></img>
            </div>
          </div>
          <div className="Div-Options mb-5 pt-3 pb-3">
            <div className="Div-Options-Content">
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">Community</p>
                  <img className="Img-Option-Icon" src={iconCommunity} />
                </div>
                <p className="text-center P-Option-Content">
                  The heart of your community, turning customers into long term
                  super members.
                </p>
                <img className="Img-Option-Logo" src={ecoChat} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">Gamification</p>
                  <img className="Img-Option-Icon" src={iconGamification} />
                </div>
                <p className="text-center P-Option-Content">
                  Set engaging tasks for your community and reward actions with
                  tokens.
                </p>
                <img className="Img-Option-Logo" src={ecoPay} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">
                    {isMobileView ? "Rewards" : "Rewards & Perks"}
                  </p>
                  <img className="Img-Option-Icon" src={iconRewardsPerks} />
                </div>
                <p className="text-center P-Option-Content">
                  Working exclusively with the best retail partners to provide
                  insider value.
                </p>
                <img className="Img-Option-Logo" src={ecoPay} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">
                    {isMobileView ? "CRM" : "CRM platform"}
                  </p>
                  <img className="Img-Option-Icon" src={iconCRM} />
                </div>
                <p className="text-center P-Option-Content">
                  The hub of all customer interaction, analytics, growth, reward
                  and retention.
                </p>
                <img className="Img-Option-Logo" src={ecoCRM} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">Referrals</p>
                  <img className="Img-Option-Icon" src={iconReferrals} />
                </div>
                <p className="text-center P-Option-Content">
                  Make referrals rewarding and slick. Drive organic growth via
                  your user networks.
                </p>
                <img className="Img-Option-Logo" src={ecoChat} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">
                    {isMobileView ? "Polls" : "Polls & surveys"}
                  </p>
                  <img className="Img-Option-Icon" src={iconPollsSurvey} />
                </div>
                <p className="text-center P-Option-Content">
                  Drive feedback, grow your touch points and help your community
                  feel belonging.
                </p>
                <img className="Img-Option-Logo" src={ecoChat} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">
                    {isMobileView ? "Forum" : "Forum & feeds"}
                  </p>
                  <img className="Img-Option-Icon" src={iconForumFeeds} />
                </div>
                <p className="text-center P-Option-Content">
                  Own your social network, growing user content and interactuon
                  in a happy place.
                </p>
                <img className="Img-Option-Logo" src={ecoChat} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">
                    {isMobileView ? "Reviews" : "Reviews hub"}
                  </p>
                  <img className="Img-Option-Icon" src={iconReviews} />
                </div>
                <p className="text-center P-Option-Content">
                  Invite your customers to review service, making it rewarding
                  to answer.
                </p>
                <img className="Img-Option-Logo" src={ecoCRM} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">Open Banking</p>
                  <img className="Img-Option-Icon" src={iconOpenBanking} />
                </div>
                <p className="text-center P-Option-Content">
                  Grow insights on user habits and offer them extra value with
                  bespoke knowlege.
                </p>
                <img className="Img-Option-Logo" src={ecoPay} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">
                    {isMobileView ? "Chat & bots" : "Live chat & bots"}
                  </p>
                  <img className="Img-Option-Icon" src={iconLiveChat} />
                </div>
                <p className="text-center P-Option-Content">
                  Transform comms and tickets with multi user chat, chatbots,
                  smart roles and SLAs.
                </p>
                <img className="Img-Option-Logo" src={ecoChat} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">Marketplace</p>
                  <img className="Img-Option-Icon" src={iconMarketplace} />
                </div>
                <p className="text-center P-Option-Content">
                  Your pop up digital marketplace for subscriptions, quick buys
                  and group splitting.
                </p>
                <img className="Img-Option-Logo" src={ecoStore} />
              </div>
              <div className="Div-Option-Wrapper">
                <div className="Div-Option-Header">
                  <p className="Text-3">
                    {isMobileView ? "Verify" : "KYC verification"}
                  </p>
                  <img className="Img-Option-Icon" src={iconKYC} />
                </div>
                <p className="text-center P-Option-Content">
                  Out with old grey forms and in with this verification chatbot,
                  rewarding each stage.
                </p>
                <img className="Img-Option-Logo" src={ecoCRM} />
              </div>
            </div>
          </div>
        </Container>
      )}

      {isMobileView && (
        <div className="best-experience" ref={tokensRef}>
          <div className="best-experience-title-container">
            <p className="Text-01 poppins-bold">
              How do we make loyalty rewarding?
            </p>
            <img className="mr-3" src={ecoPay} alt="eco-tokens"></img>
          </div>

          <div className="best-exp-content">
            <div className="retailers">
              <div className="retailers-tab-container">
                <p
                  className={classNames("retailer-tab", {
                    selected: selectedCountry === "USA",
                  })}
                  onClick={() => {
                    setSelectedCountry("USA");
                  }}
                >
                  <img src={USA} alt="flag"></img>Top 20 US retailers
                </p>
                <p
                  className={classNames("retailer-tab", {
                    selected: selectedCountry === "UK",
                  })}
                  onClick={() => {
                    setSelectedCountry("UK");
                  }}
                >
                  <img src={UK} alt="flag"></img>Top 20 UK retailers
                </p>
              </div>
              <div className="retailers-container">
                {filteredRetailers.map((retailer, index) => (
                  <div className="retailer-item" key={index}>
                    <img src={retailer.logo} alt="logo" />
                  </div>
                ))}
              </div>
            </div>
            <img
              className="ecopay-img"
              src={selectedCountry === "USA" ? USAEcopay : UKEcopay}
              alt="ecopay"
            />
          </div>
        </div>
      )}

      <div className="mt-5">
        {!isMobileView && (
          <img className="Img-Eco-CRM-Left" src={bgEcoTokensLeft} />
        )}
        <Container ref={ecoCRMRef}>
          <div className="Div-EcoCRM-Header mb-4">
            <p className="Text-2 poppins-semibold mb-0">
              How do you manage your community?
            </p>
            <img className="" src={ecoCRM} alt="eco-tokens"></img>
          </div>
          {/* <p className="title-help-your-community Text-0 text-center">"it's like salesforce live agent, but free and much much better"</p> */}
        </Container>
        <div className="interaction-container">
          <div className="img-container desktop">
            <img src={Interaction} alt="interaction" />
          </div>
          <div
            className="details-container"
            style={{
              width: "100%",
            }}
          >
            <div className="container d-flex justify-content-center flex-column">
              <img
                className="ipad-mobile mt-5"
                src={Interaction}
                alt="interaction"
              />
              <div className="Div-Ecosystem-Content">
                <div className="Div-Ecosystem-Item mb-1">
                  <img className="" src={check} />
                  <p className="Text-41 ml-2">
                    Reward your community with retail tokens.
                  </p>
                </div>
                <div className="Div-Ecosystem-Item mb-1">
                  <img className="" src={check} />
                  <p className="Text-41 ml-2">
                    Engage your members with exclusive content.
                  </p>
                </div>
                <div className="Div-Ecosystem-Item mb-1">
                  <img className="" src={check} />
                  <p className="Text-41 ml-2">
                    Super-boost customer loyalty and retention.
                  </p>
                </div>
                <div className="Div-Ecosystem-Item mb-1">
                  <img className="" src={check} />
                  <p className="Text-41 ml-2">
                    Incentivise referrals and grow your community.
                  </p>
                </div>
                <div className="Div-Ecosystem-Item mb-1">
                  <img className="" src={check} />
                  <p className="Text-41 ml-2">
                    Manage your brand campaigns immersively.
                  </p>
                </div>
                <div className="Div-Ecosystem-Item mb-1">
                  <img className="" src={check} />
                  <p className="Text-41 ml-2">
                    Drive vast insights through your analytics tools.
                  </p>
                </div>
              </div>
              <div className="mt-4 d-flex">
                <button className="primary-btn mr-4" onClick={onGetStarted}>
                  Create an Ecosystem
                </button>
                <button className="primary-btn Green" onClick={onGetStarted}>
                  Compare alternatives
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {!isMobileView && (
        <Container className="C-Alternative">
          <img className="Img-Alternative-Right" src={bgEcoTokens} />
          <p className="Text-2 poppins-semibold text-center">
            How does the platform compare to other alternatives?
          </p>
          <p className="Text-41 poppins-regular text-center">
            Here's an open comparison of Salesforce, Zendesk, Hubspot and
            Monday.com
          </p>
          <Row className="mr-4 ml-4">
            <Col xs lg="2">
              <div className="Div-Alternative pt-4 pb-4">
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Alternative</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Set up fee</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Software fee</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">User fee</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Fully bespoke</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">API for each app</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Forum and feeds</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Hot topics & tags</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Long form articles</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Live Streaming</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Surveys & polls</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Competitions</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Ticketing & SLAs</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Multi user chat</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Chat groups</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Chatbot creator</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Taskers chat</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Marketplace</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Subscriptions</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Events</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Rewards tokens</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Discounts</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Gamification</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">Blockchain iDs</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-regular">User KYC & selfie</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Firebase database</p>
                </div>
              </div>
            </Col>
            <Col xs lg="2">
              <div className="Div-Alternative-CRM pt-4 pb-4">
                <div className="Div-Alternative-Item">
                  <img className="Img-Eco-CRM" src={ecoCRM} />
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Free</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Free</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">£0.20-£1</p>
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckGreen} />
                </div>
                <div className="Div-Alternative-Item">
                  <button className="Btn-Cell Green" onClick={onGetStarted}>
                    Create Free
                  </button>
                </div>
              </div>
            </Col>
            <Col xs lg="2">
              <div className="Div-Alternative-Plan pt-4 pb-4">
                <div className="Div-Alternative-Item">
                  <p
                    className="Text-43 poppins-semibold"
                    style={{
                      color: "#15A1E0",
                    }}
                  >
                    Salesforce
                  </p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">£30k</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">£30k</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">£10-£20</p>
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <button className="Btn-Cell Blue" onClick={onGetStarted}>
                    Adios
                  </button>
                </div>
              </div>
            </Col>
            <Col xs lg="2">
              <div className="Div-Alternative-Plan pt-4 pb-4">
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Zendesk</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Free</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Free</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">£0.20-£1</p>
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <button className="Btn-Cell Black" onClick={onGetStarted}>
                    Auf Wiedersehen
                  </button>
                </div>
              </div>
            </Col>
            <Col xs lg="2">
              <div className="Div-Alternative-Plan pt-4 pb-4">
                <div className="Div-Alternative-Item">
                  <p
                    className="Text-43 poppins-semibold"
                    style={{
                      color: "#FD795A",
                    }}
                  >
                    Hubspot
                  </p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Free</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Free</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">£0.20-£1</p>
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <button className="Btn-Cell Pink" onClick={onGetStarted}>
                    Au revoir
                  </button>
                </div>
              </div>
            </Col>
            <Col xs lg="2">
              <div className="Div-Alternative-Plan pt-4 pb-4">
                <div className="Div-Alternative-Item">
                  <p
                    className="Text-43 poppins-semibold"
                    style={{
                      color: "#F73C54",
                    }}
                  >
                    Monday
                  </p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Free</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">Free</p>
                </div>
                <div className="Div-Alternative-Item">
                  <p className="Text-43 poppins-semibold">£0.20-£1</p>
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconCheckYellow} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <img src={iconUncheckRed} />
                </div>
                <div className="Div-Alternative-Item">
                  <button className="Btn-Cell Red" onClick={onGetStarted}>
                    Arrivederci
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )} */}

      <Container
        style={{
          marginTop: "150px",
        }}
      >
        <p className="Text-2 poppins-semibold text-center">
          How can I get started without any set-up costs or blockers?
        </p>
        <p className="Text-41 poppins-regular text-center">
          Simply turn on your desired plan. You'll only pay for active members
          after a smooth trial.
        </p>
        <div className="Div-Pricing-Plan mb-5" ref={pricingPlanRef}>
          <div className="Div-Plan-Wrapper">
            <img className="Img-Plan mb-3" src={ecosystemTrial} />
            <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 week trial period.</p>
            <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 community users.</p>
            <p>c.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Training Workshop Huddle.</p>
            <p>d.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weekly engage Hangouts.</p>
            <p>e.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Review Huddle.</p>
            <p>&nbsp;f.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trial features include:</p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gamification & token earning
            </p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoiD</p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoWallet</p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoPay - Go & Pro retailers
            </p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoStore - List & sell
              products
            </p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feeds, Polls & games</p>
            <p style={{ visibility: "hidden" }}>-</p>
            <p className="text-center mt-3">Fixed £100</p>
            <button className="Button-Plan mt-3" onClick={onPricingPlan}>
              Get started.
            </button>
          </div>
          <div className="Div-Plan-Wrapper">
            <img className="Img-Plan mb-3" src={ecosystemGo} />
            <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go access to most Ecosystems.</p>
            <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weekly engage Hangouts.</p>
            <p>c.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monthly deep dive Huddle.</p>
            <p>d.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Features include.</p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dedicated campaign manager.
            </p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gamification & token earning
            </p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoiD - Blockchain iD</p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoAi - Open banking &
              analytics
            </p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoWallet - Tokens, cards,
              spends
            </p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bespoke tokens x 2</p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoPay - Go retailers</p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EcoStore - List & sell
              products
            </p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feeds, Polls & games</p>
            <p className="text-center mt-3">25p-£1 per user per month</p>
            <button className="Button-Plan mt-3" onClick={onPricingPlan}>
              Activate.
            </button>
          </div>
          <div className="Div-Plan-Wrapper">
            <img className="Img-Plan mb-3" src={ecosystemPro} />
            <p>a.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pro access to all Ecosystems.</p>
            <p>b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weekly engage Hangouts.</p>
            <p>c.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monthly deep dive Huddle.</p>
            <p>d.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Features include:</p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All Go features</p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full API & whitelabel
              integration.
            </p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dedicated data rack &
              control.
            </p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pro retailers & offers</p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User token earning from
              retailers.
            </p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taskers & user interaction
              suite.
            </p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unlimited custom tokens.</p>
            <p>&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bespoke chatbot maker.</p>
            <p>
              &nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bespoke digital bank cards.
            </p>
            <p className="text-center mt-3">Minimum 10,000 users.</p>
            <button className="Button-Plan mt-3" onClick={onPricingPlan}>
              Apply.
            </button>
          </div>
        </div>
      </Container>

      {isMobileView && (
        <div className="Community-Member mb-5" ref={communityMemberRef}>
          <div className="Div-EcoChat-Header mb-4">
            <div>
              <p className="Text-01 poppins-bold mb-0">
                How do we boost engagement?
              </p>
              <p className="Text-5 P-Community-Member poppins-regular p-0">
                Community is where the heart is, so we created a new way of
                communicating, connecting, sharing, & growing.
              </p>
            </div>
            <img className="" src={ecoChat} alt="eco-tokens"></img>
          </div>
          <Container>
            {/* <Row className='mb-3'>
              <Col xs lg="4">
                <div className='Div-Community-Member'>
                  <img className='Img-Community-Member' src={ecoChat} />
                </div>                
              </Col>
              <Col xs lg="8">
                <p className='Text-3 P-Community-Member'>
                  <b>Community is where the heart is, so we created a new way of communicating, connecting, sharing, & growing together.</b>
                </p>
              </Col>
            </Row> */}
            <Row className="Community-Way d-flex justify-content-center">
              <Col md="auto d-flex justify-content-center mb-4">
                <div className="Community-Way-Item">
                  <div className="Community-Way-Sub">
                    <img src={communityTokens} />
                    {/* <p>1</p> */}
                  </div>
                  <p className="text-center mt-3">
                    <b>Gamification</b>
                  </p>
                  <p className="text-center">
                    Tokens earned from
                    <br /> community actions.
                  </p>
                  <p className="text-center">
                    Spend tokens via
                    <br /> EcoPay & EcoStore..
                  </p>
                  <p className="text-center mb-4">
                    Fund your life goals
                    <br /> 365 days a year.
                  </p>
                </div>
              </Col>
              <Col md="auto d-flex justify-content-center ml-4 mr-4 mb-4">
                <div className="Community-Way-Item">
                  <div className="Community-Way-Sub">
                    <img src={communitySolidarity} />
                    {/* <p>1</p> */}
                  </div>
                  <p className="text-center mt-3">
                    <b>Solidarity</b>
                  </p>
                  <p className="text-center">
                    Join the community
                    <br /> for peak wellbeing.
                  </p>
                  <p className="text-center">
                    Post on the forum
                    <br /> and vote on polls.
                  </p>
                  <p className="text-center mb-4">
                    Chat in groups, share
                    <br /> tokens and split cost.
                  </p>
                </div>
              </Col>
              <Col md="auto d-flex justify-content-center mb-4">
                <div className="Community-Way-Item">
                  <div className="Community-Way-Sub">
                    <img src={communityInsider} />
                    {/* <p>1</p> */}
                  </div>
                  <p className="text-center mt-3">
                    <b>Insider</b>
                  </p>
                  <p className="text-center">
                    Access VIP tailored
                    <br /> content and offers.
                  </p>
                  <p className="text-center mb-4">
                    Insider access to
                    <br /> subscriptions which
                    <br /> save you time and
                    <br /> money across all
                    <br /> walks of life.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {isMobileView && (
        <div className="Div-Eco-Tokens mb-5" ref={ecoTokensRef}>
          <div className="Div-EcoTokens-Header mb-4">
            <p className="Text-01 poppins-bold mb-0">
              {isMobileView
                ? "How do we incentivise?"
                : "How do we incentivise better?"}
            </p>
            <img className="" src={liveYourBestLifeL} alt="eco-tokens"></img>
          </div>
          <Container>
            <Row>
              <Col xs lg="6 d-flex justify-content-center mb-5">
                <div className="Div-Eco-Tokens-Wrapper">
                  <img className="Img-Eco-Tokens" src={ecoTokens} />
                  <p className="Text-4 text-center p-3">
                    Earn for being a social hero.
                    <br />
                    Spend across all walks of life.
                  </p>
                  {/* <img className='' src={ecoPayTokensMobile} /> */}
                  <div className="Div-Eco-Tokens-Left">
                    <img className="Img-Eco-Tokens-Back" src={ecoTokens2} />
                    <img className="Img-Eco-Tokens-Phone" src={ecoTokens1} />
                    <img
                      className="Img-Eco-Tokens-Phone Gif"
                      src={ecoTokens1Gif}
                    />
                  </div>
                </div>
              </Col>
              <Col xs lg="6 pl-3 pr-3">
                {/* <p className='Text-3'>
                  <b>Earn tokens for being a social hero..</b>
                </p> */}
                <div className="Div-Eco-Tokens-Category mt-4">
                  <img className="Background" src={bgEcoTokens} />
                  <div className="Div-Eco-Category-Wrapper">
                    <img className="" src={ecoPost} />
                    <p>
                      Post ideas, questions and inspo to the community forum.
                    </p>
                  </div>
                  <div className="Div-Eco-Category-Wrapper">
                    <img className="" src={ecoAnswer} />
                    <p>Answer community polls to give your opinions.</p>
                  </div>
                  <div className="Div-Eco-Category-Wrapper">
                    <img className="" src={ecoHelp} />
                    <p>Help other community members through your skills.</p>
                  </div>
                  <div className="Div-Eco-Category-Wrapper">
                    <img className="" src={ecoRefer} />
                    <p>Refer your friends to join the community.</p>
                  </div>
                  <div className="Div-Eco-Category-Wrapper">
                    <img className="" src={ecoBuy} />
                    <p>Buy products from the community marketplace.</p>
                  </div>
                  <div className="Div-Eco-Category-Wrapper">
                    <img className="" src={ecoShop} />
                    <p>Shop with our retailers friends who gift you tokens.</p>
                  </div>
                  <div className="Div-Eco-Category-Wrapper">
                    <img className="" src={ecoLeave} />
                    <p>Leave positive reviews.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {!isMobileView && (
        <Container
          className="p-0"
          style={{
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Row>
            <Col md="auto">
              <div className="Div-Eco-Values-Wrapper">
                <img className="" src={ecoTeam} />
              </div>
            </Col>
            <Col className="">
              <div className="Div-Meet-Team-Desktop pt-3" ref={meetTeamRef}>
                <div className="Div-Member-Info-Desktop">
                  <p className="h5 poppins-semibold P-Member-Name">
                    <b>CHRISTOPHER M</b>
                  </p>
                  <p className="h5 P-Member-Role-Desktop">Chief Executive</p>
                  <img className="Img-Member-Desktop" src={memberChris} />
                  <div className="Div-Member-Flags d-flex justify-content-center mt-2">
                    <img className="Img-Country-Desktop mr-3" src={memberUS} />
                    <img
                      className="Img-LinkedIn-Desktop"
                      src={memberLinkedIn}
                    />
                  </div>
                </div>
                <div className="Div-Member-Info-Desktop">
                  <p className="h5 P-Member-Name poppins-semibold">
                    <b>NIDHI KRM</b>
                  </p>
                  <p className="h5 P-Member-Role-Desktop">Chief Commercial</p>
                  <img className="Img-Member-Desktop" src={memberNidhi} />
                  <div className="Div-Member-Flags d-flex justify-content-center mt-2">
                    <img
                      className="Img-Country-Desktop mr-3"
                      src={memberGermany}
                    />
                    <img
                      className="Img-LinkedIn-Desktop"
                      src={memberLinkedIn}
                    />
                  </div>
                </div>
                <div className="Div-Member-Info-Desktop">
                  <p className="h5 P-Member-Name poppins-semibold">
                    <b>MARK B</b>
                  </p>
                  <p className="h5 P-Member-Role-Desktop">Head of Biz Dev</p>
                  <img className="Img-Member-Desktop" src={memberMark} />
                  <div className="Div-Member-Flags d-flex justify-content-center mt-2">
                    <img className="Img-Country-Desktop mr-3" src={memberUK} />
                    <img
                      className="Img-LinkedIn-Desktop"
                      src={memberLinkedIn}
                    />
                  </div>
                </div>
                <div className="Div-Member-Info-Desktop">
                  <p className="h5 P-Member-Name poppins-semibold">
                    <b>NICK</b>
                  </p>
                  <p className="h5 P-Member-Role-Desktop">Head of Data</p>
                  <img className="Img-Member-Desktop" src={memberNick} />
                  <div className="Div-Member-Flags d-flex justify-content-center mt-2">
                    <img className="Img-Country-Desktop mr-3" src={memberUK} />
                    <img
                      className="Img-LinkedIn-Desktop"
                      src={memberLinkedIn}
                    />
                  </div>
                </div>
                <div className="Div-Member-Info-Desktop">
                  <p className="h5 P-Member-Name poppins-semibold">
                    <b>DAVID Y</b>
                  </p>
                  <p className="h5 P-Member-Role-Desktop">Chief Tech Officer</p>
                  <img className="Img-Member-Desktop" src={memberDavid} />
                  <div className="Div-Member-Flags d-flex justify-content-center mt-2">
                    <img className="Img-Country-Desktop mr-3" src={memberUK} />
                    <img
                      className="Img-LinkedIn-Desktop"
                      src={memberLinkedIn}
                    />
                  </div>
                </div>
                <div className="Div-Member-Info-Desktop">
                  <p className="h5 P-Member-Name poppins-semibold">
                    <b>AMELIA M</b>
                  </p>
                  <p className="h5 P-Member-Role-Desktop">Campaign Manager</p>
                  <img className="Img-Member-Desktop" src={memberAmelia} />
                  <div className="Div-Member-Flags d-flex justify-content-center mt-2">
                    <img className="Img-Country-Desktop mr-3" src={memberUK} />
                    <img
                      className="Img-LinkedIn-Desktop"
                      src={memberLinkedIn}
                    />
                  </div>
                </div>
                <div className="Div-Member-Info-Desktop">
                  <p className="h5 P-Member-Name poppins-semibold">
                    <b>LUCAS F</b>
                  </p>
                  <p className="h5 P-Member-Role-Desktop">Client Success</p>
                  <img className="Img-Member-Desktop" src={memberLucas} />
                  <div className="Div-Member-Flags d-flex justify-content-center mt-2">
                    <img className="Img-Country-Desktop mr-3" src={memberUK} />
                    <img
                      className="Img-LinkedIn-Desktop"
                      src={memberLinkedIn}
                    />
                  </div>
                </div>
                <div className="Div-Member-Info-Desktop">
                  <p className="h5 P-Member-Name poppins-semibold">
                    <b>CAMERON H</b>
                  </p>
                  <p className="h5 P-Member-Role-Desktop">Client Success</p>
                  <img className="Img-Member-Desktop" src={memberCameron} />
                  <div className="Div-Member-Flags d-flex justify-content-center mt-2">
                    <img
                      className="Img-Country-Desktop mr-3"
                      src={memberSpain}
                    />
                    <img
                      className="Img-LinkedIn-Desktop"
                      src={memberLinkedIn}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {isMobileView && (
        <div className="Div-Meet-Team pt-3" ref={meetTeamRef}>
          <div className="Div-Member-Info">
            <p className="h3 P-Member-Name">
              <b>CHRISTOPHER M</b>
            </p>
            <p className="h3 P-Member-Role">Chief Executive</p>
            <img className="Img-Member" src={memberChris} />
            <img className="Img-Country" src={memberUS} />
            <img className="Img-LinkedIn" src={memberLinkedIn} />
          </div>
          <div className="Div-Member-Info">
            <p className="h3 P-Member-Name">
              <b>NIDHI KRM</b>
            </p>
            <p className="h3 P-Member-Role">Chief Commercial</p>
            <img className="Img-Member" src={memberNidhi} />
            <img className="Img-Country" src={memberGermany} />
            <img className="Img-LinkedIn" src={memberLinkedIn} />
          </div>
          <div className="Div-Member-Info">
            <p className="h3 P-Member-Name">
              <b>MARK B</b>
            </p>
            <p className="h3 P-Member-Role">Head of Biz Dev</p>
            <img className="Img-Member" src={memberMark} />
            <img className="Img-Country" src={memberUK} />
            <img className="Img-LinkedIn" src={memberLinkedIn} />
          </div>
          <div className="Div-Member-Info">
            <p className="h3 P-Member-Name">
              <b>NICK</b>
            </p>
            <p className="h3 P-Member-Role">Head of Data</p>
            <img className="Img-Member" src={memberNick} />
            <img className="Img-Country" src={memberUK} />
            <img className="Img-LinkedIn" src={memberLinkedIn} />
          </div>
          <div className="Div-Member-Info">
            <p className="h3 P-Member-Name">
              <b>DAVID Y</b>
            </p>
            <p className="h3 P-Member-Role">Chief Tech Officer</p>
            <img className="Img-Member" src={memberDavid} />
            <img className="Img-Country" src={memberUK} />
            <img className="Img-LinkedIn" src={memberLinkedIn} />
          </div>
          <div className="Div-Member-Info">
            <p className="h3 P-Member-Name">
              <b>AMELIA M</b>
            </p>
            <p className="h3 P-Member-Role">Campaign Manager</p>
            <img className="Img-Member" src={memberAmelia} />
            <img className="Img-Country" src={memberUK} />
            <img className="Img-LinkedIn" src={memberLinkedIn} />
          </div>
          <div className="Div-Member-Info">
            <p className="h3 P-Member-Name">
              <b>LUCAS F</b>
            </p>
            <p className="h3 P-Member-Role">Client Success</p>
            <img className="Img-Member" src={memberLucas} />
            <img className="Img-Country" src={memberUK} />
            <img className="Img-LinkedIn" src={memberLinkedIn} />
          </div>
          <div className="Div-Member-Info">
            <p className="h3 P-Member-Name">
              <b>CAMERON H</b>
            </p>
            <p className="h3 P-Member-Role">Client Success</p>
            <img className="Img-Member" src={memberCameron} />
            <img className="Img-Country" src={memberSpain} />
            <img className="Img-LinkedIn" src={memberLinkedIn} />
          </div>
        </div>
      )}

      {isMobileView && (
        <div className="Div-Eco-Values mt-5 mb-5" ref={ecoValuesRef}>
          <Container>
            <Row>
              <Col md="auto">
                <div className="Div-Eco-Values-Wrapper">
                  <img className="" src={ecoValues} />
                </div>
              </Col>
              <Col className="text-center d-flex justify-content-center flex-column">
                {/* <img className='Img-Live-Life mt-3 mb-3' src={liveYourBestLifeL} /> */}
                <p className="title-help-your-community Text-0">
                  Helps your community live their best life.
                </p>
                <p className="title Text-2 text-center">
                  Stand out from the crowd.
                  <br />
                  Be best in the class.
                </p>
                <div className="d-flex justify-content-center">
                  <div className="Div-Eco-Values-Content">
                    <div className="Div-Value">
                      <div className="Div-Value-Wrapper">
                        <p>01</p>
                        <img className="" src={value1} />
                      </div>
                      <p className="text-right">Be Really Well</p>
                    </div>
                    <div className="Div-Value">
                      <div className="Div-Value-Wrapper">
                        <p>02</p>
                        <img className="" src={value2} />
                      </div>
                      <p className="text-right">Save Wasted Time</p>
                    </div>
                    <div className="Div-Value">
                      <div className="Div-Value-Wrapper">
                        <p>03</p>
                        <img className="" src={value3} />
                      </div>
                      <p className="text-right">Max Your Cash</p>
                    </div>
                    <div className="Div-Value">
                      <div className="Div-Value-Wrapper">
                        <p>04</p>
                        <img className="" src={value4} />
                      </div>
                      <p className="text-right">Explore in The Know</p>
                    </div>
                    <div className="Div-Value">
                      <div className="Div-Value-Wrapper">
                        <p>05</p>
                        <img className="" src={value5} />
                      </div>
                      <p className="text-right">Help Others Flourish</p>
                    </div>
                    <div className="Div-Value">
                      <div className="Div-Value-Wrapper">
                        <p>06</p>
                        <img className="" src={value6} />
                      </div>
                      <p className="text-right">Always Feel At Home</p>
                    </div>
                  </div>
                </div>
                {/* <p className="p-offer-your-own Text-4 mt-3 mb-5">
                  Offer your own Community membership plans, to super boost your brand
                  value. It’s easy to get started.
                </p> */}
              </Col>
            </Row>
          </Container>
        </div>
      )}

      <div className="footer">
        <img src={EcosystemTM} className="logo" alt="logo" />
        <p className="address">
          All rights reserved Ecosystem Labs Ltd
          <br />
          UK - 22 Notting Hill Gate, London, W11 3JE
          <br />
          USA - 1601 Dove Street, Newport Beach, 9266
        </p>
        {/* <p className="contact-us">
          Brands, Retailers and Taskers Join Us!
          <br />
          Visit our sister platform Ecosystem.io
        </p> */}
        {/* <div className="social-networks">
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-facebook-f"></i>
        </div> */}
      </div>
    </div>
  );
}

export default Landing;
