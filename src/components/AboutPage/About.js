import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="bg-black h-[300px]">
        <h2 className="text-white grid place-items-center h-[300px] text-5xl font-bold">
          About Us
        </h2>
      </div>

      <div className="about-container">
        <img
          className="top-0"
          src="https://user-images.githubusercontent.com/107240847/232211732-e0d11b28-5b4a-4cfc-b28b-8b3c3395a192.jpg"
          alt="..."
          height={600}
          width={1200}
        />

        <center>
          {" "}
          <h2 className="text-4xl mt-12 font-bold">
            <b>BACKGROUND </b>
          </h2>
        </center>
        <div className="grid grid-cols-3 gap-8 m-8">
          <div className="bg-gray-200 block max-w-[30rem] rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Google Developer Student Clubs (DSCs) are community groups for
              university and college students interested in learning about
              Google technologies and developer tools. These clubs are open to
              any student, regardless of their academic background or major. SCs
              are organized and supported by Google Developers, who provide
              resources and guidance to help students learn, grow, and build
              projects using Google's technologies.
            </p>
          </div>
          <div className="bg-gray-200 block max-w-[30rem] rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              DSCs offer a variety of activities, including workshops, study
              jams, speaker sessions, hackathons, and hands-on projects. The
              primary goal of DSCs is to help students become better developers
              by providing them with opportunities to learn from
              experienceddevelopers, collaborate with other students, and build
              real-world projects using Google's technologies.
            </p>
          </div>
          <div className="bg-gray-200 block max-w-[30rem] rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Through these activities, students can gain valuable skills, build
              their portfolios, and prepare for careers in the tech industry.
              DSCs are present in universities and colleges all around the world
              and are a great way for students to connect with like-minded
              individuals, learn new skills, and make an impact in their
              communities through technology
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
