import { motion } from "framer-motion";
import cibcLogo from "../assets/logos/cibc_logo.png";
import statCanLogo from "../assets/logos/statsCan_logo.png";

function Experience() {
  const experiences = [
    {
      company: "Statistics Canada",
      role: "Data Engineer Co-op",
      dates: "April 2026 - Present",
      location: "Ottawa, ON",
      logo: statCanLogo,
      points: [
        "Implemented client-requested changes in applications, including bilingual support and configurable custom prompts.",
        "Debugged and repaired broken CI/CD pipelines to restore automated build and deployment workflows.",
        "Tested Copilot Studio agents using internal data for organization-specific knowledge retrieval.",
        "Conducted accessibility testing for Census-related applications."
      ]
    },
    {
      company: "CIBC",
      role: "Software Developer Co-op",
      dates: "May 2025 - December 2025",
      location: "Toronto, ON",
      logo: cibcLogo,
      points: [
        "Developed ETL workflows in Databricks to integrate compliance data into Power BI dashboards.",
        "Automated monitoring workflows using Ansible playbooks, reducing manual system checks.",
        "Cleaned and validated large datasets using Python Pandas and SQL.",
        "Built CI/CD automation with GitHub Actions for patching and deployment scripts."
      ]
    },
    {
      company: "CIBC",
      role: "Software Developer Intern",
      dates: "May 2024 - August 2024",
      location: "Toronto, ON",
      logo: cibcLogo,
      points: [
        "Created SQL queries to validate and update records across multiple databases.",
        "Performed database maintenance, schema changes, version upgrades, backups, and restores.",
        "Implemented PostgreSQL AI extensions across multiple databases to improve query efficiency."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.div
              className="soft-card experience-card"
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="experience-logo-wrap">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="experience-logo"
                />
              </div>

              <div className="experience-content">
                <div className="d-flex justify-content-between flex-wrap gap-3">
                  <div>
                    <h3 className="card-title">{experience.role}</h3>
                    <p className="card-subtitle">{experience.company}</p>
                  </div>

                  <div className="card-meta text-md-end">
                    <p>{experience.dates}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <ul className="experience-points">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;