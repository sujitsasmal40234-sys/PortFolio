import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer in Graphic Designing</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2024-2026</h3>
            </div>
            <p>
              Created more than 100 graphic designs for various clients,
              successfully completing a lot of complicated work and building a
              strong portfolio in the field.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Course of Animation & VFX</h4>
                <h5>Arena Animation Institute</h5>
              </div>
              <h3>2023-2025</h3>
            </div>
            <p>
              Pursuing specialized course in Animation, Visual Effects, and
              Graphic Design at Arena Animation Institute.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary in Science</h4>
                <h5>Tamluk High School</h5>
              </div>
              <h3>2021-2022</h3>
            </div>
            <p>
              Completed Higher Secondary education with a focus on Science from
              Tamluk High School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
