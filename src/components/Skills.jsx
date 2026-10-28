function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      note: "Interfaces people can move through without thinking.",
      skills: ["React", "JavaScript", "HTML", "CSS", "Responsive UI"],
    },
    {
      title: "Backend",
      note: "APIs, auth, and the rules a product actually runs on.",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "API Integration"],
    },
    {
      title: "Databases",
      note: "Models that match how the product works.",
      skills: ["MongoDB", "Prisma", "SQL", "Database Design"],
    },
    {
      title: "Mobile",
      note: "Apps with live features, not static screens.",
      skills: ["Flutter", "Dart", "Android", "Real-time Features"],
    },
    {
      title: "Tools",
      note: "The everyday kit for building and checking the work.",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm"],
    },
    {
      title: "Product",
      note: "Systems with more than one kind of user.",
      skills: [
        "Full-stack applications",
        "Admin dashboards",
        "E-commerce systems",
        "Mobile applications",
        "Backend systems",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <p className="section-label">03 — Skills</p>
        <h2>
          The stack behind
          <br />
          the products.
        </h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.title}>
            <p className="skill-index">0{index + 1}</p>
            <h3>{group.title}</h3>
            <p className="skill-note">{group.note}</p>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
