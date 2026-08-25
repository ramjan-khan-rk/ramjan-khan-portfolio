
function Projects() {
  const projects = [
    {
      number: "01",
      title: "DominR",
      type: "FULL-STACK COMMERCE PLATFORM",
      status: "PRIVATE PRODUCT",

      description:
        "A complete commerce ecosystem designed and built from the ground up. The platform covers the entire journey from product management and inventory to orders, delivery, staff operations, returns and customer management.",

      stack: [
        "React",
        "Node.js",
        "Express.js",
        "Prisma",
        "REST API",
        "Authentication",
      ],

      features: [
        "Product & Category Management",
        "Inventory & Stock Batches",
        "Order Management",
        "Delivery & Cargo Management",
        "Customer Accounts",
        "Staff & Role Management",
        "Returns & Exchanges",
        "Finance & Expenses",
        "Bulk Buying",
        "Serviceable Pincodes",
      ],

      architecture:
        "Frontend + REST API + Database + Admin Operations",
    },

    {
      number: "02",
      title: "GreenifyX",
      type: "MOBILE + BACKEND APPLICATION",
      status: "PROJECT",

      description:
        "An environmental-focused social application designed to encourage people to participate in eco-friendly activities, track their progress and interact with a community built around positive environmental actions.",

      stack: [
        "Flutter",
        "Dart",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
      ],

      features: [
        "User Authentication",
        "Environmental Activities",
        "Social Feed",
        "Friends",
        "Challenges",
        "Leaderboard",
        "Real-time Chat",
        "Image Uploads",
        "User Profiles",
        "Progress Tracking",
      ],

      architecture:
        "Flutter App + REST API + MongoDB + Real-time Communication",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="section-label">02 — SELECTED WORK</p>

        <h2>
          Things I&apos;ve
          <br />
          built.
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">
              <div className="project-top">
                <div>
                  <p className="project-type">
                    {project.type}
                  </p>

                  <h3>{project.title}</h3>
                </div>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-details">
                <div className="project-detail">
                  <span className="project-detail-label">
                    KEY SYSTEMS
                  </span>

                  <div className="project-features">
                    {project.features.map((feature) => (
                      <span key={feature}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-detail">
                  <span className="project-detail-label">
                    ARCHITECTURE
                  </span>

                  <p>{project.architecture}</p>
                </div>
              </div>

              <div className="project-stack">
                {project.stack.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
