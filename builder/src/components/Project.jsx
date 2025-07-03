import React from "react";
import "./Project.css";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Skyline Residency",
      image: "https://is1-2.housingcdn.com/4f2250e8/80c17beee83e9b8106dff9baa6b6d8ef/v5/fs/skyline_residency-kharghar-navi+mumbai-skyline_builders_%26_developers.jpg",
      description: "Luxury apartments with stunning city views."
    },
    {
      id: 2,
      name: "Green Villas",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282471750.jpg?k=f80dadb4549dd17953bcae6fe4f3b452017b85ed4e611530d97e822569ab76de&o=&hp=1",
      description: "Eco-friendly villas nestled in greenery."
    },
    {
      id: 3,
      name: "Urban Heights",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_LISOgpvV8U6rcBpUrBVQYCMtM0czFp39A&s",
      description: "Modern commercial and residential spaces."
    },
    {
      id: 4,
      name: "Sunset Enclave",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7K8a9vYsNEgb6YyAC2kluFvvj6OC5Z7VXA&s",
      description: "Premium plots and custom villa options."
    },
    {
      id: 5,
      name: "Metro Square",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdF7mxJ4hFTbkaaZ5ZTvp8i0vYrakQmIxyE90_9MuFAEpM33GypimXzwpbu5AV_qaWFo&usqp=CAU",
      description: "State-of-the-art business and retail complex."
    }
  ];

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <h1>Our Projects</h1>
        <p>Explore our completed and ongoing developments.</p>
      </section>

      <section className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Project;
