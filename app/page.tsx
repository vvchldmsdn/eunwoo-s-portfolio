'use client'

import { Bebas_Neue, Fasthand, Poppins } from "next/font/google";
import { ArrowDown, MenuIcon } from "./lib/icons";
import { useEffect, useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Link from "next/link";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

const fastHand = Fasthand({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};


export default function Home() {
  const credits: Credits = {
    enabled: true,
    label: "powered by fullPage.js",
  };

  const [text, setText] = useState<string>('');
  const fullText = 'BY  EUNWOO CHOI';
  let idx: number = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(idx));
      idx++;
      if (idx >= fullText.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const swiper = useSwiper();

  return (
    <ReactFullpage
			
      //fullpage options
			licenseKey = {"OPEN-SOURCE-GPLV3-LICENSE"}
			credits={credits}
			scrollingSpeed={1000}
      onLeave={() => {
        
      }}

			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
            

						<div className="section">
							<div className={`${bebasNeue.className} flex flex-col justify-between h-screen bg-backgroundColor p-10 xl:px-32`}>
								<div className="flex justify-between items-center">
									<div className="text-2xl">Frontend Portfolio of Eunwoo Choi</div>
									<MenuIcon/>
								</div>
								<div className="flex justify-center relative">
									<div className={`${fastHand.className} absolute text-7xl text-homeRed`}>frontend</div>
									<div className="text-vxl">PORTFOLIO</div>
									<div className="absolute bottom-0 w-80 bg-darkbg h-12 border-black rounded-lg border-4 text-xl flex items-center justify-center font-thin">{text}</div>
								</div>
								<div className="flex justify-between">
									<div className={`${poppins.className} w-2/5`}>www.portolio.com</div>
                  <div className="w-full flex justify-center items-center hover:cursor-pointer" onClick={() => fullpageApi.moveSectionDown()}>
                    <ArrowDown></ArrowDown>
                  </div>
									<div className="w-2/5 text-right">오른쪽 하단</div>
								</div>
							</div>
						</div>

						<div className="section bg-backgroundColor">
							<div className={`${bebasNeue.className} flex flex-col justify-between items-center h-screen px-10 py-24 xl:px-32 max-h-[46rem]`}>
                <div className="flex justify-center relative">
									<div className={`${fastHand.className} absolute text-7xl text-homeRed`}>table of</div>
									<div className="text-vxl">CONTENT</div>
								</div>
                <div className={`${poppins.className} w-4/6 text-center`}>Presentation are communication tools that can be used as demontrations, lectures, reports, and more. it is mostly presented before an audience.</div>
                <hr className="w-full border-black my-10 border-2" />
                <div className="grid grid-cols-3 gap-8 w-10/12">
                  <div className="bg-homeRed h-12 rounded-lg border-black border-2 flex items-center justify-center text-2xl text-backgroundColor">
                    <Link href='/about-me' className="w-full text-center">ABOUT ME</Link>
                  </div>
                  <div className="bg-homeGreen rounded-lg border-black border-2 flex items-center justify-center text-2xl text-backgroundColor">VISION MISSION</div>
                  <div className="bg-homeYellow rounded-lg border-black border-2 flex items-center justify-center text-2xl">PERSONAL SKILLS</div>
                  <div className="bg-homeYellow h-12 rounded-lg border-black border-2 flex items-center justify-center text-2xl">EDUCATION EXPERIENCE</div>
                  <div className="bg-homeRed rounded-lg border-black border-2 flex items-center justify-center text-2xl text-backgroundColor">
                    <Link href='/projects' className="w-full text-center">PROJECTS</Link>
                  </div>
                  <div className="bg-homeGreen rounded-lg border-black border-2 flex items-center justify-center text-2xl text-backgroundColor">CONTACT</div>
                </div>
              </div>
						</div>

            <div className="section">
              <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="h-screen"
              >
                <SwiperSlide className="bg-backgroundColor">
                  {swiper && (
                    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
                  )}
                </SwiperSlide>
                <SwiperSlide className="bg-backgroundColor">Slide 2</SwiperSlide>
                <SwiperSlide className="bg-backgroundColor">Slide 3</SwiperSlide>
                <SwiperSlide className="bg-backgroundColor">Slide 4</SwiperSlide>
              </Swiper>
            </div>

					</ReactFullpage.Wrapper>
				);
			}}
		/>
  );
}
