import React, { useState, useEffect, useRef } from "react";
import "../styles/photoBook.css";
import HTMLFlipBook from "react-pageflip";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CakeIcon from "@mui/icons-material/Cake";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import RadarIcon from "@mui/icons-material/Radar";
import SpaIcon from "@mui/icons-material/Spa";
import TimesOneMobiledataIcon from "@mui/icons-material/TimesOneMobiledata";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import ChurchIcon from "@mui/icons-material/Church";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Tooltip from "@mui/material/Tooltip";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import Logo from "./assets/ccg logo with bg.jpg";
import PageCoverDesign from "./assets/cover book design.png";
import Image1 from "./assets/image1.jpg";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.jpg";
import Image4 from "./assets/image4.jpg";
import Image5 from "./assets/image5.jpg";
import Image6 from "./assets/image6.avif";
import Image7 from "./assets/image7.jpg";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <img
          src={PageCoverDesign}
          alt="backcover"
          style={{ height: "300px", width: "200px" }}
        />
        {/**<h2 className="book-title">{props.children}</h2> */}
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-header">
          <img src={Logo} alt="CCG Logo" className="ccg-logo" />
          <span className="page-header-txt">
            Real Estate And Allied Services Community Group{" "}
            {/**- {props.number} */}
          </span>
        </div>
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <hr />
        <div className="page-footer"> Page {props.number + 1}</div>
      </div>
    </div>
  );
});


const PhotoBook = () => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const flipBookRef = useRef(null);

  const nextButtonClick = () => {
    if (flipBookRef.current && flipBookRef.current.getPageFlip) {
      flipBookRef.current.getPageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current && flipBookRef.current.getPageFlip) {
      flipBookRef.current.getPageFlip().flipPrev();
    }
  };

  const onPage = (e) => {
    setPage(e.data);
  };


  const userDetails = [
    {
      name: "Sam Ayeni",
      postInCCG: "Assistant Leader CCG 13",
      natureOfBusiness: "Real Estate Consultancy, Networking and Development",
      birthday: "4th January",
      numberOfTimesInCCG: "2+",
      location: "Lagos",
      religion: "Christian",
      companyName: { first: "SPIDL", second: "SAMSTEAD PROPERTY LINKS" },
      positionHeldInCompany: "CEO - Chief Executive Officer",
      denominationAndLocation: "TCN Abule Egba",
      favouriteMeal: "Sandwich and Cappuccino",
      expectation: "Learn more",
      hobbies:
        "I read books, when i'm stressed i watch documentaries, classic action movies and history",
      roleModel: {
        first: "Pastor Poju Oyemade",
        second: "Rev'd Sam Adeyemi",
        third: "Pastor John Maxwell",
      },
      randomThingAboutYou:
        "I'm a man of cloth ordained in Christ Apostolic Church Worldwide",
      socialLinks: {
        linkedin: "linkedin.com",
        twitter: "twitter.com",
        facebook: "facebook.com",
        instagram: "instagram.com",
        website: "www.alaajo.com",
      },
    },
    {
      name: "Joshua",
      natureOfBusiness: "Real Estate Consultancy, Networking and Development",
      birthday: "11th November",
      numberOfTimesInCCG: "1",
      location: "Lagos",
      religion: "Christian",
      denominationAndLocation: "RCCG Dominion City",
      favouriteMeal: "Sandwich and Cappuccino",
      expectation: "Learn more",
      roleModel: {
        first: "Bishop Oyedepo",
        second: "Apostle Johnson Suleman",
        third: "Jason Njoku",
      },
      randomThingAboutYou:
        "I'm a man of cloth ordained in Christ Apostolic Church Worldwide",
      socialLinks: {
        linkedin: "linkedin.com",
        twitter: "twitter.com",
        facebook: "facebook.com",
        instagram: "instagram.com",
        website: "sam-ayeni.com",
      },
    },
    {
      name: "John",
      natureOfBusiness: "Real Estate Consultancy, Networking and Development",
      birthday: "13th November",
      numberOfTimesInCCG: "1",
      location: "Lagos",
      religion: "Christian",
      denominationAndLocation: "Winners Chapel",
      favouriteMeal: "Sandwich and Cappuccino",
      expectation: "Learn more",
      roleModel: {
        first: "Bishop Oyedepo",
        second: "Apostle Johnson Suleman",
        third: "Jason Njoku",
      },
      randomThingAboutYou:
        "I'm a man of cloth ordained in Christ Apostolic Church Worldwide",
      socialLinks: {
        linkedin: "linkedin.com",
        twitter: "twitter.com",
        facebook: "facebook.com",
        instagram: "instagram.com",
        website: "www.alaajo.com",
      },
    },
  ];


  useEffect(() => {
    if (flipBookRef.current && flipBookRef.current.getPageFlip) {
      setTotalPage(flipBookRef.current.getPageFlip().getPageCount());
    }
  }, []);


  return (
    <div className="book">
      <HTMLFlipBook
        width={500}
        height={400}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        className="demo-book"
        ref={flipBookRef}
      >
        <PageCover>BOOK TITLE</PageCover>
        <Page number={1} className="pages">
          <Image
            cloudName="pastorcoder"
            publicId="real-estate-ccg-2023/about covenant community group.png"
            className="about-ccg-page-img-orientation"
            alt={userDetails[0].name}
          />

          <div style={{ marginLeft: "30px" }}>
            <h1>
              <span className="about-the-ccg"> About The CCG </span>
            </h1>
            <p>
              {/**<CelebrationIcon className="icon" /> */}
              <span className="about-text">
                {" "}
                The covenant community group is an initiative of the covenant
                nation to promote peer mentoring, relationships, and networking
                among like-minded people in similar stages in their careers. The
                purpose of these community groups is to create channels of
                interaction for people with similar interests to create a haven
                for members, to foster integration and fellowship, and to
                mitigate missed opportunities as a result of unharnessed
                relationships.
              </span>
              <br />
              <br />
            </p>

            <p>
              <OpenInNewIcon
                className="about-icon"
                style={{ marginTop: "10px" }}
              />
              <b
                style={{ color: "grey", marginLeft: "1px", marginTop: "-10px" }}
              >
                Website :{" "}
              </b>
              <a
                href="https://www.tcncommunitygroups.org/"
                target="_blank"
                rel="noreferrer"
              >
                www.tcncommunitygroups.org
              </a>
            </p>
            <div>
              <a
                href="https://www.linkedin.com/company/the-covenant-nation/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="about-social-icons " />
              </a>

              <a
                href="https://www.instagram.com/covenantcommunitygroups"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="about-social-icons " />
              </a>

              <a
                href="https://twitter.com/tcncommunities"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon className="about-social-icons " />
              </a>

              <a
                href="https://facebook.com/TheCovenantCommunityGroups"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className="about-social-icons " />
              </a>
              <a
                href="mailto:tcncommunitygroups@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon className="about-social-icons " />
              </a>
              <a
                href="https://www.youtube.com/@covenantcommunitygroups5596"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon className="about-social-icons " />
              </a>
            </div>
          </div>
        </Page>

        <Page number={2} className="pages">
          <Image
            cloudName="pastorcoder"
            publicId="real-estate-ccg-2023/sam-ayeni1.png"
            className="page-img-orientation"
            alt={userDetails[0].name}
          />

          <div style={{ marginLeft: "30px" }}>
            {/* Display details for Sam Ayeni */}
            <p>
              <CelebrationIcon className="icon" />
              <span className="sam-ayeni-name"> {userDetails[0].name}</span>
            </p>
            <p>
              {/**<CelebrationIcon className="icon" /> */}
              <span className="post-in-ccg"> {userDetails[0].postInCCG}</span>
            </p>
            <p>
              <CakeIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>Birthday :</b>
              <span className="dob"> {userDetails[0].birthday}</span>
              <Tooltip
                title={`Add date to calendar to wish ${userDetails[0].name} happy birthday`}
                arrow
                placement="left"
              >
                <AddAlarmIcon className="alarm-icon" />
              </Tooltip>
            </p>
            <p>
              <LocationOnIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>Location :</b>
              <span> {userDetails[0].location}</span>
            </p>
            <p>
              <BusinessIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>Company name :</b>
              <span> {userDetails[0].companyName.first}</span>{" "}
              <span>and {userDetails[0].companyName.second}</span>
            </p>
            <p>
              <RadarIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>
                Position in company :
              </b>
              <span> {userDetails[0].positionHeldInCompany}</span>{" "}
            </p>
            <p>
              <SpaIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>
                Nature of business :
              </b>
              <span> {userDetails[0].natureOfBusiness}</span>{" "}
            </p>
            <p>
              <TimesOneMobiledataIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>
                Number of time in CCG :
              </b>
              <span> {userDetails[0].numberOfTimesInCCG}</span>{" "}
            </p>
            <p>
              <ChurchIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>Religion :</b>
              <span> {userDetails[0].religion}</span>{" "}
            </p>
            <p>
              <CallSplitIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>
                Denomination and Location :
              </b>
              <span> {userDetails[0].denominationAndLocation}</span>{" "}
            </p>
            <p>
              <RestaurantIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>
                Favourite Meal :
              </b>
              <span> {userDetails[0].favouriteMeal}</span>{" "}
            </p>
            <span>
              <ModelTrainingIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>Role Model :</b>
              <span style={{ fontSize: "15px" }}>
                {" "}
                {userDetails[0].roleModel.first} ,{" "}
                {userDetails[0].roleModel.second} ,
                {userDetails[0].roleModel.third} .
              </span>{" "}
            </span>
            <p>
              <ShuffleIcon className="icon" />
              <b
                style={{
                  color: "grey",
                  marginLeft: "1px",
                }}
              >
                Something random about {userDetails[0].name} :
              </b>
              <span className="text-container">
                {" "}
                {userDetails[0].randomThingAboutYou}
              </span>{" "}
            </p>
            <p>
              <DownhillSkiingIcon className="icon" />
              <b style={{ color: "grey", marginLeft: "1px" }}>
                Hobbies and interest :
              </b>
              <span> {userDetails[0].hobbies}</span>{" "}
            </p>
            <p>
              <OpenInNewIcon className="icon" style={{ marginTop: "20px" }} />
              <b style={{ color: "grey", marginLeft: "1px" }}>Website : </b>
              <a
                href={`http://${userDetails[0].socialLinks.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {userDetails[0].socialLinks.website}
              </a>
            </p>
            <div>
              <a
                href={`http://${userDetails[0].socialLinks.linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="social-icons" />
              </a>

              <a
                href={`http://${userDetails[0].socialLinks.instagram}`}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="social-icons" />
              </a>

              <a
                href={`http://${userDetails[0].socialLinks.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon className="social-icons" />
              </a>

              <a
                href={`http://${userDetails[0].socialLinks.facebook}`}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className="social-icons" />
              </a>
            </div>
          </div>
        </Page>
        <Page number={3} className="pages">
          <img src={Image2} alt="2" className="page-img-orientation" />
          Image Two...
          <div>
            {/* Display details for Joshua */}
            <h6>Name: {userDetails[1].name}</h6>
            <h6>Role Model (3rd): {userDetails[1].roleModel.third}</h6>
            <h6>LinkedIn: {userDetails[1].socialLinks.linkedin}</h6>
            <h6>Website: {userDetails[1].socialLinks.website}</h6>
            <h6>Religion: {userDetails[1].religion}</h6>
            <h6>Role Model (1st): {userDetails[1].roleModel.first}</h6>
          </div>
        </Page>
        <Page number={4} className="pages">
          <img src={Image3} alt="3" className="page-img-orientation" />
          Image Three...
          {/* Display details for John */}
          <b>Name: {userDetails[2].name}</b>
          <b>Role Model (3rd): {userDetails[2].roleModel.third}</b>
          <b>LinkedIn: {userDetails[2].socialLinks.linkedin}</b>
          <b>Website: {userDetails[2].socialLinks.website}</b>
          <div>
            <p>Religion: {userDetails[2].religion}</p>
            <p>Role Model (1st): {userDetails[2].roleModel.first}</p>
          </div>
        </Page>
        <Page number={5} className="pages">
          <img src={Image4} alt="4" className="page-img-orientation" />
          Image Four...
        </Page>
        <Page number={6}>
          <img src={Image5} alt="5" className="page-img-orientation" />
          Image Five...
        </Page>
        <Page number={7}>
          <img src={Image6} alt="6" className="page-img-orientation" />
          Image Six...
        </Page>
        <Page number={8}>
          <img src={Image7} alt="7" className="page-img-orientation" />
          Image Seven...
        </Page>
        <Page number={9}></Page>
        {/*...*/}
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>

      {/** <div className="container">
        <div>
          <button type="button" onClick={prevButtonClick}>
            Previous page
          </button>
          [<span>{page}</span> of <span>{totalPage}</span>]
          <button type="button" onClick={nextButtonClick}>
            Next page
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default PhotoBook;
