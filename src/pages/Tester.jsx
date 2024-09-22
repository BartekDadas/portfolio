import React from 'react';
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import "../styles/Tester.css";

function openWindow (url) {
    window.open(url, '_blank');
}


function Tester() {
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
            <div className="skills-container">
                <h1 className="headline">Skills</h1>
                <ul className="skills-list">
                    <li onClick={openWindow('')}>Manual Testing</li>
                    <li>Test Automation</li>
                    <li>Test Analysis & Design</li>
                    <li>API Testing</li>
                    <li>Test Documentation</li>
                </ul>

                <h2 className="headline">Tools</h2>
                <ul className="tools-list">
                    <li>Jira</li>
                    <li>Trello</li>
                    <li>Postman</li>
                    <li>Selenium</li>
                    <li>PlayWright</li>
                    <li>TestNG</li>
                </ul>
            </div>
        </>
    );
}

export default Tester;