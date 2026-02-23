import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiCloud,
  FiTool,
  FiBookOpen,
  FiTarget,
} from "react-icons/fi";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFigma,
  SiFlask,
  SiGooglecloud,
  SiOracle,
} from "react-icons/si";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FiCode size={20} />,
    skills: ["Python", "C++", "Java", "JavaScript", "R", "SQL/PLSQL"],
  },
  {
    title: "ML/DL Frameworks",
    icon: <FiTarget size={20} />,
    skills: ["TensorFlow", "PyTorch", "YOLOv5", "OpenCV", "Scikit-learn"],
  },
  {
    title: "Web Development",
    icon: <FiCode size={20} />,
    skills: ["React.js", "Node.js", "Flask", "WebRTC", "HTML/CSS"],
  },
  {
    title: "Databases",
    icon: <FiDatabase size={20} />,
    skills: ["MongoDB", "MySQL", "NoSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: <FiTool size={20} />,
    skills: [
      "GitHub",
      "VS Code",
      "Figma",
      "Jira",
      "LaTeX",
      "WSL",
      "Docker",
      "GitLab",
    ],
  },
  {
    title: "Cloud",
    icon: <FiCloud size={20} />,
    skills: ["Google Cloud Platform", "Oracle Cloud Infrastructure (OCI)"],
  },
];

const toolIcons = [
  { icon: <SiPython size={28} />, label: "Python" },
  { icon: <SiTensorflow size={28} />, label: "TensorFlow" },
  { icon: <SiPytorch size={28} />, label: "PyTorch" },
  { icon: <SiOpencv size={28} />, label: "OpenCV" },
  { icon: <SiReact size={28} />, label: "React" },
  { icon: <SiNodedotjs size={28} />, label: "Node.js" },
  { icon: <SiJavascript size={28} />, label: "JavaScript" },
  { icon: <SiFlask size={28} />, label: "Flask" },
  { icon: <SiMongodb size={28} />, label: "MongoDB" },
  { icon: <SiMysql size={28} />, label: "MySQL" },
  { icon: <SiGit size={28} />, label: "Git" },
  { icon: <SiGooglecloud size={28} />, label: "GCP" },
  { icon: <SiFigma size={28} />, label: "Figma" },
  { icon: <SiOracle size={28} />, label: "Oracle" },
];

const education = [
  {
    period: "2022 — 2027",
    title: "Integrated M.Sc. in Computer Science (AI & Data Science)",
    institution: "Cochin University of Science and Technology (CUSAT)",
    details: "GPA: 7.93/10 (till 6th semester) ",
  },
  {
    period: "2020 — 2022",
    title: "Higher Secondary (Science Stream)",
    institution: "M.E.S Raja Residential School",
    details: "",
  },
  {
    period: "2010 — 2020",
    title: "Secondary School",
    institution: "MEMS International School",
    details: "",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "var(--bg-surface)", position: "relative" }}
    >
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">
            Education, skills, and what drives me
          </p>
        </ScrollReveal>

        {/* Education Timeline */}
        <ScrollReveal delay={0.1}>
          <div style={{ marginBottom: 60 }}>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "var(--text-primary)",
              }}
            >
              <FiBookOpen size={20} style={{ color: "var(--color-primary)" }} />
              Education
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: 20,
                    background: "var(--bg-primary)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-color)",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      whiteSpace: "nowrap",
                      minWidth: 110,
                      paddingTop: 2,
                    }}
                  >
                    {edu.period}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {edu.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        marginBottom: 4,
                      }}
                    >
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <ScrollReveal delay={0.2}>
          <div style={{ marginBottom: 60 }}>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "var(--text-primary)",
              }}
            >
              <FiTarget size={20} style={{ color: "var(--color-primary)" }} />
              Technical Skills
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 16,
              }}
            >
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  style={{
                    padding: 20,
                    background: "var(--bg-primary)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                      color: "var(--color-primary)",
                    }}
                  >
                    {cat.icon}
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {cat.title}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: "5px 12px",
                          borderRadius: "var(--radius-xl)",
                          background: "var(--bg-surface)",
                          border: "1px solid var(--border-color)",
                          color: "var(--text-secondary)",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tools Marquee */}
        <ScrollReveal delay={0.3}>
          <div style={{ marginBottom: 60 }}>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "var(--text-primary)",
              }}
            >
              <FiTool size={20} style={{ color: "var(--color-primary)" }} />
              Tools & Technologies
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "center",
              }}
            >
              {toolIcons.map((tool) => (
                <motion.div
                  key={tool.label}
                  whileHover={{ y: -6, scale: 1.1 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    padding: "16px 20px",
                    background: "var(--bg-primary)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                    cursor: "default",
                    minWidth: 80,
                    transition: "border-color 0.3s, color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary)";
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-color)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {tool.icon}
                  <span style={{ fontSize: "0.7rem", fontWeight: 500 }}>
                    {tool.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Career Goals */}
        <ScrollReveal delay={0.4}>
          <div
            style={{
              padding: 28,
              background: "var(--bg-primary)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-color)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: 12,
                color: "var(--color-accent)",
              }}
            >
              🎯 Career Goals
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              My goal is to contribute meaningfully to research and industry
              projects while constantly learning and growing in the field of
              technology. I am eager to explore cutting-edge technologies and
              apply them to solve real-world problems, particularly in the
              domains of Computer Vision, NLP, and AI-driven applications.
            </p>
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(0,212,255,0.06)",
                filter: "blur(20px)",
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
