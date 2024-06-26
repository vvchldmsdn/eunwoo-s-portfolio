'use client'

import { Bebas_Neue, Fasthand, Poppins } from "next/font/google";
import { ArrowDown, MenuIcon } from "./lib/icons";
import { useEffect, useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import { Popover, PopoverTrigger, PopoverContent, ScrollShadow, Image, Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Link from "next/link";
import MenuDropdown from "./ui/drop-down";

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
									<MenuDropdown currPage="Home"></MenuDropdown>
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

            {/* table of content */}
						<div className="section bg-backgroundColor">
							<div className={`${bebasNeue.className} flex flex-col justify-between items-center h-screen px-10 py-24 xl:px-32 max-h-[46rem]`}>
                <div className="flex justify-center relative">
									<div className={`${fastHand.className} absolute text-7xl text-homeRed`}>table of</div>
									<div className="text-vxl">CONTENT</div>
								</div>
                <hr className="w-full border-black my-10 border-2" />
                <div className="grid grid-cols-3 gap-8 w-10/12">
                  {/* about me */}
                  <div className="bg-homeRed h-12 rounded-lg border-black border-2 flex items-center justify-center text-2xl text-backgroundColor">
                    <Link href='/about-me' className="w-full text-center">ABOUT ME</Link>
                  </div>
                  {/* vision mission */}
                  <div className="bg-homeGreen rounded-lg border-black border-2 flex items-center justify-center text-2xl text-backgroundColor">VISION MISSION</div>
                  {/* skills */}
                  <div className="bg-homeYellow rounded-lg border-black border-2 flex items-center justify-center text-2xl">PERSONAL SKILLS</div>
                  {/* education */}
                  <Popover
                    className="inline-block" showArrow backdrop="opaque"
                    classNames={{
                      base: [
                        // arrow color
                        "before:bg-homeGreen"
                      ],
                      content: [
                        "py-0 px-0 border-2 border-black",
                        "bg-darkbg",
                      ],
                    }}
                  >
                    <PopoverTrigger>
                      <div className="bg-homeYellow rounded-lg border-black border-2 flex items-center justify-center text-2xl cursor-pointer">Education</div>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Card  className={`py-4 w-[400px] bg-backgroundColor`}>
                        <CardHeader>
                          <p className={`${bebasNeue.className} text-3xl`}>list of educations</p>
                        </CardHeader>
                        <Divider/>
                        <CardBody className="text-lg">
                          <p className="mb-1/2">University: Yonsei Univ. 2015~2022</p>
                          <p className="mb-2">Degree: Mathmatics Barchelors</p>
                          <p className="mb-2">SSAFY: 2022.02~2022.12</p>
                        </CardBody>
                      </Card>
                    </PopoverContent>
                  </Popover>
                  {/* projects */}
                  <div className="bg-homeRed h-12 rounded-lg border-black border-2 flex items-center justify-center text-2xl text-backgroundColor">
                    <Link href='/projects' className="w-full text-center">PROJECTS</Link>
                  </div>
                  {/* contact */}
                  <Popover
                    className="inline-block" showArrow backdrop="opaque"
                    classNames={{
                      base: [
                        // arrow color
                        "before:bg-homeYellow"
                      ],
                      content: [
                        "py-0 px-0 border-2 border-black",
                        "bg-darkbg",
                      ],
                    }}
                  >
                    <PopoverTrigger>
                      <div className="bg-homeGreen rounded-lg border-black border-2 flex items-center justify-center text-2xl text-backgroundColor cursor-pointer">CONTACT</div>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Card  className={`py-4 w-[400px] bg-backgroundColor`}>
                        <CardHeader>
                          <p className={`${bebasNeue.className} text-3xl`}>Contact Information</p>
                        </CardHeader>
                        <Divider/>
                        <CardBody className="text-lg">
                          <p className="mb-2">Email: vvchldmsdn@naver.com</p>
                          <p className="mb-2">github: https://github.com/vvchldmsdn</p>
                        </CardBody>
                      </Card>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
						</div>

            {/* <div className="section">
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
            </div> */}

					</ReactFullpage.Wrapper>
				);
			}}
		/>
  );
}
