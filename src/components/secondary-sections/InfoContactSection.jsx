import React from "react";

const InfoContactSection = () => {
  return (
    <main>
      <aside className="info aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading sr-only">Information:</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span className="sr-only">Location:</span>Bamako, Mali
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span className="sr-only">Email:</span>
                <a href="mailto:yattdeveloper@gmail.com">yattdeveloper@gmail.com</a>
              </li>
              <li>
                <i className="fab fa-linkedin-in"></i>
                <span className="sr-only">Linkedin:</span>
                <a href="https://linkedin.com/in/yattara">
                  Linkedin
                </a>
              </li>
              <li>
                <i className="fas fa-link"></i>
                <span className="sr-only">Freelancer:</span>
                <a href="https://www.freelancer.ma/profil/14451-consultant-developpeur-full-stack-web-mobile-et-ia">
                 Freelancer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default InfoContactSection;
