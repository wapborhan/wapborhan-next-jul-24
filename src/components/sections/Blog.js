import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="why">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Why Choose Me
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="facts fact">
        <div className="flex-column-mobile">
          {/* SINGE FACT ITEM STARTS */}
          <div
            className="animated-layer fade-in-right-animation fadeInLeft wow"
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>1</h3>
                <p>
                  Always <span>On Time</span>
                </p>
              </div>
            </div>
          </div>
          {/* SINGE FACT ITEM ENDS */}
          {/* SINGE FACT ITEM STARTS */}
          <div
            className="animated-layer fade-in-right-animation fadeInRight wow"
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>2</h3>
                <p>
                  Professional <span>Work</span>
                </p>
              </div>
            </div>
          </div>
          {/* SINGE FACT ITEM ENDS */}
          {/* SINGE FACT ITEM STARTS */}
          <div
            className="animated-layer fade-in-right-animation fadeInLeft wow"
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>3</h3>
                <p>
                  100% <span>Satisfaction</span>
                </p>
              </div>
            </div>
          </div>
          {/* SINGE FACT ITEM ENDS */}
          {/* SINGE FACT ITEM STARTS */}
          <div
            className="animated-layer fade-in-right-animation fadeInRight wow"
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>4</h3>
                <p>
                  After Selling <span>Support</span>
                </p>
              </div>
            </div>
          </div>
          {/* SINGE FACT ITEM ENDS */}
          {/* SINGE FACT ITEM STARTS */}
          <div
            className="animated-layer fade-in-right-animation fadeInLeft wow"
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>5</h3>
                <p>
                  High <span>Security</span>
                </p>
              </div>
            </div>
          </div>
          {/* SINGE FACT ITEM ENDS */}
        </div>
      </div>
      {/* LATEST POSTS ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
        style={{ zIndex: 1 }}
      />
    </section>
  );
};
export default Blog;
