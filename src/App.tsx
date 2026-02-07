/* eslint-disable react-hooks/exhaustive-deps */
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import linux from './assets/logo/linux-svgrepo-com.svg';
import ts from "./assets/ts.svg";
import portfolio5 from "./assets/portfolio5.png";
import sakusiswa from "./assets/sakusiswa.png";
import ctf from './assets/logo/imagesctf.jpg';
import bootstrap from "./assets/bootstrap.png";
import php from "./assets/logo/php-svgrepo-com.svg";
import python from "./assets/logo/python-svgrepo-com.svg";
import tailwind from "./assets/logo/tailwind-svgrepo-com.svg";
import unity from "./assets/gambar43.png";
import react from "./assets/logo/react-svgrepo-com.svg";
import figma from "./assets/logo/figma-svgrepo-com.svg";
import js from "./assets/logo/js-svgrepo-com.svg";
import html from "./assets/logo/html-5-svgrepo-com(1).svg";
import css from "./assets/logo/css-3-svgrepo-com.svg";
import pelatihan from "./assets/pelatihan.jpg";
import linkedinmicrosoft from "./assets/linkedinmicrosoft.png";
import cisco from "./assets/cisco.png";
import mysql from "./assets/logo/mysql-logo-svgrepo-com.svg";
import photoshop from "./assets/logo/photoshop-cc-logo-svgrepo-com.svg";
import canva from "./assets/canva.png";
import laravel from "./assets/logo/laravel-svgrepo-com.svg";
import lightroom from "./assets/logo/adobe-lightroom-svgrepo-com.svg";
import displaygambar from "./assets/display.png";
import flappymonkey from './assets/gambar2.jpg';
import perpus from './assets/gambar2.png';
import cv from './assets/CV - Andika Cahya Rahman.pdf';
import git from './assets/gittt.png';
import github from './assets/github.webp';
import robloxstudio from './assets/rstudio.png';
import bgVideo from './assets/background.mp4';



function LoadingScreen({fadeout}: {fadeout: boolean}) {
  return (
    <>
      <div
        className={`min-h-screen bg-black inset-0 place-content-center transition-opacity duration-1000 ease-in ${fadeout ? "opacity-0" : "opacity-100"}`}
      >
        <h1 className="text-center font-semibold sm:text-4xl text-yellow-500">
          Welcome To My Portfolio
        </h1>
      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <Disclosure
        as="nav"
        className="relative bg-black dark:bg-black-800/50 sm:p-4 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-yellow-500 hover:bg-white/5 s:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-start px-3 text-yellow-500 justify-start sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <h1 className="sm:text-xl text-yellow-500">Andika Cahya Rahman</h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#home"
                    className="rounded-md px-3 py-2 text-sm  hover:border-1  hover:border-yellow-500"
                  >
                    Home
                  </a>
                  <a
                    href="#aboutme"
                    className="rounded-md px-3 py-2 text-sm  hover:border-1  hover:border-yellow-500"
                  >
                    About
                  </a>
                  <a
                    href="#certificate"
                    className="rounded-md px-3 py-2 text-sm    hover:border-1 hover:border-yellow-500"
                  >
                    Certificate
                  </a>
                   <a
                    href="#skills"
                    className="rounded-md px-3 py-2 text-sm hover:border-1  hover:border-yellow-500"
                  >
                    Skills
                  </a>
                  <a
                    href="#project"
                    className="rounded-md px-3 py-2 text-sm  hover:border-1  hover:border-yellow-500"
                  >
                    Project
                  </a>
                  <a
                    href="#contact"
                    className="rounded-md px-3 py-2 text-sm  hover:border-1 hover:border-yellow-500"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <DisclosureButton>
              <a
                href="#home"
                className="block rounded-md px-3 text-yellow-500 hover:border-yellow-500 font-bold py-2 hover:border-1 "
              >
              ./Home
              </a>
              <a
                href="#aboutme"
                className="block rounded-md px-3 text-yellow-500 hover:border-yellow-500 font-bold py-2 text-base hover:border-1 "
              >
              ./About
              </a>
              <a
                href="#certificate"
                className="block rounded-md px-3 text-yellow-500 hover:border-yellow-500 hover:border-1 font-bold py-2 text-base  "
              >
              ./Certificate
              </a>
               <a
                href="#skills"
                className="block rounded-md px-3 text-yellow-500 font-bold py-2 text-base hover:border-1 hover:border-yellow-500"
              >
                ./Skills
              </a>
              <a
                href="#project"
                className="block rounded-md px-3 text-yellow-500  font-bold py-2 text-base hover:border-1 hover:border-yellow-500 "
              >
              ./Project
              </a>
              <a
                href="#contact"
                className="block rounded-md px-3 text-yellow-500  font-bold py-2 text-base hover:border-1 hover:border-yellow-500 "
              >
              ./Contact
              </a>
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Home />
      <AboutMe />
      <Certificate />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

function Home() {
  const teks = ["Hi, I'm Andika"];

  const [efekteks, setEfekteks] = useState(0);
  const [subindex, setSubindex] = useState(0);
  const [hapusteks, setHapusteks] = useState(false);

  useEffect(() => {
    if (efekteks >= teks.length) setEfekteks(0);

    const baru = teks[efekteks];

    if (subindex === baru.length + 1 && !hapusteks) {
      setTimeout(() => setHapusteks(true), 2000);
      return;
    }

    if (subindex === 0 && hapusteks) {
      setHapusteks(false);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubindex((prev) => prev + (hapusteks ? -1 : 1));
      },
      hapusteks ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subindex, hapusteks, efekteks, teks]);

  return (
    
    <div
      className="flex items-center place-content-center sm:flex-row flex-col gap-9 sm:space-x-32 min-h-screen"
      id="home"
    >

      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full blur-xs h-full object-cover -z-10"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className=" space-y-1">
        <h1 className="text-yellow-500 font-bold text-3xl">
          {teks[efekteks].substring(0, subindex)}
        </h1>
        <h1 className="text-yellow-500 font-bold text-xl">Software Engineering Student</h1>
        <p className="text-yellow-500 w-90">
I am a Software Engineering Vocational School student who is interested in the world of programming, especially in the fields of web development, applications and information technology.  </p>
      <div className="flex-1 flex space-x-3">
          <a
            href={cv}
            className="rounded-xl flex gap-3 w-40 mt-3 p-2 border-1 border-black bg-black hover:scale-110 hover:duration-300 hover:border-yellow-500  text-center text-yellow-500 font-semibold"
            download
          >
            <i className="fa-solid fa-file p-1"></i>
            <h1>            Download CV
</h1>
          </a>
          <a
            href="#aboutme"
            className="rounded-xl gap-3 w-40 mt-3 p-2 border-1 border-black bg-black hover:scale-110 hover:duration-300 hover:border-yellow-500  text-center text-yellow-500 font-semibold"
          >
            About Me
          </a>
        </div>
      </div>
      {/* <div className="">
        <img src={chara} height={100} alt="tes" />
      </div> */}
    </div>
  );
}

function AboutMe() {
  return (
    <div
      className="flex animasi items-center h-screen scroll-smooth md:scroll-auto flex-col w-full sm:px-50 space-y-10 px-12 justify-center "
      id="aboutme"
    >
      <h1 className="text-yellow-500 text-4xl font-semibold">About</h1>
      <p className="text-yellow-500 sm:text-xl">
  My name is Andika Cahya Rahman. I have a strong interest in programming and computers. I enjoy learning new things, both academic and non-academic, especially those I haven't mastered yet. Furthermore, I'm passionate about solving problems effectively in every assignment or project I work on. </p>
    </div>
  );
}

function Certificate() {
  return (
    <>
      <div className=" animasi justify-center items-center mt-40" id="certificate">
        <h1 className="text-4xl font-semibold text-yellow-500 text-center mb-10">
          Certificate
        </h1>
        <div className="grid sm:grid-cols-3 p-10 place-items-center space-y-10 ">
          <div className="bg-black animasi hover:scale-105 ease-out duration-300 border-5  border-black">
            <img src={cisco} alt="" />
          </div>
          <div className="bg-black animasi hover:scale-105 ease-out duration-300 border-5  border-black">
            <img src={linkedinmicrosoft} alt="" />
          </div>
          <div className="bg-black animasi hover:scale-105 ease-out duration-300 border-5 border-black">
            <img src={pelatihan} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function Skills() {
  const cardStyle =
    "bg-black border border-yellow-500/30 rounded-2xl p-6 w-64 hover:-translate-y-2 hover:shadow-yellow-500/20 hover:shadow-lg transition-all duration-300";

  const titleStyle =
    "text-yellow-500 text-center text-2xl font-bold mt-4";

  return (
    <div className="mt-40 px-6" id="skills">
      
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-10">
        Skills
      </h1>

      <h2 className="text-3xl font-bold text-yellow-500 text-center mb-15">
        Software Development
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 place-items-center mb-20">
        
        <div className={cardStyle}>
          <img src={html} className="w-24 mx-auto" alt="HTML" />
          <h3 className={titleStyle}>HTML</h3>
        </div>

        <div className={cardStyle}>
          <img src={css} className="w-24 mx-auto" alt="CSS" />
          <h3 className={titleStyle}>CSS</h3>
        </div>

        <div className={cardStyle}>
          <img src={bootstrap} className="w-24 mx-auto" alt="Bootstrap" />
          <h3 className={titleStyle}>Bootstrap</h3>
        </div>

        <div className={cardStyle}>
          <img src={tailwind} className="w-24 mx-auto" alt="Tailwind" />
          <h3 className={titleStyle}>Tailwind</h3>
        </div>

        <div className={cardStyle}>
          <img src={js} className="w-24 mx-auto" alt="JavaScript" />
          <h3 className={titleStyle}>JavaScript</h3>
        </div>

        <div className={cardStyle}>
          <img src={react} className="w-24 mx-auto" alt="React" />
          <h3 className={titleStyle}>React JS</h3>
        </div>

        <div className={cardStyle}>
          <img src={ts} className="w-24 mx-auto" alt="TypeScript" />
          <h3 className={titleStyle}>TypeScript</h3>
        </div>

        <div className={cardStyle}>
          <img src={php} className="w-24 mx-auto" alt="PHP" />
          <h3 className={titleStyle}>PHP</h3>
        </div>

        <div className={cardStyle}>
          <img src={laravel} className="w-24 mx-auto" alt="Laravel" />
          <h3 className={titleStyle}>Laravel</h3>
        </div>

        <div className={cardStyle}>
          <img src={mysql} className="w-24 mx-auto" alt="MySQL" />
          <h3 className={titleStyle}>MySQL</h3>
        </div>

        <div className={cardStyle}>
          <img src={python} className="w-24 mx-auto" alt="Python" />
          <h3 className={titleStyle}>Python</h3>
        </div>

        <div className={cardStyle}>
          <img src={git} className="w-24 mx-auto" alt="Git" />
          <h3 className={titleStyle}>Git</h3>
        </div>

        <div className={cardStyle}>
          <img src={github} className="w-24 mx-auto" alt="GitHub" />
          <h3 className={titleStyle}>GitHub</h3>
        </div>

      </div>

      <h2 className="text-3xl font-bold text-yellow-500 text-center mb-10">
        Cyber Security
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mb-20">
        <div className={cardStyle}>
          <img src={linux} className="w-24 mx-auto" alt="Linux" />
          <h3 className={titleStyle}>Linux</h3>
        </div>

        <div className={cardStyle}>
          <img src={ctf} className="w-24 mx-auto rounded-full" alt="CTF" />
          <h3 className={titleStyle}>CTF</h3>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-yellow-500 text-center mb-10">
        Game Development
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mb-20">
        <div className={cardStyle}>
          <img src={unity} className="w-24 mx-auto" alt="Unity" />
          <h3 className={titleStyle}>Unity</h3>
        </div>

        <div className={cardStyle}>
          <img src={robloxstudio} className="w-24 mx-auto" alt="Roblox Studio" />
          <h3 className={titleStyle}>Roblox Studio</h3>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-yellow-500 text-center mb-10">
        Design & Edit
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mb-20">
        <div className={cardStyle}>
          <img src={figma} className="w-24 mx-auto" alt="Figma" />
          <h3 className={titleStyle}>Figma</h3>
        </div>

        <div className={cardStyle}>
          <img src={canva} className="w-24 mx-auto" alt="Canva" />
          <h3 className={titleStyle}>Canva</h3>
        </div>

        <div className={cardStyle}>
          <img src={photoshop} className="w-24 mx-auto" alt="Photoshop" />
          <h3 className={titleStyle}>Photoshop</h3>
        </div>

        <div className={cardStyle}>
          <img src={lightroom} className="w-24 mx-auto" alt="Lightroom" />
          <h3 className={titleStyle}>Lightroom</h3>
        </div>
      </div>

    </div>
  );
}

function Project() {
  return (
    <div className="animasi mt-40 px-6" id="project">
      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-16">
        My Projects
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">

        <div className="bg-black rounded-2xl w-72 sm:w-80 overflow-hidden border border-yellow-500/20 shadow-lg hover:-translate-y-2 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="h-60 overflow-hidden">
            <img src={displaygambar} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Gym Rex" />
          </div>
          <div className="p-6 flex flex-col justify-between h-64">
            <div>
              <h2 className="text-yellow-500 text-2xl font-semibold text-center mb-4">Gym Rex</h2>
              <p className="text-yellow-500 text-sm text-center">
                This app provides complete gym movement guides with steps and tips.
                Created as my final vocational project.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1Ebw4BBCaJQ_F_15VdZ5YrdOJtqHUJjLB/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 mx-auto w-32 py-2 rounded-xl border border-yellow-500 text-yellow-500 font-semibold text-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              View
            </a>
          </div>
        </div>

        <div className="bg-black rounded-2xl w-72 sm:w-80 overflow-hidden border border-yellow-500/20 shadow-lg hover:-translate-y-2 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="h-60 overflow-hidden">
            <img src={flappymonkey} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Flappy Monkey" />
          </div>
          <div className="p-6 flex flex-col justify-between h-64">
            <div>
              <h2 className="text-yellow-500 text-2xl font-semibold text-center mb-4">Flappy Monkey</h2>
              <p className="text-yellow-500 text-sm text-center">
                Inspired by Flappy Bird. Players score by passing through pipe obstacles.
                Created as my vocational final project.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1OD4UT5H0jQQZN6uLEM0KvRud4Me_35RB/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 mx-auto w-32 py-2 rounded-xl border border-yellow-500 text-yellow-500 font-semibold text-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              View
            </a>
          </div>
        </div>

        <div className="bg-black rounded-2xl w-72 sm:w-80 overflow-hidden border border-yellow-500/20 shadow-lg hover:-translate-y-2 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="h-60 overflow-hidden">
            <img src={sakusiswa} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Saku Siswa" />
          </div>
          <div className="p-6 flex flex-col justify-between h-64">
        kuroshii251
              <h2 className="text-yellow-500 text-2xl font-semibold text-center mb-4">Saku Siswa</h2>
              <p className="text-yellow-500 text-sm text-center">
                A student financial management system designed to help students
                manage and monitor their expenses.
              </p>
            </div>
            <a
              href="https://github.com/sncthyz/Saku-Siswa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 mx-auto w-32 py-2 rounded-xl border border-yellow-500 text-yellow-500 font-semibold text-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              View
            </a>
          </div>
        </div>

        <div className="bg-black rounded-2xl w-72 sm:w-80 overflow-hidden border border-yellow-500/20 shadow-lg hover:-translate-y-2 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="h-60 overflow-hidden">
            <img src={perpus} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="E-Library" />
          </div>
          <div className="p-6 flex flex-col justify-between h-64">
            <div>
              <h2 className="text-yellow-500 text-2xl font-semibold text-center mb-4">E-Library</h2>
              <p className="text-yellow-500 text-sm text-center">
                An online library system that allows users to read and borrow books
                without visiting the physical library.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-2xl w-72 sm:w-80 overflow-hidden border border-yellow-500/20 shadow-lg hover:-translate-y-2 hover:shadow-yellow-500/30 transition-all duration-300">
          <div className="h-60 overflow-hidden">
            <img src={portfolio5} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="CharacterBot" />
          </div>
          <div className="p-6 flex flex-col justify-between h-64">
            <div>
              <h2 className="text-yellow-500 text-2xl font-semibold text-center mb-4">CharacterBot</h2>
              <p className="text-yellow-500 text-sm text-center">
                A website that allows users to chat directly with their favorite
                anime characters.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


function Contact() {
  return (
    <>
      <div
        className="animasi flex flex-col mt-40 justify-center items-center"
        id="contact"
      >
        <h1 className="text-yellow-500 font-semibold text-4xl text-center mb-5">
          Contact
        </h1>
        <p className="text-yellow-500 text-xl mb-10">You can contact me by this contact</p>
        <div className="grid rounded-2xl sm:grid-cols-2 bg-blue-100 border-4 border-black">
          <div className=" sm:w-100 w-80 sm:h-90 h-100 rounded-xl place-content-center">
            <form
              action="https://formspree.io/f/myzpqran"
              method="POST"
              className=" flex-col p-10 "
            >
              <h1 className="font-bold text-center text-black text-3xl">
                Form{" "}
              </h1>
              <label className="text-black font-semibold">
                {" "}
                Email
                <input
                  type="email"
                  className="w-full border-1 border-black p-2 text-black bg-white rounded-xs"
                  placeholder="Email"
                  name="email"
                />
              </label>
              <label className="text-black font-semibold">
                {" "}
                Pesan
                <textarea
                  name="message"
                  className="w-full text-black border-1 border-black bg-white rounded-xs"
                  placeholder="Pesan"
                >
                  {" "}
                </textarea>
              </label>
              <button
                type="submit"
                className="mt-5 bg-black border-1 hover:border-yellow-500 text-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="bg-black p-5 space-y-8 h-full place-content-center">
            <div className="place-content-center space-y-10">
              <div className=" flex space-x-3">
                <i className="fa-brands text-yellow-500 fa-whatsapp  text-3xl"></i>
                <h1 className="text-yellow-500">+62 887-1729-638</h1>
              </div>
              <div className=" flex space-x-3 ">
                <i className="fa-solid fa-envelope text-yellow-500 text-3xl"></i>
                <h1 className="text-yellow-500">andikacrwork@gmail.com</h1>
              </div>
               <div className=" flex space-x-3 ">
              <i className="fa-solid fa-location-dot text-yellow-500 text-3xl"></i>
                <h1 className="text-yellow-500">East Jakarta, Jakarta, Indonesia</h1>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  const waktu = new Date().getFullYear();
 
  return (
    <>
      <div className="bg-black mt-30 sm:h-110 h-200">
        <div className="grid place-items-center space-y-10">
          <h1 className="text-yellow-500 font-semibold text-3xl mt-30">Portfolio</h1>
          <div className="flex sm:flex-row flex-col gap-10">
            <a href="#home" className="text-yellow-500 font-bold ">
              Home
            </a>
            <a href="#aboutme" className="text-yellow-500 font-semibold ">
              About
            </a>
            <a href="#skills" className="text-yellow-500 font-semibold ">Skills</a>

            <a href="#certificate" className="text-yellow-500 font-semibold ">
              Certificate
            </a>
            <a href="#project" className="text-yellow-500 font-semibold ">
              Project
            </a>
            <a href="#contact" className="text-yellow-500 font-semibold ">Contact</a>
          </div>
            <div className="relative flex justify-center items-center p-3">
              <div className="flex flex-1 sm:absolute  bottom-0 space-x-10 text-center ">
                <a href="https://www.linkedin.com/in/andika-cahya-rahman-a6704b2a2/">
                  <i className="fa-brands fa-linkedin text-yellow-500  text-3xl"></i>
                </a>
                                <a href="https://www.instagram.com/kuroshii274._">
                  <i className="fa-brands fa-instagram text-yellow-500 text-3xl"></i>
                </a>
                <a href="https://github.com/kuroshii251">
                  <i className="fa-brands fa-github text-yellow-500  text-3xl"></i>
                </a>
              </div>
            </div>
          <div>
            <hr className="text-yellow-500` sm:w-160" />
            <h1 className="text-center place-content-center mt-10 text-yellow-500 ">Copyright {waktu} by Andika</h1>
          </div>
        </div>
      </div>
    </>
  );
}

function SystemLoading() {
  const [loading, setLoading] = useState(true);
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeout(true);
      setTimeout(() => setLoading(false), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <LoadingScreen fadeout={fadeout} /> : <Main />}</>;
}

export default SystemLoading;
