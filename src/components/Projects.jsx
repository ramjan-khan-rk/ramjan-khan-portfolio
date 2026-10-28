const logisticsRoles = [
  {
    label: "Workspace",
    detail: "Start here",
    href: "https://rk-logistics-hub.onrender.com",
  },
  {
    label: "Client",
    detail: "Book cargo",
    href: "https://rk-logistics-book.onrender.com",
  },
  {
    label: "Owner",
    detail: "Command and fleet",
    href: "https://rk-logistics-owner.onrender.com",
  },
  {
    label: "Staff",
    detail: "Operations desk",
    href: "https://rk-logistics-staff.onrender.com",
  },
  {
    label: "Field",
    detail: "Driver trips",
    href: "https://rk-logistics-field.onrender.com",
  },
];

function LogisticsMock() {
  return (
    <div className="mock mock-desk" aria-hidden="true">
      <div className="mock-top">
        <span />
        <span />
        <span />
        <p>RK Logistics</p>
      </div>
      <div className="mock-desk-body">
        <div className="mock-side">
          <b>Desks</b>
          <em>Client</em>
          <em>Owner</em>
          <em>Staff</em>
          <em>Field</em>
        </div>
        <div className="mock-panel">
          <div className="mock-pills">
            <span>Quote</span>
            <span>Dispatch</span>
            <span>Trip</span>
          </div>
          <div className="mock-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function DominrMock() {
  return (
    <div className="mock mock-desk" aria-hidden="true">
      <div className="mock-top">
        <span />
        <span />
        <span />
        <p>DominR admin</p>
      </div>
      <div className="mock-desk-body">
        <div className="mock-side">
          <b>Live</b>
          <em>Orders</em>
          <em>Stock</em>
          <em>Cargo</em>
          <em>Finance</em>
        </div>
        <div className="mock-panel">
          <div className="mock-pills">
            <span>Catalog</span>
            <span>Batches</span>
            <span>Pincodes</span>
          </div>
          <div className="mock-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function GreenifyMock() {
  return (
    <div className="mock mock-phone-wrap" aria-hidden="true">
      <div className="mock-device">
        <p>GreenifyX</p>
        <strong>Plant something today</strong>
        <div>
          <span>Feed</span>
          <b />
        </div>
        <div>
          <span>Challenge</span>
          <b className="is-short" />
        </div>
        <div>
          <span>Chat</span>
          <b className="is-mid" />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      number: "01",
      title: "RK Logistics",
      type: "Logistics operating system",
      status: "Live demo",
      featured: true,
      description:
        "A workspace for a logistics company. Clients open an account and request cargo. The owner desk quotes, prices, and assigns the job. Staff handle the exception work. Drivers run the trip from the field app. One API sits behind all four desks.",
      stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Client booking",
        "Quotes and requests",
        "Live shipments",
        "Fleet and warehouses",
        "Pricing and cargo",
        "Exception desk",
        "Staff operations",
        "Field trips",
      ],
      architecture:
        "Separate React apps for client, owner, staff, and field, sharing an Express API and MongoDB.",
      visual: "logistics",
      note: "The demo host sleeps when idle. The first open can take a short moment.",
    },
    {
      number: "02",
      title: "DominR",
      type: "Full-stack commerce platform",
      status: "Early access",
      description:
        "A commerce app built from catalog and inventory through orders, delivery, staff, returns, and customer accounts. Google Play has granted publication access, and early registration is open.",
      stack: ["React", "Node.js", "Express.js", "Prisma", "REST API", "Authentication"],
      features: [
        "Product & category management",
        "Inventory & stock batches",
        "Order management",
        "Delivery & cargo",
        "Customer accounts",
        "Staff & roles",
        "Returns & exchanges",
        "Finance & expenses",
        "Bulk buying",
        "Serviceable pincodes",
      ],
      architecture: "Frontend, REST API, database, and an admin surface for daily operations.",
      visual: "dominr",
      href: "https://play.google.com/store/apps/details?id=com.dominr.app",
      linkLabel: "Join early access on Google Play",
    },
    {
      number: "03",
      title: "GreenifyX",
      type: "Mobile and backend application",
      status: "Project",
      description:
        "An environmental social app. People join eco-friendly activities, follow their progress, and stay in a community through friends, challenges, and real-time chat.",
      stack: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      features: [
        "User authentication",
        "Environmental activities",
        "Social feed",
        "Friends",
        "Challenges",
        "Leaderboard",
        "Real-time chat",
        "Image uploads",
        "User profiles",
        "Progress tracking",
      ],
      architecture: "Flutter app, REST API, MongoDB, and real-time communication.",
      visual: "greenify",
      href: "https://github.com/ramjan-khan-rk/GreenifyX",
      linkLabel: "View on GitHub",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="section-label">02 — Selected work</p>
        <h2>
          Products with
          <br />
          a job to do.
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article
            className={`project-card ${project.featured ? "is-featured" : ""}`}
            key={project.title}
          >
            <div className="project-number">{project.number}</div>

            <div className="project-content">
              <div className="project-top">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-status">{project.status}</span>
              </div>

              <p className="project-description">{project.description}</p>

              {project.visual === "logistics" && (
                <>
                  <LogisticsMock />
                  <div className="role-strip">
                    {logisticsRoles.map((role) => (
                      <a
                        key={role.label}
                        href={role.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{role.label}</span>
                        <small>{role.detail}</small>
                      </a>
                    ))}
                  </div>
                </>
              )}
              {project.visual === "dominr" && <DominrMock />}
              {project.visual === "greenify" && <GreenifyMock />}

              <div className="project-details">
                <div className="project-detail">
                  <span className="project-detail-label">Key systems</span>
                  <div className="project-features">
                    {project.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                </div>
                <div className="project-detail">
                  <span className="project-detail-label">Architecture</span>
                  <p>{project.architecture}</p>
                  <div className="project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>

              {project.href && (
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel}
                </a>
              )}

              {project.note && <p className="project-note">{project.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
