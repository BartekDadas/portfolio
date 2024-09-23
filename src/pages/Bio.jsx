import React from 'react';
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import "./../styles/Bio.css";
import picture from "../images/20231223_164542.jpg";

const Bio = () => {
    return (
        <>
        <Helmet>
            <title>Bartosz Dadas&#39; Portfolio</title>
            <meta
            name="description"
            content="Jestem młodym programistą, który chce się rozwijać w branży IT i nie tylko. Znajdziesz tutaj moje projekty, które są dowodem na moje umiejętności."
            />
        </Helmet>
        <div className="flex w-full flex-col gap-[182px] md:gap-[136px] sm:gap-[91px]">
            <Header />
        </div>
        <div className="bio-container">
      <div className="bio-header">
        <img 
          src={picture} 
          alt="Profile" 
          className="profile-pic" 
        />
        <h1>Bartosz Dadas</h1>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <p>
        Cześć jestem Bartek i od ponad roku jestem mobile junior developerem,
        który z pasją tworzy nowoczesne i funkcjonalne aplikacje. 
        Podczas pracy maiłem również okazję wspomagać dział testerów oprogramowania, wiec nabrałem również praktyki w tej dziedzinie,
        co pozwala mi dbać o jakość i stabilność projektów.
        Fascynują mnie min. tematy związane z IT oraz sztuczną inteligencją, 
        a każde nowe wyzwanie jest dla mnie szansą na rozwój i zdobycie nowych umiejętności.
        </p>
      </div>
      <div className="courses-section">
        <h2>Finished Courses</h2>
        <ul className="courses-list">
          <li>The Complete 2024 Software Testing Bootcamp</li>
          <li>Machine Learing use in Flutter</li>
          <li>Python Course for Beginners</li>
          <li>Artefical Inteligence A-Z 2024</li>
          <li>The complete Android 15 course</li>
        </ul>
      </div>
    </div>
        </>
    );
};

export default Bio;