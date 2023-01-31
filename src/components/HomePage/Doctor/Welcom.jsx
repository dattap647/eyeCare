import React from "react";
import "./style.css";

function Welcome() {
  return (
    <div>
      <section className="cta">
        <div className="inner">
          <div className="left">
            <h3 className="wow fadeInUp">Lorem a luctus urna mattis</h3>
            <p className="wow fadeInUp" style={{ color: "#7A7A7E" }}>
              Aenean luctus lobortis tellus, vel ornare enim molestie
              condimentum. Curabitur lacinia nisi vitae velit volutpat
              venenatis. Sed a dignissim lacus. Quisque fermentum est non orci
              commodo, a luctus urna mattis. Ut placerat, diam a tempus
              vehicula.
            </p>
          </div>
          <div className="right">
            <img
              src="http://res.cloudinary.com/dgpmuegqe/image/upload/v1521165802/female_doc_zdj4ay.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
