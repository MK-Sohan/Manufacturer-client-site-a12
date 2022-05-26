import React from "react";
import { Link } from "react-router-dom";
import portfolio from "../../image/photo 6066.jpg";
const Myportfolio = () => {
  return (
    <div className="">
      <div class="hero min-h-screen bg-base-200  ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={portfolio} class="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-16">
            <h1 class="text-5xl font-bold">Md.Mahabubul Kobir </h1>
            <p class="py-6 text-2xl">
              <span className="font-bold">EMAIL :</span> mksohan786@gmail.com
            </p>
            <p class="py-6 text-2xl">
              <span className="font-bold">EDUCATIONAL BACKGROUND :</span> I
              Passed H.S.C in 2018. Now I am Studying Computer Science and
              Engeneering (CSE) in Dhaka International University.
            </p>
            <p class="py-6 text-2xl">
              <span className="font-bold">Skills :</span> I was compleated a
              graphic designing course before this webdevloaping course.After
              compleating this web devlopment main course I am having a very
              good knowledge about html, css, java script, React frame work,
              bootstrap, tailwind, and tailwind different kind of library etc. I
              lern back end also.Now I also have a good back end khowledge. Now
              I can make a full stack website.
            </p>
            <p class="py-6 text-2xl">
              <span className="font-bold">
                My 3 personal project live link : <br />
                <a
                  className="text-blue-400"
                  href="https://grocery-project-8bb06.firebaseapp.com/"
                >
                  Groco
                </a>{" "}
                <br />
                <a
                  className="text-blue-400 mt-14"
                  href="https://assignment-11-ee9c8.web.app/"
                >
                  Fruittastic
                </a>{" "}
                <br />
                <a
                  className="text-blue-400"
                  href="https://assignment-10-b5a0b.web.app/"
                >
                  HELTH MENTOR
                </a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myportfolio;
