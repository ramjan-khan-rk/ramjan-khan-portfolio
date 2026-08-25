
function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive UI",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "API Integration",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MongoDB",
        "Prisma",
        "SQL",
        "Database Design",
      ],
    },
    {
      title: "Mobile",
      skills: [
        "Flutter",
        "Dart",
        "Android",
        "Real-time Features",
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "npm",
      ],
    },
    {
      title: "Product Development",
      skills: [
        "Full-Stack Applications",
        "Admin Dashboards",
        "E-commerce Systems",
        "Mobile Applications",
        "Backend Systems",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <p className="section-label">03 — SKILLS</p>

        <h2>
          Tools I use
          <br />
          to build.
        </h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
