import React from "react";
import ChatClique from "../assets/portfolio/ChatClique.jpg";
import ATM from "../assets/portfolio/ATM.webp";
import simongame from "../assets/portfolio/simongame.jpg";
import passwordgenerator from "../assets/portfolio/passwordgenerator.png";
import restaurent from "../assets/portfolio/restaurent.jpg";
import spotify from "../assets/portfolio/spotify.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ChatClique,
      demo: "https://wonderful-entremet-d5a58f.netlify.app",
      code: "",
      name: "Social Media Application",
    },
    {
      id: 2,
      src: restaurent,
      demo: "https://shimmering-chaja-e95aba.netlify.app/",
      code: "https://github.com/gangadharkr/gangadharkr/tree/atmosphere-restaurant/Restarunt%20Website",
      name: "Restaurant Website",
    },
   
    {
      id: 3,
      src: simongame,
      demo: "https://superlative-kangaroo-97a856.netlify.app",
      code: "https://github.com/gangadharkr/project.github.io",
      name: "Simon Game",
    },
    {
      id: 4,
      src: passwordgenerator,
      demo: "https://lighthearted-lollipop-582aae.netlify.app",
      code: "https://github.com/gangadharkr/passwordGenerator/tree/main",
      name: "Password Generator",
    },
    {
      id: 5,
      src: spotify,
      demo: "https://preeminent-palmier-884ec1.netlify.app",
      code: "https://github.com/gangadharkr/spotify-clone",
      name: "Spotify Clone",
    },
    {
      id: 6,
      src: ATM,
      demo: "",
      code: "https://github.com/gangadharkr/ATM-Management",
      name: "ATM Application",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center mt-3 decoration-solid duration-200 hover:scale-105">
                {name}
              </div>
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                  href={demo}
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                  href={code}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
