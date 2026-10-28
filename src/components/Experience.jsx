function Experience() {
  const experiences = [
    {
      period: "Education",
      title: "Mathematics educator",
      organization: "Schools and JEE Main foundation programs",
      duration: "About 5 years",
      description:
        "Taught mathematics across school education and JEE Main foundation programs. The work was conceptual foundations, analytical thinking, and problem solving — explaining hard ideas until they clicked.",
      highlights: [
        "Mathematics education",
        "JEE Main foundation",
        "Conceptual learning",
        "Problem solving",
      ],
    },
    {
      period: "Founder",
      title: "Founder and mathematics educator",
      organization: "Devine — independent mathematics coaching",
      duration: "About 3 years",
      description:
        "Founded and ran Devine, a mathematics coaching institute. Teaching, student guidance, planning, and day-to-day operations sat in one place. Peak enrollment was 57 students.",
      highlights: [
        "Founded and managed the institute",
        "57 students at peak",
        "Mathematics education",
        "Student management",
      ],
      location: "https://maps.app.goo.gl/YHL6oBtrFiUXgfmb6",
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="section-heading">
        <p className="section-label">04 — Experience</p>
        <h2>
          Years of teaching,
          <br />
          then building.
        </h2>
        <p className="section-intro">
          Before software, I spent years teaching mathematics and running my own
          coaching institute. That is where the patience for hard problems came from.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            <div className="experience-period">{experience.period}</div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <h3>{experience.title}</h3>
                  <p className="experience-organization">{experience.organization}</p>
                </div>
                <span className="experience-duration">{experience.duration}</span>
              </div>

              <p className="experience-description">{experience.description}</p>

              <div className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>

              {experience.location && (
                <a
                  className="experience-location"
                  href={experience.location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Devine on Maps
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
