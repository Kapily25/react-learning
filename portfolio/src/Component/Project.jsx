import React from "react";
import project from "./Data/projects.json";
function Project() {
  return (
    <>
      <div className="conatainer project" id="projects">
        <h1 style={{ textAlign: "left" }}>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="cards my-3 col-sm-6 col-md-4 col-lg-3 m-2"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    border: "2px solid yellow",
                    borderRadius: "5px",
                    boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
                  }}
                >
                  <div className="img d-flex justify-content-center align-content-center ">
                    <img
                      src={data.imgsrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.source} className="btn btn-warning">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default Project;
