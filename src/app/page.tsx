import ProjectGrid from "./components/ProjectGrid/ProjectGrid";
import Navbar from "./components/Navbar/Narbar";
import ProfessionalExperienceList from "./components/ProfessionalExperienceList/ProfessionalExperienceList";

export const metadata = {
  title: "Samuel Imlig's Portfolio",
  description: "Samuel Imlig's personal website that depicts his personal and professional accomplishments in the Software Engineering industry"
};

export default function Home() {
  return (
    <>
      <div className={"text-gray-200"}>
        <Navbar></Navbar>
        <div className="grid items-center justify-items-center min-h-[calc(100vh-40px)] p-8 pb-20 bg-slate-900">
          <div>
            <div
              className={
                "text-[2.2rem] sm:text-[2.5rem] md:text-5xl font-bold md:mb-4 text-center"
              }
            >
              Samuel K Imlig
            </div>

            <div className={"text-1xl font-bold mb-[.12rem] sm:mb-1 text-center"}>
              Software Engineer
            </div>
            <div className={"text-1xl font-bold text-center"}>
              Fullstack Developer
            </div>
          </div>
        </div>
        <div className="grid-cols-1 items-center justify-items-center min-h-[calc(100vh-40px)] p-[.25rem] sm:p-8 pb-20 bg-[#141e38] gap-y-2">
          <div className={"font-bold text-4xl sm:text-5xl mb-12 sm:mb-16"}>Projects</div>
          <ProjectGrid></ProjectGrid>
        </div>
        <div className="grid-cols-1 items-center justify-items-center min-h-[calc(100vh-40px)] p-[.25rem] sm:p-8 pb-20 bg-[#172646] gap-0">
          <div className={"font-bold text-4xl sm:text-5xl mb-12 sm:mb-16"}>Experience</div>
          <ProfessionalExperienceList></ProfessionalExperienceList>
        </div>
      </div>
    </>
  );
}