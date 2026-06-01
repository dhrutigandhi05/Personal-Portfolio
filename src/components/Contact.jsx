import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const contactOptions = [
    {
      id: "email",
      label: "Email",
      value: "dhrutigandhi.05@gmail.com",
      href: "mailto:dhrutigandhi.05@gmail.com",
      buttonText: "Send An Email",
      icon: "bi-envelope",
      message: "The best way to reach me directly.",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/dhruti-gandhi-399900297",
      href: "https://www.linkedin.com/in/dhruti-gandhi-399900297",
      buttonText: "Open LinkedIn",
      icon: "bi-linkedin",
      message: "Connect with me professionally and follow my academic and career updates.",
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/dhrutigandhi05",
      href: "https://github.com/dhrutigandhi05",
      buttonText: "Open GitHub",
      icon: "bi-github",
      message: "Explore my projects, code, and technical work.",
    },
  ];

  const [selectedContact, setSelectedContact] = useState(contactOptions[0]);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Contact</h2>
        </motion.div>

        <motion.div
          className="contact-hub"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-left">
            <h3>Choose a way to reach me</h3>
            <p>Have a project, opportunity, or idea in mind? I’d love to connect and talk about how we can collaborate or just chat about tech and projects!</p>

            <div className="contact-tabs">
              {contactOptions.map((option) => (
                <button
                  type="button"
                  key={option.id}
                  className={`contact-tab ${
                    selectedContact.id === option.id ? "active-contact-tab" : ""
                  }`}
                  onClick={() => setSelectedContact(option)}
                >
                  <span>
                    <i className={`bi ${option.icon}`}></i>
                  </span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedContact.id}
                className="contact-display"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
              >
                <div className="contact-display-icon">
                  <i className={`bi ${selectedContact.icon}`}></i>
                </div>

                <p className="contact-display-label">{selectedContact.label}</p>
                <h3>{selectedContact.value}</h3>
                <p>{selectedContact.message}</p>

                <a
                  href={selectedContact.href}
                  target={selectedContact.id === "email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="accent-btn contact-action-btn"
                >
                  {selectedContact.buttonText}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;