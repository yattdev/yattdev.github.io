import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import OtherProjectSection from "./OtherProjectSection";
import ExperienceSection from "./ExperienceSection";
import GithubSection from "./GithubSection";

const PrimarySection = () => {
  return (
    <>
      <div className="primary col-lg-8 col-12">
        {/*about section*/}
        <AboutSection />
        {/*projects sections */}
        <ProjectSection />
        {/* experience sections */}
        <ExperienceSection />
        {/*other projects sections*/}
        <OtherProjectSection />
        {/* github sections */}
        <GithubSection />
      </div>
    </>
  );
};

export default PrimarySection;
