import React from "react";
import Project1 from "../../assets/images/projects/project1.png";
import sfl_logo from "../../assets/images/experiences/sfl-logo.png";
import oyster_logo from "../../assets/images/experiences/oyster-technology-logo.png";
import accurate_logo from "../../assets/images/experiences/accurate-logo.png";
import smartech_expert_logo from "../../assets/images/experiences/smartech-expert-logo.jpg";

const Experience = () => {
  return (
    <>
      <section className="experience section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Professional Experience</h2>
          <div className="content">
            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://savoirfairelinux.com"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={sfl_logo}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h2 className="name">
                    <a href="https://savoirfairelinux.com">
                      Savoir-Faire Linux<span className="title">, Montréal</span>
                    </a>
                </h2>
                <span className="place">
                  <a href="https://github.com/yattdev">Engineer, Open-source Software developer Fullstack</a>
                </span>
                <br />
                <span className="year">2022 - 2024</span> / <span className="title">REMOTE</span>
                <br />
                <br />
                <p className="mb-2">
                  At Savoir-faire Linux, I work as a Full-Stack Consultant
                  specializing in open-source software. My role involves
                  designing, developing, and maintaining web and mobile
                  applications for a diverse range of clients. This includes
                  conducting in-depth client needs analysis and proposing
                  tailored technical solutions.
                  <br />
                  <br />
                  <strong>Web stack: &nbsp;</strong>
                  Python/Django DRF, React JS, Docker/Compose, Php/Laravel Livewire, Grav CMS, Ghost CMS...
                  <br />
                  <strong>Mobike stack used: &nbsp;</strong>
                  Javascript/Typescript React Native(Expo), Google Firebase, ...
                  <br />
                  <strong>DevOps/CI-CD: &nbsp;</strong>
                  Docker/Compose, Kubernetes, Ansible, AWS, ...
                  <br />
                  <strong>Gestion: &nbsp;</strong>
                  Git, Gitlab/Github, Daily scrum, ...
                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://savoirfairelinux.com"
                    target="blank"
                  >
                    <i className="fas fa-external-link-alt"></i>Find out more
                  </a>
                </p>
              </div>
            </div>
            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://www.charika.ma/societe-oyster-technology-472313"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={oyster_logo}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h2 className="name">
                    <a href="https://www.charika.ma/societe-oyster-technology-472313">
                      OYSTER Technology<span className="title">, Morocco</span>
                    </a>
                </h2>
                <span className="place">
                  <a href="https://github.com/yattdev">Freelance Developer Full-stack Web/Mobile</a>
                </span>
                <br />
                <span className="year">2021 - 2022</span> / <span className="title">REMOTE</span>
                <br />
                <br />
                <p className="mb-2">
                  As a freelance developer at OYSTER Technology, I contributed
                  to the development of the <a href="www.paris2024.org">Paris24 </a>
                  web application. My role involved participating in the 
                  design and implementation of key features, optimizing
                  performance, and collaborating with the team to ensure a
                  smooth and engaging user experience. I was also involved in
                  rigorous testing to ensure the application met the high
                  standards of quality and security required for a project of
                  this scale.
                  <br />
                  <br />
                  <strong>Web stack: &nbsp;</strong>
                  Java/SprintBoot, ReactJs/NextJs, Elasticsearch, ...
                  <br />
                  <strong>DevOps/CI-CD: &nbsp;</strong>
                  Docker/Compose, Kubernetes, ...
                  <br />
                  <strong>Gestion: &nbsp;</strong>
                  Git, Github, Scrum, Trello ...
                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://www.charika.ma/societe-oyster-technology-472313"
                    target="blank"
                  >
                    <i className="fas fa-external-link-alt"></i>Find out more
                  </a>
                </p>
              </div>
            </div>
            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://smartech.ma/"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={smartech_expert_logo}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h2 className="name">
                    Intern: <a href="https://smartech.ma/">
                       Smartech-Expert<span className="title">, Morocco</span>
                    </a>
                </h2>
                <span className="place">
                  <a href="https://github.com/yattdev">Full-stack Web Developer</a>
                </span>
                <br />
                <span className="year">2021 - 2022</span> / <span className="title">REMOTE</span>
                <br />
                <br />
                <p className="mb-2">
                  At Smartech-Expert, I actively contributed to the design and
                  development of version 2.0 of a time tracking and reporting
                  application tailored for businesses. This project involved 
                  enhancing existing features, redesigning the software architecture
                  for improved performance, and modernizing the user interface
                  to make the application more intuitive and user-friendly.
                  I also played a key role in integrating new functionalities
                  to meet the specific needs of businesses while ensuring data
                  reliability and security.
                  <br />
                  <br />
                  <strong>Web stack: &nbsp;</strong>
                  Php/Laravel, Html, Css, JavaScript ...
                  <br />
                  <strong>Gestion: &nbsp;</strong>
                  Git, Github, Scrum, Docker/Compose, ...
                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://smartech.ma/"
                    target="blank"
                  >
                    <i className="fas fa-external-link-alt"></i>Find out more
                  </a>
                </p>
              </div>
            </div>
            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="https://www.koolskools.com/"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={accurate_logo}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h2 className="name">
                    Intern: <a href="https://www.koolskools.com/">
                      Accurate<span className="title">, Morocco</span>
                    </a>
                </h2>
                <span className="place">
                  <a href="https://github.com/yattdev">Developer and Tester Frontend and Server</a>
                </span>
                <br />
                <span className="year">2021 - 2022</span> / <span className="title">REMOTE</span>
                <br />
                <br />
                <p className="mb-2">
                  As an intern at Accurate, an innovative EdTech startup, I
                  contributed to the development and enhancement of the application
                  www.kookskools.com. My responsibilities included identifying and fixing
                  anomalies to ensure a seamless and reliable user experience. I also
                  designed and implemented an efficient reporting system to enable detailed
                  performance monitoring of the application. Additionally, I developed a
                  strategic plan for integrating automated tests using Jenkins, aimed at
                  improving code quality and minimizing production risks. This experience
                  allowed me to strengthen my problem-solving skills, process automation
                  expertise, and collaboration within a dynamic and innovative team.
                  <br />
                  <br />
                  <strong>Web stack or Testing tool: &nbsp;</strong>
                  Groovy/Java, Python/Django, Selenium, Katalon, Postman, ...
                  <br />
                  <strong>DevOps/CI-CD: &nbsp;</strong>
                  Docker/Compose, Jenkins, ...
                  <br />
                  <strong>Gestion: &nbsp;</strong>
                  Weekly Scrum and Report
                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://www.charika.ma/societe-accurate-354867"
                    target="blank"
                  >
                    <i className="fas fa-external-link-alt"></i>Find out more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
