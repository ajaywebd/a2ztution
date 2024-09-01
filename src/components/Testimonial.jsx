import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const testimonials = [
    {
      text: "I’m so happy I signed up for online tuition classes with Excellent tuitions! The class 10th course is really well put together and easy to understand. The explanations are clear and concise, and I’m making great progress in my studies.",
      author: "Vikash Maurya",
      location: "Lakhimpur",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      website: "#",
    },
    {
      text: "I was struggling to keep up with my studies, but this online tuition platform has really helped me. The concepts are explained well, and I can easily follow along. I’m really grateful for the course learnt from your tutors!",
      author: "Ajay Maurya",
      location: "Delhi",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      website: "#",
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="testimonials py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontFamily: "Cursive", color: "#333" }}>Testimonials</h2>
          <h3
            style={{
              fontFamily: "Cursive",
              fontWeight: "bold",
              color: "#555",
            }}>
            Experiences Of Students With Us
          </h3>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="card bg-dark text-white h-100 p-4 mx-3">
                <div className="card-body">
                  <p className="card-text">{testimonial.text}</p>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-circle me-3"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div>
                      <h5 className="mb-0">{testimonial.author}</h5>
                      <p className="mb-0">{testimonial.location}</p>
                      <a
                        href={testimonial.website}
                        className="text-white text-decoration-none">
                        website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
