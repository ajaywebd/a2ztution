import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="row align-items-center justify-content-center">
        {/* Text Section */}
        <div className="col-lg-6 col-md-10 text-center text-lg-start p-4">
          <h1 className="display-4 fw-bold text-primary">
            Excellent Tuitions:
          </h1>
          <h2 className="display-6 fw-bold text-primary">
            Destination For Tutors And Learners
          </h2>
          <p className="lead">
            Excellent Tuitions is an online learning and teaching platform that
            offers a wide variety of courses for all ages and levels. We provide
            the tools and resources that both tutors and learners need to
            succeed. We have a database of courses, ranging from languages to
            mathematics to music to painting, and more.
          </p>
          <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start">
            <a href="#" className="btn btn-primary me-0 me-lg-3 mb-3 mb-lg-0">
              Are you a Tutor?
            </a>
            <a href="#" className="btn btn-success">
              Looking for a Tutor?
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-10 p-4">
          <div className="position-relative text-center">
            <img
              src="https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="img-fluid rounded-circle mb-3 heiwi1"
              alt="Main Image"
            />
            <div className="position-absolute top-0 start-0 translate-middle">
              <img
                src="https://plus.unsplash.com/premium_photo-1681483491338-8300fdf55828?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-circle heiwi2"
                alt="Small Image 1"
              />
            </div>
            <div className="position-absolute bottom-0 start-0 translate-middle">
              <img
                src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-circle heiwi2"
                alt="Small Image 2"
              />
            </div>
            <div className="position-absolute bottom-0 end-0 translate-middle">
              <img
                src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-circle heiwi2"
                alt="Small Image 3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/1234567890"
        className="position-fixed bottom-0 end-0 m-4"
        style={{ zIndex: 1000 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          style={{ width: "50px" }}
        />
      </a>
    </div>
  );
};

export default HeroSection;
