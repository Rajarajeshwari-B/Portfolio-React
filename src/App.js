import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>Rajarajeshwari B</h1>
          </div>
          <ul className="nav-list">
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li className="dropdown">
              <a href="#">Projects</a>
              <ul className="dropdown-content">
                <li><a href="#">AI Nutrition</a></li>
                <li><a href="#">Weather App</a></li>
                <li><a href="#">Educational Website</a></li>
              </ul>
            </li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h2>WELCOME TO MY PORTFOLIO!!!</h2>
          <p>I'm Rajarajeshwari, a Computer Science and Engineering student.</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>Hello! I'm Rajarajeshwari, a Computer Science and Engineering student with a passion for technology and innovation. My interests lie at the intersection of artificial intelligence, data science, and software development, where I constantly seek out ways to solve real-world problems with code.</p>
        <p>With hands-on experience in various programming languages and frameworks, I’ve built a range of projects, from AI-driven recommendation systems to interactive websites. I thrive on tackling new challenges and am deeply motivated to continue expanding my skill set, particularly in areas like machine learning and full-stack development.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skill-grid">
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawKU9fDljGZjKvB1zcXz8eAMg2J9YA38K1Q&s" alt="Python Icon" className="skill-icon" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAIea48o_i24iOD7BlxTvRRW14Q4ucAj61Q&s" alt="Java Icon" className="skill-icon" />
            <p>Java</p>
          </div>
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqeIdj8mkFKXckJZeAuRUa8QwixuQpvTnbA&s" alt="C++ Icon" className="skill-icon" />
            <p>C++</p>
          </div>
          <div className="skill-item">
            <img src="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc" alt="JavaScript Icon" className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg" alt="HTML/CSS Icon" className="skill-icon" />
            <p>HTML/CSS</p>
          </div>
          <div className="skill-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU819WsO3soh3C3qh9l2T_IlxgYgcRbsyhgA&s" alt="AI/ML Icon" className="skill-icon" />
            <p>AI & ML</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <img src="https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149641244.jpg?semt=ais_hybrid" alt="AI Nutrition App" />
            <h3>AI-Powered Nutrition Recommendation System</h3>
            <p>Developed an AI-driven app to provide personalized dietary recommendations based on health details.</p>
          </div>
          <div className="project-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxRgDkpFRDG-m5q-YE-e26jH4-bN8x6SJoQ&s" alt="Weather Prediction App" />
            <h3>Weather Prediction App</h3>
            <p>This app helps users get real-time weather updates, including temperature, humidity, and forecast for the coming days.</p>
          </div>
          <div className="project-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6tgHIVjlGCftDXuKN9kSnhXrs7HlHgu_Aw&s" alt="Educational Website" />
            <h3>Educational Website</h3>
            <p>An interactive platform designed to provide support, resources, and guidance to those facing harassment, along with educational materials for self-awareness.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <h3>College:</h3>
        <p>B.E. in Computer Science and Engineering, Chennai Institute of Technology (Expected 2027)</p>
        <h3>Schooling:</h3>
        <p>High School: Sharmila Goddess S.M Matric Hr Sec School, Porayar. (Graduated 2023)</p>
        <p>12th Grade: Science Stream, with a focus on Mathematics</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-details">
          <p>Email: <a href="mailto:rajarajeshwari.b@example.com">Mail</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/rajarajeshwari" target="_blank">LinkedIn</a></p>
          <p>GitHub: <a href="https://github.com/rajarajeshwarib" target="_blank">GitHub</a></p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-container">
        <p>&copy; 2024 Rajarajeshwari B. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
