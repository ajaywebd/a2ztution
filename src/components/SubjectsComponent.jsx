import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SubjectsComponent = () => {
  const subjects = [
    "Accounts",
    "Biology",
    "Hindi",
    "Chemistry",
    "Geography",
    "Mathematics",
    "Commerce",
    "Economics",
    "English",
    "History",
    "Science",
    "Social science",
    "Music",
    "Others",
  ];

  const graduation = ["coming soon..."];
  const competition = ["coming soon..."];

  return (
    <div
      className="container text-center py-5"
      style={{ backgroundColor: "#e0f7fa" }}>
      <h2 className="mb-4" style={{ fontFamily: "Cursive" }}>
        Subjects We Provide
      </h2>

      <div className="d-flex flex-wrap justify-content-center mb-4">
        {subjects.map((subject, index) => (
          <span key={index} className="badge bg-light text-dark m-2 p-2 fs-6">
            {subject}
          </span>
        ))}
      </div>

      <hr />

      <div className="row mt-4">
        <div className="col-md-6">
          <h3 style={{ fontFamily: "Cursive" }}>Graduation</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {graduation.map((course, index) => (
              <span
                key={index}
                className="badge bg-light text-dark m-2 p-2 fs-6">
                {course}
              </span>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h3 style={{ fontFamily: "Cursive" }}>Competition</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {competition.map((course, index) => (
              <span
                key={index}
                className="badge bg-light text-dark m-2 p-2 fs-6">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsComponent;
