import React from "react";
import LastProjectImage from "../../assets/images/projects/Last_project.png";
import Project1 from "../../assets/images/projects/project1.png";
import Project2 from "../../assets/images/projects/project2.png";
import Project3 from "../../assets/images/projects/project3.png";
import Project4 from "../../assets/images/projects/project4.png";
import Project5 from "../../assets/images/projects/project5.png";
import Project6 from "../../assets/images/projects/project6.png";
import Project7 from "../../assets/images/projects/project7.png";

const ProjectSection = () => {
  return (
    <>
      <section className="latest section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading">Latest Projects</h2>
          <div className="content">
            <div className="item featured text-center">
              <div className="featured-image has-ribbon">
                <a href="#" target="blank">
                  <img
                    className="img-fluid project-image rounded shadow-sm"
                    src={LastProjectImage}
                    alt="Free email checker website"
                  />
                </a>
                <div className="ribbon">
                  <div className="text">New</div>
                </div>
              </div>

              <h3 className="title mb-3">
                <a href="#" target="blank">
                  Ahlan Morocco
                </a>
              </h3>

              <div className="desc text-start">
                Ahlan Morocco is a modern web platform that connects
                tourists and vacationers visiting Morocco with a wide range
                of services, including accommodations, cultural activities,
                adventures in nature, well-being and spa experiences,
                gastronomy, and Moroccan cooking classes.
                More than just a hotel booking site, Ahlan Morocco caters
                to travelers seeking authentic and memorable experiences.
                Our community offers diverse options such as:
                <ul>
                    <li>Traditional Riads</li>
                    <li>Luxury Hotels</li>
                    <li>Guided Tours</li>
                    <li>4x4 Desert Excursions</li>
                    <li>Desert Camping</li>
                    <li>Atlas Mountain Hiking</li>
                    <li>Yoga Sessions</li>
                    <li>Gourmet Dining Experiences, and more.</li>
                </ul>
                Discover dream destinations and unique activities across Morocco. With just a few clicks, you can securely book your next accommodation, adventure, or cooking class through Ahlan Morocco.
                <br />
                <br />
                <strong>Main Stack</strong> Python, Django, Docker/Compose, and more.
              </div>
              <a
                className="btn btn-cta-secondary"
                href="#"
                target="blank"
              >
                <i className="fas fa-thumbs-up"></i> Back my project
              </a>
            </div>
            <hr className="divider" />
            <h2 className="heading">Work Experience</h2>
            <div className="item row">
              <a
                className="col-md-4 col-12"
                href="http://blog.yatt.tech"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={Project7}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a href="http://blog.yatt.tech" target="blank">
                    Blog - For Developer and Entrepreneurs:
                  </a>
                </h3>
                <p className="mb-2">
                  A web application blog to relate technologies informations and
                  some useful tools about development and entrepreneurship.
                  <br />
                  <strong>Main stack used: &nbsp;</strong>
                  <em>
                    Reactjs, Html, CSS3, JAVASCRIPT/TYPESCRIPT, Github Actions,
                    CI/CD and more.
                  </em>
                  <br />
                  <strong>Status: &nbsp;</strong>
                  <em>In progress</em>
                </p>
                <p>
                  <a
                    className="more-link"
                    href="http://blog.yatt.tech"
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
                href="http://blog.remote.yatt.tech"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={Project6}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a href="http://blog.remote.yatt.tech" target="blank">
                    Backend Restfull API for personal blog applications
                  </a>
                </h3>
                <p className="mb-2">
                  A production ready django application, the goal is to build a
                  powerful open source api, easy to use and maintainable, that
                  can work smoothly with any frontend stack like react, Vuejs
                  etc.
                  <br />
                  <strong>Main stack used: &nbsp;</strong>
                  <em>
                    Python, Django, DRF, CI/CD, AWS, HTML, CSS3, JAVASCRIPT,
                    GitHub, Github Action
                  </em>
                  <br />
                  <strong>Status: &nbsp;</strong>
                  <em>Done</em>
                </p>
                <p>
                  <a
                    className="more-link"
                    href="http://blog.remote.yatt.tech"
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
                href="http://pochette.yatt.tech"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={Project1}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                    <a href="https://github.com/yattdev">
                      Machine Learning Developer &amp; AI Developer -
                    </a>
                </h3>
                <span className="place">
                  <a href="https://github.com/yattdev">PFE Project</a>
                </span>
                <br />
                <span className="year">2020 - 2021</span> / Casablanca, Maroc
                <br />
                <br />
                <p className="mb-2">
                  ShonenDB is an application, open source and community for the
                  management of the best shonens. The goal is to network with
                  thousands of shonen fans, who can post, suggest their
                  preferences and also the best few who make you scream.
                  <br />
                  <strong>Main stack used: &nbsp;</strong>
                  <em>Python, Django, DRF, Typescript and Vuejs</em>
                  <br />
                  <strong>Status: &nbsp;</strong>
                  <em>In progress</em>
                </p>
                <p>
                  <a
                    className="more-link"
                    href="http://pochette.yatt.tech"
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
                href="https://album-pochette.herokuapp.com/api/v1/docs"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={Project2}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a
                    href="https://album-pochette.herokuapp.com/api/v1/docs"
                    target="blank"
                  >
                    RESTFULL API - TO HANDLE A MUSIC ALBUMS POCHETTE
                  </a>
                </h3>
                <p className="mb-2">
                  Welcome to version 1 of The (POCHETTE) API. Below you will
                  find a a link, that will get you a current list of the
                  available methods on our music album pochette and their image
                  and description.
                  <br />
                  <strong>Main stack used: &nbsp;</strong>
                  <em>Python, Django, DRF, Swagger</em>
                  <br />
                  <strong>Status: &nbsp;</strong>
                  <em>Done</em>
                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://album-pochette.herokuapp.com/api/v1/docs"
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
                href="https://buffet.yatt.tech/"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={Project3}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a href="https://buffet.yatt.tech/" target="blank">
                    CocktailDB: An Application for cocktail fans
                  </a>
                </h3>
                <p className="mb-2">
                  A list of lot of Cocktails image, you will like to know before
                  next friendly meet up. A practical project to improve and keep
                  my reactjs knowledge active, and also to do something that can
                  be of use to me and also to others.
                  <br />
                  <strong>Main stack used: &nbsp;</strong>
                  <em>Reactjs, JavaScript and some useful API</em>
                  <br />
                  <strong>Status: &nbsp;</strong>
                  <em>Done</em>
                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://buffet.yatt.tech/"
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
                href="https://color.yatt.tech"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={Project4}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a href="https://color.yatt.tech" target="blank">
                    Color Generator: A color tool for developers and designer
                  </a>
                </h3>
                <p className="mb-2">
                  It's an online image color picker, which you can visit with
                  the link below. To select a color and get the HTML color code
                  for that pixel just by clicking on it. The resulting value is
                  HEX color code. You can use the second input to generate the
                  desired number of color variants. (for example: Type 10) and
                  you get 10 variations towards the white color and 10 towards
                  the black color on either side of the original color.
                  <br />
                  <strong>Main stack used: &nbsp;</strong>
                  <em>
                    Reactjs, JavaScript and some awesome open source color-gen
                  </em>
                  <br />
                  <strong>Status: &nbsp;</strong>
                  <em>Done</em>
                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://color.yatt.tech"
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
                href="https://github.com/yattdev/Jady"
                target="blank"
              >
                <img
                  className="img-fluid project-image rounded shadow-sm"
                  src={Project5}
                  alt="project name"
                />
              </a>
              <div className="desc col-md-8 col-12">
                <h3 className="title">
                  <a href="https://github.com/yattdev/Jady" target="blank">
                    Jady: An intelligent personal assistant
                  </a>
                </h3>
                <p className="mb-2">
                  The goal is to develop a gifted virtual business. Adaptive and
                  scalable that assists and guides passionate newbies in their
                  unique quest for creation, innovation and self-improvement by
                  suggesting action plans and steps to get where they are, where
                  they want to be.
                  <br />
                  <strong>Main stack used: &nbsp;</strong>
                  <em>
                    Python, Django, Rasa Open Source, NLP, ML, Engine Library
                    Whoosh.
                  </em>
                  <br />
                  <strong>Status: &nbsp;</strong>
                  <em>In progress</em>
                </p>
                <p>
                  <a
                    className="more-link"
                    href="https://github.com/yattdev/Jady"
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

export default ProjectSection;
