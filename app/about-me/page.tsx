'use client'

import { Bebas_Neue, Fasthand, Noto_Sans_KR } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "../lib/icons";
import ReactFullpage from '@fullpage/react-fullpage';

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

const poppins = Noto_Sans_KR({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};

export default function AboutMe() {
  const credits: Credits = {
    enabled: true,
    label: "powered by fullPage.js",
  };

  return (
    <ReactFullpage
			//fullpage options
			licenseKey = {"OPEN-SOURCE-GPLV3-LICENSE"}
			credits={credits}
			scrollingSpeed = {1000} /* Options here */

			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>

						<div className="section">
              <div className={`${bebasNeue.className} h-screen bg-backgroundColor px-10 px-10 py-24 xl:px-52 flex flex-col justify-between`}>

                <div className="flex flex-row justify-between flex-none">
                  <Link href='/' className="text-xl mb-12">PORTFOLIO:HOME</Link>
                  <p className="text-xl mb-12">Eunwoo Choi</p>
                </div>

                <div className="flex flex-row justify-between h-[32rem] flex-none items-center mb-24">
                  <div className="flex flex-col w-[32rem]">
                    <div className={`${fastHand.className} absolute text-7xl text-homeRed`}>introduce</div>
                    <div className="text-vxl">ABOUT ME</div>
                    <p className={`${poppins.className} leading-8 text-left text-xl`}>사용자를 위한 개발에 진심인 프론트엔드 개발자 지망생 최은우입니다. SSAFY를 통해 개발에 입문하였고 총 3번의 팀 프로젝트, 2번의 개인 프로젝트를 통해 열심히 성장중입니다. 
                    
                    최근에는 SSR과 SEO에 관심을 가지고 공부중이며 goolge search console을 통해 실제 검색 노출, 클릭 성과를 목표로 하고 있습니다.</p>
                  </div>
                  <div className="w-[22rem] h-full bg-homeRed flex justify-center items-center border-4 border-black rounded-lg">
                    <Image
                      src='/my_image.jpg'
                      alt='my profile image'
                      width={300}
                      height={1}
                      className="object-contain bg-darkbg"
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center items-center">
                  <ArrowDown></ArrowDown>
                </div>

              </div>
						</div>

						<div className="section">
							<div className={`${bebasNeue.className} h-screen bg-backgroundColor px-10 px-10 py-24 xl:px-52 flex flex-col`}>

                <div className="flex flex-row justify-between flex-none">
                  <Link href='/' className="text-xl mb-12">PORTFOLIO:HOME</Link>
                  <p className="text-xl mb-12">Eunwoo Choi</p>
                </div>

                <div className="text-9xl text-center mb-10">EDUCATION BACKGROUND</div>

                <div className="w-full h-96 flex-1 bg-darkbg border-4 border-black rounded-lg mb-24 flex flex-row justify-around">
                  <div className="w-3/12 max-w-80 bg-homeYellow flex flex-col items-center justify-around">
                    <p>2019</p>
                    <div className="w-8 h-8 bg-homeRed"></div>
                    <h1>주엽 고등학교</h1>
                    <p>l;aksdjfl;kwejsdvn;jasd;lkajwe;lknv;ljkn</p>
                  </div>
                  <div className="w-3/12 max-w-80 bg-homeYellow flex flex-col items-center"></div>
                  <div className="w-3/12 max-w-80 bg-homeYellow flex flex-col items-center"></div>
                </div>

              </div>
						</div>

					</ReactFullpage.Wrapper>
				);
			}}
		/>
    
  )
}