import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import mohanImage from './mohan.jpg'; // Import your profile photo
import resumeFile from './mohan_resume.pdf'; // Import your resume file

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Bootstrap'],
    Backend: ['Node.js', 'Express'],
    Database: ['MySQL'],
    Tools: ['GitHub', 'Git', 'VS Code', 'Netlify'],
    Languages: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  };

  const projects = [
    {
      title: 'Gen-Wi (Document Generator)',
      github: 'https://github.com/MOHANBURGULA/Gen-Wi.git',
      tech: 'HTML, CSS, JavaScript, Flask (Python)',
      description:
        'Web-based document generator for students and professionals with multiple templates.',
    },
    {
      title: 'QR Code Generator',
      github: 'https://github.com/MOHANBURGULA/qr-code-generator.git',
      tech: 'HTML, CSS, JavaScript',
      description: 'Generates QR codes quickly for text or URLs with a clean UI.',
    },
    {
      title: 'Lost2Found',
      github: 'https://github.com/MOHANBURGULA/lost-to-found.git',
      tech: 'React, Node.js, ',
      description:
        'Helps users report and recover lost items through a centralized platform.',
    },
  ];

  // Function to handle resume download
  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Burgula_Mohan_Resume.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to open resume in new tab
  const viewResume = () => {
    window.open(resumeFile, '_blank');
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="nav-name">Burgula Mohan</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Hi, I'm Mohan</h2>
              {/* <h2>Computer Science Student</h2> */}
              <h3>Aspiring Full-Stack Developer</h3>
              <p>Specializing in modern web technologies and AI-powered applications</p>
              
              {/* Resume Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="resume-buttons"
              >
                <button 
                  onClick={viewResume}
                  className="resume-button view-resume"
                >
                  View Resume
                </button>
                <button 
                  onClick={downloadResume}
                  className="resume-button download-resume"
                >
                  Download Resume
                </button>
              </motion.div>
            </motion.div>

            {/* Profile Photo Section */}
            <motion.div
              className="profile-photo-section"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="photo-container">
                <img 
                  src={mohanImage}
                  alt="Burgula Mohan" 
                  className="profile-image"
                />
                <div className="image-border"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rest of your sections remain the same */}
        {/* About Section */}
        <section id="about" className="section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <div className="about-content">
            <p>
              I am a 3rd Year CSE student at MVSR Engineering College, passionate about full-stack
              development and AI-powered applications. I enjoy building real-world projects and
              continuously improving my skills in web development, programming, and software design.
            </p>
            <p>
              I create innovative solutions to real problems, focusing on clean code and great user experiences.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, list]) => (
              <motion.div 
                key={category} 
                className="skill-category"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{category}</h3>
                <ul>
                  {list.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>
          <div className="projects-grid">
            {projects.map(proj => (
              <motion.div
                key={proj.title}
                className="project-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
                <p className="project-tech">
                  Tech Stack: {proj.tech}
                </p>
                <a href={proj.github} target="_blank" rel="noreferrer" className="project-link">
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact
          </motion.h2>
          <div className="contact-content">
            <p>
              Email:{' '}
              <a href="mailto:mohanburgula98@gmail.com">mohanburgula98@gmail.com</a>
            </p>
            <p>
              GitHub:{' '}
              <a href="https://github.com/MOHANBURGULA" target="_blank" rel="noreferrer">
                github.com/MOHANBURGULA
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/mohanburgula" target="_blank" rel="noreferrer">
                linkedin.com/in/mohanburgula
              </a>
            </p>
            <p>
              Phone: <a href="tel:+919618019112">+91 9618019112</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Burgula Mohan. All rights reserved.</p>
      </footer>
    </div>
  );
}