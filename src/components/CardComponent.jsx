import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  const cards = [
    {
      title: "Primary School Year 3 – Year 6",
      description:
        "Our programs in Mathematics and English focus on building solid foundation of mathematical concepts, comprehension skills, writing style and reading. Our Opportunity Class (OC) and Selective Trials Classes are specifically designed for students' wishing to seek admission to OC or Selective schools.",
      image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
    {
      title: "Secondary School Year 7 – Year 12",
      description:
        "Our high school program aims to compliment school learning focusing on student's understanding of their subjects, complex problem solving and examination skills.",
      image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
    {
      title: "Enrolment",
      description:
        "Book a free assessment to determine the student's ability for enrolment in appropriate level.",
      image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text flex-grow-1">{card.description}</p>
                <a href="#" className="btn btn-danger mt-3 align-self-start">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
