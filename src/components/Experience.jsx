function Experience() {
  const experiences = [
    {
      period: "EDUCATION",
      title: "Mathematics Educator",
      organization: "Schools & JEE Main Foundation Programs",
      duration: "~5 YEARS",
      description:
        "Experienced mathematics educator with approximately five years of teaching experience across school education and JEE Main foundation-level programs. Focused on building strong conceptual foundations, analytical thinking, and problem-solving skills in students.",
      highlights: [
        "Mathematics Education",
        "JEE Main Foundation",
        "Conceptual Learning",
        "Problem Solving",
      ],
    },
    {
      period: "FOUNDER",
      title: "Founder & Mathematics Educator",
      organization: "Devine — Independent Mathematics Coaching",
      duration: "~3 YEARS",
      description:
        "Founded and independently operated Devine, a mathematics coaching institute, taking responsibility for teaching, student guidance, planning, and day-to-day operations. The institute reached a peak enrollment of 57 students.",
      highlights: [
        "Founded & Managed Institute",
        "57 Students at Peak",
        "Mathematics Education",
        "Student Management",
      ],
      location: "https://maps.app.goo.gl/YHL6oBtrFiUXgfmb6",
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="section-heading">
        <p className="section-label">04 — EXPERIENCE</p>

        <h2>
          Experience
          <br />
          beyond code.
        </h2>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            <div className="experience-period">
              {experience.period}
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <h3>{experience.title}</h3>

                  <p className="experience-organization">
                    {experience.organization}
                  </p>
                </div>

                <span className="experience-duration">
                  {experience.duration}
                </span>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>

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
                  View location ↗
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