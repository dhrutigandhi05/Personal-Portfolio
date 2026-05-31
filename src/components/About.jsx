import { motion } from "framer-motion";
import profile from "../assets/profile_pic.jpg";

function About() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <motion.div
            className="col-lg-7 text-start"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >

            <h1 className="hero-title">
              Hi, I’m Dhruti!
            </h1>

            <p className="hero-text">
              I’m a Computer Science student at Carleton University specializing in Artificial Intelligence and Machine Learning. I enjoy solving problems, learning new technologies, and building practical software across AI, data engineering, cloud, and full-stack development.
            </p>

            <div className="d-flex gap-3 flex-wrap mt-4">
              <a href="#projects" className="outline-btn">
                View Projects
              </a>

              <a href="#contact" className="outline-btn">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-5 text-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <div className="profile-frame">
              <img src={profile} alt="Dhruti Gandhi" className="profile-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;