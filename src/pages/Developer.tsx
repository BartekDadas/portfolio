import React from 'react';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import Header from "components/Header";
import { Button } from "components/ui";
import { useLinkClickHandler } from "react-router-dom";
import SkillsGrid from 'components/3d/FloatingSkills';
import "../styles/Developer.css";

const projects = [{
    title: "ImageGen",
    description: "Text to Image Generator using the Recraft.ai v3 API",
    tech: ["Flutter", "Recraft", "GoogleAuth"],
    link: "https://github.com/BartekDadas/video_gen_public/tree/main",
    demo: "https://subtle-frangipane-2991d4.netlify.app"
  }
];

const Developer: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bartosz Dadas - Developer Portfolio</title>
        <meta
          name="description"
          content="Explore Bartosz Dadas' development projects and technical skills."
        />
      </Helmet>
      <Header />
      <div className="dev-container">
        <div className="return-section">
          <Button 
            shape="round" 
            className="return-button" 
            onClick={useLinkClickHandler('/')}
          >
            Return to Home
          </Button>
        </div>

        <section className="hero-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Mobile & Full-Stack Development</h1>
            <p className="subtitle">Crafting innovative digital solutions</p>
          </motion.div>

          <div className="skills-visualization">
            <SkillsGrid />
          </div>
        </section>

        <section className="projects-section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px'}}>
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Developer;