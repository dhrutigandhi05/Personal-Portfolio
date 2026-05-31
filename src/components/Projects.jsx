import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      title: "MediBot",
      type: "AI Medical Chatbot",
      summary:
        "An AI-powered medical chatbot using retrieval-augmented generation for real-time health information retrieval.",
      tech: [
        "Python",
        "FastAPI",
        "Databricks",
        "SQL",
        "Delta Lake",
        "MLflow",
        "scikit-learn",
        "TF-IDF",
        "kNN",
        "LLaMA",
        "Git",
      ],
    },
    {
      title: "Job Trend Analysis",
      type: "Cloud Data Pipeline",
      summary:
        "A cloud-based data pipeline and dashboard for collecting, cleaning, storing, and visualizing job posting trends.",
      tech: [
        "Python",
        "Pandas",
        "SQL",
        "AWS",
        "Streamlit",
        "Docker",
        "Git",
      ],
    },
    {
      title: "HintonMarket",
      type: "Farmers Market Management System",
      summary:
        "A Qt-based C++ desktop prototype for vendor identification, stall booking, waitlists, cancellations, and vendor dashboards.",
      tech: ["C++", "Qt Widgets", "Draw.io", "Git"],
    },
  ];

  const toggleProject = (title) => {
    setOpenProject(openProject === title ? null : title);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isOpen = openProject === project.title;

            return (
              <motion.button
                type="button"
                key={project.title}
                className={`soft-card project-click-card ${
                  isOpen ? "project-open" : ""
                }`}
                onClick={() => toggleProject(project.title)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -7 }}
              >
                <div className="project-card-top">
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3 className="card-title">{project.title}</h3>
                  </div>

                  <span className="project-toggle-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="project-reveal"
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="project-description">{project.summary}</p>

                      <div className="tag-list project-tags">
                        {project.tech.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;