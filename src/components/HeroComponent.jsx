import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroComponent = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="https://via.placeholder.com/450x450" // Replace with actual image URL
            alt="Testimonial"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 style={{ fontFamily: "Cursive", color: "#007bff" }}>
            Excellent Tuitions
          </h2>
          <h3 style={{ fontFamily: "Cursive", fontWeight: "bold" }}>
            Working For Your Learning And Success
          </h3>
          <p>
            In recent years, the education sector has seen a dramatic shift with
            the rise of online learning. This has given rise to a new breed of
            students – those who are not afraid to seek out knowledge from
            anywhere in the world, and who are not limited by geographical
            boundaries.
          </p>
          <p>
            Excellent Tuitions is a new online learning platform that is shaking
            up the education sector. We provide a space for tutors and students
            to connect and learn from each other, without the constraints of
            time and place.
          </p>
          <p>
            Whether you are looking for someone to teach you a new skill, or you
            are a tutor who is looking for new students, Excellent Tuitions is
            the ultimate online learning and teaching platform.
          </p>
          <p>
            In addition, we offer a number of features that make the learning
            and teaching experience more enjoyable and effective.
          </p>
          <button className="btn btn-primary mt-3">Read More...</button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
