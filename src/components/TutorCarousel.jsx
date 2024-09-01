import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/slider.css"; // Custom CSS file

const TutorCarousel = () => {
  const tutors = [
    {
      name: "Vinod Kumar",
      qualification: "PHD",
      subject: "IX – XII HISTORY",
      area: "DELHI",
      experience: "15 YEAR",
      number: "86954735XX",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      name: "Reena Mehta",
      qualification: "B.TECH",
      subject: "V – XII ENGLISH",
      area: "CHANDIGARH",
      experience: "8 YEAR",
      number: "75974735XX",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      name: "Aman Joshi",
      qualification: "M.C.A",
      subject: "X – XII MATHS",
      area: "DELHI",
      experience: "9 YEAR",
      number: "92365573XX",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      name: "Pooja Aggarwal",
      qualification: "PIANO GRADE 8",
      subject: "PIANO",
      area: "DELHI",
      experience: "10 YEAR",
      number: "88974735XX",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
  ];

  const settings = {
    dots: true, // Enables dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables auto sliding
    autoplaySpeed: 2000, // Sets auto sliding delay to 2000ms (2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-4">
      <div className="text-center mb-5">
        <h3>Welcome to a2z Tuition</h3>
        <p>
          a2z Tuition is a boutique tutoring centre in operation since 2023,
          offering a safe, nurturing, and engaging environment where your child
          will be provided with high quality tuition and assistance they need to
          foster in their academic learning. Our vision and aim is to maximise
          the learning experience for students of various academic abilities by
          creating an enriching learning experience through interactive classes
          and discussions. We strive to prepare our students to excel at school
          by aligning our tuition programs with the Australian Curriculum and
          New South Wales syllabus so students will feel confident applying
          their understanding, skills, and strategies that are taught at our
          centre back into their school classroom.
        </p>
      </div>

      <div className="text-center mb-5">
        <h1>Learn With Teaching Experts</h1>
        <p>
          Whether you are a tutor looking for students or a learner looking for
          a tutor, Excellent Tuitions is the ultimate destination for you.
        </p>
      </div>

      <div className="slider-container container my-4 pb-3">
        <Slider {...settings}>
          {tutors.map((tutor, index) => (
            <div
              className="card text-center p-4 bg-light text-dark rounded shadow-sm mx-2"
              key={index}>
              <img
                src={tutor.image}
                className="rounded-circle mx-auto mt-3"
                alt={tutor.name}
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-3">{tutor.name}</h5>
                <p className="card-text mt-2">
                  <strong>QUALIFICATION</strong>: {tutor.qualification}
                  <br />
                  <strong>SUBJECT</strong>: {tutor.subject}
                  <br />
                  <strong>AREA</strong>: {tutor.area}
                  <br />
                  <strong>EXPERIENCE</strong>: {tutor.experience}
                  <br />
                  <strong>NUMBER</strong>: {tutor.number}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TutorCarousel;
