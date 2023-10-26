// import Spline from '@splinetool/react-spline';

import profile from "../../asset/profile.JPG";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// const techs = [
//     {id:1, name: "Reactjs"},
//     {id:2, name: "Node.js/Express"},
//     {id:3, name: "Mongodb"},
//     {id:4, name: "Graphql"},
//     {id:5, name: "Postgres SQL"},
//     {id:6, name: "Flutter"},
//     {id:7, name: "Tensorflow"},
// ];

const skills = [
  {
    id: 0,
    title: ".NET",
    icon: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/dot-net/dot-net-original.svg",
  },
  {
    id: 1,
    title: "Golang",
    icon: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/go/go-original.svg",
  },
  {
    id: 2,
    title: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original.svg",
  },
  {
    id: 3,
    title: "ReactJS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg",
  },

  {
    id: 4,
    title: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg",
  },

  {
    id: 5,
    title: "Django",
    icon: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/django/django-plain-wordmark.svg",
  },
];

function HomePage() {
  return (
    <div
      id="about"
      className="text-stone-300 w-full min-h-screen grow grid grid-cols-12 grid-flow-row justify-start items-center gap-2"
    >
      <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col px-2 md:px-6 text-darker-2 rounded-xl items-start">
        <div className="grid grid-cols-12 grid-flow-row w-full items-center justify-center">
          <div className="col-span-12 w-full flex flex-col items-center">
            <img
              src={profile}
              alt="profile pic"
              className="w-40 md:w-64 rounded-full hover:cursor-pointer object-cover border-4 md:border-8 hover:border-4 duration-200 border-white"
            />
            <p className="text-2xl md:text-3xl text-slate-500 font-roboto font-normal tracking-widest mx-0 pt-4 mb-2">
              👋🏾 Hi, I am{" "}
            </p>
            <div className="group flex flex-col items-center">
              <a
                href="https://www.linkedin.com/in/dawit-teshager-kebede/"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-roboto font-bold group-hover:text-orange-dark duration-300 text-center"
              >
                DAWIT TESHAGER
              </a>
              <div className="flex flex-col md:flex-row justify-center gap-0 md:gap-0 group-hover:gap-2 md:group-hover:gap-16 duration-300 w-full items-center">
                <div className="flex flex-row gap-4 items-center">
                  <p className="text-xl lg:text-2xl text-slate-500 font-roboto font-thin text-center">
                    {" "}
                    SOFTWARE ENGINEER{" "}
                  </p>
                  <div className="hidden md:flex h-0 w-0 bg-orange-dark rotate-45 group-hover:w-2 group-hover:h-2 duration-300"></div>
                </div>

                {/* <p className="text-md md:text-xl text-slate-500 font-roboto font-thin text-center mx-2 group-hover:mx-0"> & </p>

                                <div className='flex flex-row gap-4 items-center'>
                                    <div className='hidden md:flex h-0 w-0 bg-orange-dark rotate-45 group-hover:w-2 group-hover:h-2 duration-300'></div>
                                    <p className="text-xl lg:text-3xl text-slate-500 font-roboto font-thin text-center"> UI/UX DESIGNER</p>
                                </div> */}
              </div>
            </div>
            <br />
            <div className="flex justify-center">
              <div className="font-roboto font-normal text-md md:text-lg text-slate-500 lg:w-2/3 text-justify md:text-center">
                I'm Diligent and experienced software engineer with over 3 years
                of proven expertise in Golang, .NET backend technologies,
                Django, and React. Passionate about solving problems and driving
                innovation in advanced environments. Eager to join a dynamic
                team and deliver high-quality solutions for global clients.
                Committed to continuous learning and collaborative success.
                Additionally, I am dedicated to rapidly learning and mastering
                new programming languages when necessary.
              </div>
            </div>

            <br />
            <div className="flex gap-6">
              <div className="flex group items-center">
                <a
                  href="https://drive.google.com/file/d/1YdgtBKL8E4Z2CPAqwrG8wVhfFskMiMs_/view?usp=sharing"
                  className="px-4 py-2 rounded-full font-roboto text-white text-md bg-darker-2 group-hover:bg-white mr-0 group-hover:mr-2 group-hover:text-orange-dark duration-200"
                >
                  My Resume
                </a>
                <FaChevronLeft className="w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -mr-2 group-hover:mr-0 group-hover:visible duration-200" />
              </div>

              <div className="flex group items-center">
                <FaChevronRight className="w-2 h-2 group-hover:w-4 group-hover:h-4 invisible -ml-2 group-hover:ml-0 group-hover:visible duration-200" />
                <a
                  href="https://linktr.ee/dawitteshager"
                  className="px-4 py-2 rounded-full font-roboto text-white text-md bg-darker-2 group-hover:bg-white ml-0 group-hover:ml-2 group-hover:text-orange-dark duration-200"
                >
                  My Socials
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center mt-8">
              <p className="text-md lg:text-lg text-slate-500 font-roboto text-center">
                {" "}
                SKILLS{" "}
              </p>
              <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
                {skills.map((skill) => {
                  return (
                    <div
                      key={skill.id}
                      className="px-5 py-3 rounded-full bg-white flex gap-3 items-center hover:scale-110 duration-200"
                    >
                      <img
                        src={skill.icon}
                        title={skill.title}
                        alt={skill.title}
                        width="20"
                        height="20"
                      />
                      <p className="text-sm text-slate-500 font-roboto text-center">
                        {" "}
                        {skill.title}{" "}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
