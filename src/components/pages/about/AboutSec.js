const AboutSec = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation animated my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/about.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2 className="d-flex gap-3">
            <span>
              <span className="animated-layer  fade-in-up-animation animated fadeInUp wow">
                Borhan
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation animated fadeInUp wow">
                Uddin
              </span>
            </span>
          </h2>
          {/* <div className="content">
            <h3>CEO</h3>
            <h4>SR Dream Lab</h4>
          </div> */}
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation animated fadeInUp wow">
                    <span>Nationality :</span>
                    <span>bangladeshi</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation animated fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation animated fadeInUp wow">
                    <span>Languges :</span>
                    <span>Bengali, English</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation animated fadeInUp wow">
                    <span>Address :</span>
                    <span>Bheramara, Kushtia, Khulna</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation animated fadeInUp wow">
                    <span>Phone :</span>
                    <span>+880 1620 55 78 40</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation animated fadeInUp wow">
                    <span>Email :</span>
                    <span>borhaninfos@gmail.com</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile me-5 pe-5">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation animated fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation animated fadeInLeft wow">
              <span>
                <i className="devicon-wordpress-plain" />
              </span>
              <h4>WordPress</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation animated fadeInRight wow">
              <span>
                <i className="devicon-jquery-plain" />
              </span>
              <h4>jQuery</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation animated fadeInLeft wow">
              <span>
                <i className="devicon-angularjs-plain" />
              </span>
              <h4>Angular JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation animated fadeInRight wow">
              <span>
                <i className="devicon-drupal-plain" />
              </span>
              <h4>Drupal</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation animated fadeInLeft wow">
              <span>
                <i className="devicon-react-plain" />
              </span>
              <h4>React JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation animated fadeInRight wow">
              <span>
                <i className="devicon-docker-plain" />
              </span>
              <h4>Docker</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation animated fadeInLeft wow">
              <span>
                <i className="devicon-nodejs-plain" />
              </span>
              <h4>Node JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation animated fadeInRight wow">
              <span>
                <i className="devicon-sass-plain" />
              </span>
              <h4>Sass</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}

      {/* RESUME ENDS */}
      {/* <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      /> */}
    </section>
  );
};
export default AboutSec;
