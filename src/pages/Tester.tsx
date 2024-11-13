import React from 'react';
import { Helmet } from "react-helmet";
import Header from "components/Header";
import "../styles/Tester.css";

const Tester: React.FC = () => {
  const openWindow = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Bartosz Dadas - Testing Skills</title>
        <meta
          name="description"
          content="Explore Bartosz Dadas' testing skills, experience, and tools proficiency."
        />
      </Helmet>
      <Header />
      <div className="skills-container">
        <h1 className="headline">Testing Skills & Expertise</h1>
        <ul className="skills-list">
          <li onClick={() => openWindow('https://drive.google.com/drive/folders/18PazsW8h_qQhRwbz9j19_GTswF8w3PI2?usp=sharing')}>
            Manual Testing
          </li>
          <li onClick={() => openWindow('https://drive.google.com/file/d/1OBSri6x4JPbdZfTb0exU4s7qk2dMHuSm/view?usp=sharing')}>
            Test Automation
          </li>
          <li>Test Analysis & Design</li>
          <li onClick={() => openWindow('https://drive.google.com/drive/folders/16enxL6qqsDkkl7XYJUWVj5SQFkre6l9c?usp=sharing')}>
            API Testing
          </li>
          <li onClick={() => openWindow('https://drive.google.com/file/d/1Iot47GhHzVRCKcQIzjumN_8u99aHTQol/view?usp=sharing')}>
            Test Documentation
          </li>
        </ul>

        <h2 className="headline">Tools & Technologies</h2>
        <ul className="tools-list">
          <li onClick={() => openWindow('https://drive.google.com/drive/folders/1R7VXJTcGZJE7xqkqUGmfozLgDXeihXn6?usp=sharing')}>
            Jira
          </li>
          <li onClick={() => openWindow('https://drive.google.com/drive/folders/1UydkguCV0TlZXwRNFtNfyQJbExF-3Qmq?usp=drive_link')}>
            Trello
          </li>
          <li>Postman</li>
          <li>Selenium</li>
          <li onClick={() => openWindow('https://drive.google.com/file/d/1H74Xff8w_EeSj1t0btONH6xCroS6Cf5U/view?usp=sharing')}>
            TestNG
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tester;