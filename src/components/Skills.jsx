import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "SQL", "C/C++", "Java", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      category: "Frameworks & Tools",
      skills: ["React", "Express", "Node.js", "FastAPI", "Git", "Docker", "Databricks", "Ansible", "GitHub Actions", "Quart"],
    },
    {
      category: "Cloud & Databases",
      skills: ["AWS", "Microsoft Azure", "Oracle", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "DynamoDB", "CosmosDB"],
    },
    {
      category: "Strengths",
      skills: ["Team Collaboration", "Communication", "Problem Solving", "Time Management", "Agile Learner"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="soft-card skill-card"
              key={group.category}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="skill-card-header">
                <span className="skill-number">0{index + 1}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;