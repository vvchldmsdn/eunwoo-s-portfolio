'use client'

import { Bebas_Neue, Fasthand, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ReactFullpage from '@fullpage/react-fullpage';
import StoryOfArda from "../ui/project/story-of-arda";

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

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};

export default function Projects() {
  const credits: Credits = {
    enabled: true,
    label: "powered by fullPage.js",
  };

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
              <div className={`${bebasNeue.className} flex flex-col h-screen bg-backgroundColor p-10 xl:px-32`}>

                <div className="flex flex-row justify-between flex-none h-md:mb-20">
                  <Link href='/' className="text-2xl mb-12">PORTFOLIO: HOME</Link>
                  <p className="text-2xl mb-12">Eunwoo Choi</p>
                </div>

                <div className="flex justify-center relative">
                  <div className={`${fastHand.className} absolute text-7xl text-homeRed`}>frontend</div>
                  <div className="text-vxl">PROJECTS</div>
                </div>

                <div className="flex flex-row gap-20 overflow-x-auto h-80">

                  <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl relative"
                    onClick={() => {fullpageApi.moveTo(2)}}
                  >
                    <div className="absolute w-60 h-12 bg-homeRed left-10 -bottom-6 rounded-lg text-backgroundColor text-xl border-4 border-black flex items-center justify-center">Stor of Arda</div>
                    <div className="w-64 h-40 absolute top-8 left-8">
                      <Image
                        src='/download.jpg'
                        alt='냥'
                        fill={true}
                        className="object-cover"
                      ></Image>
                    </div>
                  </div>

                  <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl relative"
                    onClick={() => {fullpageApi.moveTo(3)}}
                  >
                    <div className="absolute w-60 h-12 bg-homeYellow left-10 -bottom-6 rounded-lg text-black text-xl border-4 border-black flex items-center justify-center">APC System control app</div>
                    <div className="w-64 h-40 absolute top-8 left-8">
                      <Image
                        src='/tmp1.jpg'
                        alt='냥'
                        fill={true}
                        className="object-cover"
                      ></Image>
                    </div>
                  </div>
                  <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl"></div>
                  <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl"></div>
                  <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl"></div>
                </div>

              </div>
            </div>

            <div className="section bg-backgroundColor">
              <StoryOfArda></StoryOfArda>
            </div>

            <div className="section bg-backgroundColor">2번 프로젝트</div>

            <div className="section bg-backgroundColor">3번 프로젝트</div>

            <div className="section bg-backgroundColor">4번 프로젝트</div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
    
  )
}