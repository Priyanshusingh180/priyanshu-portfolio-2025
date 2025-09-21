import React, { useState } from 'react';
import Card from '../Card/Card';
import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import cb from "../../assets/cb.png";
import tti from "../../assets/tti.png";
import br from "../../assets/br.png";
import ise from "../../assets/ise.png";
import "./Project.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    });
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    });
  });

  // Project data with additional details
  const projects = [
    {
      id: 1,
      title: "VIRTUAL ASSISTANCE",
      image: va,
      description: "An AI-powered virtual assistant that helps users with daily tasks, scheduling, and information retrieval.",
      technologies: ["React", "Tailwind", "gemini-api-key"],
      link: "https://avani-priyanshu-ai.netlify.app", // Updated link
      
    },
    {
      id: 2,
      title: "JAVASCRIPT WEATHER APP",
      image: fw,
      description: "A weather forecast app built with JavaScript fetching real-time data from a weather API.",
      technologies: ["Javascript", "HTML", "CSS", "OpenweatherApi"],
      link: "https://priyanshusingh180.github.io/Weather-app/",
      
    },
    {
      id: 3,
      title: "QR-GENERATOR",
      image: cb,
      description: "Convert text or images into scannable QR codes. Customize, download, and share your designs effortlessly.",
      technologies: ["HTML", "Javascript", "css", "API"],
      link: "https://qr-generator-priyanshu.netlify.app/",
      
    },
    {
      id: 4,
      title: "TEXT TO SPEECH CONVERTOR",
      image: tti,
      description: "A web app that converts text to speech using the Web Speech API. Features voice selection, adjustable rate/pitch, and download functionality.",
      technologies: ["JavaScript,", "HTML5", "CSS3", "Web Speech API"],
      link: "https://text-to-speech-priyanshu.netlify.app/",
      
    },
    {
      id: 5,
      title: "PASSWORD GENERATOR",
      image: br,
      description: "A secure password generator that creates strong, customizable passwords to enhance your online security.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      link: "https://password-generator-priyanshu.netlify.app/",
      
    },
    {
      id: 6,
      title: "IMAGE SLIDER",
      image: ise,
      description: "A reverse image search engine that finds similar images using content-based image retrieval.",
      technologies: ["JavaScript,", "HTML5", "CSS3"],
      link: "https://image-slider-priyanshu.netlify.app/",
      
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects">
      <h1 id='para'>1+ YEARS EXPERIENCE IN PROJECTS</h1>
      <div className="slider">
        {projects.map(project => (
          <div key={project.id} onClick={() => openProject(project)}>
            <Card title={project.title} image={project.image} />
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProject}>×</button>
            <div className="modal-image-container">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-details">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="technologies">
                <h3>Technologies Used:</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Live Project
                </a>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;