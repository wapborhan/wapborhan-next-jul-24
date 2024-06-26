import React from "react";

const Resume = () => {
  return (
    <div className="resume flex-column-mobile">
      {/* TITLE STARTS */}
      <div className="custom-title fadeInUp wow">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation">
              My Resume
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* TIMELINE STARTS */}
      <div className="timeline">
        <ol className="animated-layer fade-in-animation">
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="experience">
                <h4>Project Manager</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2019 - Now</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>Adobe Company</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-up-animation fadeInUp wow">
              <div className="experience">
                <h4>Team Leader</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2015 - 2019</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>Twitter Inc</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="experience">
                <h4>Web Developer</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2010 - 2015</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>Facebook</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-up-animation fadeInUp wow">
              <div className="education">
                <h4>Master Degree</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2003</span>
                </p>
                <p>
                  <i className="fa-solid fa-building-columns" />
                  <span>London University</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="education">
                <h4>Bachelor Degree</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>1999</span>
                </p>
                <p>
                  <i className="fa-solid fa-building-columns" />
                  <span>Berlin High School</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          <li />
        </ol>
      </div>
      {/* TIMELINE ENDS */}
    </div>
  );
};

export default Resume;
