import ExperienceList from "./ExperienceList";
import TimelineItem from "./TimelineItem";

const WorkAndStudies = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-10 mt-20">
      <h3 className="text-white text-2xl w-[83%] text-start">
        Experiência e Formação
      </h3>
      <section className="flex flex-wrap md:justify-between md:items-start w-[83%]">
        <ExperienceList />
        <TimelineItem />
      </section>
    </section>
  );
};
export default WorkAndStudies;
