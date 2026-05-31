import { motion } from "framer-motion";
import carletonLogo from "../assets/logos/carleton_logo.png";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          className="soft-card education-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="row align-items-center g-4">
            <div className="col-md-2 text-center">
              <img
                src={carletonLogo}
                alt="Carleton University logo"
                className="logo-card"
              />
            </div>

            <div className="col-md-10">
              <div className="d-flex justify-content-between flex-wrap gap-3">
                <div>
                  <h3 className="card-title">Carleton University</h3>
                  <p className="card-subtitle">
                    Bachelor of Computer Science Honours, Artificial Intelligence and Machine Learning
                  </p>
                </div>

                <div className="card-meta text-md-end">
                  <p>Expected 2027</p>
                  <p>Ottawa, ON</p>
                </div>
              </div>

                <div className="coursework-block">
                    <p className="mini-heading">Relevant Coursework</p>

                    <div className="tag-list">
                        <span>Data Structures & Algorithms</span>
                        <span>Object Oriented Programming</span>
                        <span>Database Management Systems</span>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;