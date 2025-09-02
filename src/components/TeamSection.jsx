// src/components/TeamSection.jsx
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
import person4 from "../assets/images/person_4.jpg";

export default function TeamSection() {
  const teamMembers = [
    { img: person1, name: "Lawson Arnold" },
    { img: person2, name: "Jeremy Walker" },
    { img: person3, name: "Patrik White" },
    { img: person4, name: "Kathryn Ryan" },
  ];

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, idx) => (
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={idx}>
              <img
                src={member.img}
                className="img-fluid mb-5"
                alt={member.name}
              />
              <h3>
                <a href="#">
                  <span>{member.name.split(" ")[0]}</span>{" "}
                  {member.name.split(" ")[1]}
                </a>
              </h3>
              <span className="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className="mb-0">
                <a href="#" className="more dark">
                  Learn More <span className="icon-arrow_forward"></span>
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
