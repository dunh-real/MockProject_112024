import React from "react";
import { Navbar } from "../../components/Navbar"; 
import { CarouselWithContent } from "../../components/Carousel";
import { Typography } from "@material-tailwind/react";
import ImageAbout from "../../assets/about.jpg";
import ImageHero from "../../assets/hero_bg.jpg";
import ImageHero2 from "../../assets/hero_bg2.jpg";
import Footer from "../../components/Footer.component";

export const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <CarouselWithContent />
      <div className=" text-center">
        <Typography className="font-bold">
          WE ARE TRUSTED AGENCY COMPANY
        </Typography>
        <img
          src={ImageAbout}
          alt="ImageAbout"
          className="mt-10 w-full object-cover object-center"
          style={{height: "360px"}}
        />
        <div className="flex justify-between items-center">
          <img
            src={ImageHero}
            alt="ImageHero"
            className="mt-10 w-1/2 flex-1 object-cover object-center"
          />
          <Typography className="font-bold flex-1">
            <h4>Become Sherlock Holmes</h4>
            <h3>Just do it</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              ea repellendus perferendis doloribus! Unde excepturi maiores ipsa
              fugit neque tenetur. Consequuntur facilis tempora facere nulla
              fuga dolor at, quam omnis!
            </p>
          </Typography>
        </div>
        <div className="flex justify-between items-center">
          <Typography className="font-bold flex-1">
            <h4>Become Sherlock Holmes</h4>
            <h3>Just do it</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              ea repellendus perferendis doloribus! Unde excepturi maiores ipsa
              fugit neque tenetur. Consequuntur facilis tempora facere nulla
              fuga dolor at, quam omnis!
            </p>
          </Typography>
          <img
            src={ImageHero2}
            alt="ImageHero"
            className="mt-10 w-1/2 flex-1 object-cover object-center"
          />
        </div>
        <Typography className="mt-20 font-bold">
          Become Sherlock Holmes
        </Typography>

        <div className="mt-20 px-28 flex justify-between items-center">
          <div className="flex flex-col items-center gap-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="uppercase font-bold">Lorem, ipsum dolor.</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            vel rem quod sequi dolor hic, beatae quaerat? Ipsum, totam sapiente,
            cupiditate fugiat minus doloremque voluptatem, laborum aperiam alias
            animi magni?
          </div>
          <div className="flex flex-col items-center gap-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                clipRule="evenodd"
              />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <p className="uppercase font-bold">Lorem, ipsum dolor.</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            vel rem quod sequi dolor hic, beatae quaerat? Ipsum, totam sapiente,
            cupiditate fugiat minus doloremque voluptatem, laborum aperiam alias
            animi magni?
          </div>
          <div className="flex flex-col items-center gap-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="uppercase font-bold">Lorem, ipsum dolor.</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            vel rem quod sequi dolor hic, beatae quaerat? Ipsum, totam sapiente,
            cupiditate fugiat minus doloremque voluptatem, laborum aperiam alias
            animi magni?
          </div>
          <div className="flex flex-col items-center gap-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
              />
            </svg>
            <p className="uppercase font-bold">Lorem, ipsum dolor.</p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            vel rem quod sequi dolor hic, beatae quaerat? Ipsum, totam sapiente,
            cupiditate fugiat minus doloremque voluptatem, laborum aperiam alias
            animi magni?
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
