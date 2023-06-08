import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Frontend Developer",
    duration: "1 year",
    details:
      "Frontend Developer in TeteClothes company working on a e-commerce developing with React JS and Firebase",
  },
  {
    year: 2022,
    title: "Frontend Developer",
    duration: "1 year",
    details:
      "Frontend Developer in BioSoft OnLine S.R.L company working on a system for Labs with Blazor and C#",
  },
  {
    year: 2021,
    title: "Developer",
    duration: "1 year",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur asperiores repudiandae quos culpa voluptatem? Accusantium voluptate ipsam rem eligendi ab non nobis ut vero? Consequuntur doloribus aliquid praesentium placeat distinctio.",
  },
  //   {
  //     year: 2020,
  //     title: "Frontend Developer",
  //     duration: "3 years",
  //     details: "lorem",
  //   },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-5">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
