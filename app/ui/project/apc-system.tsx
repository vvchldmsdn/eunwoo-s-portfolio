import { Bebas_Neue, Noto_Sans_KR, Fasthand, Do_Hyeon } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import {Accordion, AccordionItem, Code, Divider} from "@nextui-org/react";
import {useDisclosure} from "@nextui-org/react";

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Modals from "./modal";
import { OuterLinkRed } from "@/app/lib/icons";
import ImageCard from "../image-card";

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

const dohyun = Do_Hyeon({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});


export default function ApcSystem() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="h-screen"
    >
      {/* 첫 번쨰 슬라이드 */}
      <SwiperSlide className="bg-backgroundColor">
        <div className={`${bebasNeue.className} h-screen bg-backgroundColor px-10 px-10 py-16 xl:px-32 flex flex-col`}>
          <div className="flex flex-row justify-between h-20 flex-none">
            <p className="text-3xl mb-12">APC SYSTEM APPLICATION</p>
            <p className="text-3xl mb-12">page 1 of 4</p>
          </div>

          <div className="flex flex-row flex-initial h-full justify-between items-center gap-16">
            {/* 프로젝트 이름, 간략 설명 들어갈 자리 */}
            <div className="flex flex-col justify-center w-[32rem] flex-none">
              <h1 className="text-8xl mb-10">APC SYSTEM APPLICATION</h1>
              <p className={`${dohyun.className} mb-24`}>
              APC시스템 조회와 관리를 용이하게 하기 위해 공정 제조 데이터 시각화와 기준 정보, 회원 권한 변경 등을 태블릿 PC에서 할 수 있는 애플리케이션 제작
              </p>
            </div>
            {/* 프로젝트 소개 이미지 2개 들어갈 곳 */}
            <div className="w-full h-5/6 flex flex-initial justify-center items-center bg-homeGreen border-4 border-black rounded-xl">
              <div className="flex flex-col w-5/6 h-5/6 justify-center relative">
                <Image
                  src='/APC_background.png'
                  alt='냥'
                  fill={true}
                  className="object-cover w-full rounded-xl"
                ></Image>
              </div>
            </div>
          </div>

        </div>
      </SwiperSlide>
      
      {/* 두 번쨰 슬라이드 */}
      <SwiperSlide className="bg-backgroundColor">
        <div className={`${bebasNeue.className} h-screen bg-backgroundColor px-10 px-10 py-16 xl:px-32 flex flex-col`}>
          <div className="flex flex-row justify-between h-8 flex-none mb-12 h-md:mb-24">
            <p className="text-3xl mb-12">APC SYSTEM APPLICATION</p>
            <p className="text-3xl mb-12">page 2 of 4</p>
          </div>

          <div className="flex flex-row flex-initial h-full justify-between">
            
            <div className="w-2/5">
              <h1 className={`${dohyun.className} text-7xl text-homeRed font-black mb-12`}>기획 배경</h1>
              <p className={`${dohyun.className} text-base font-bold`}>기존 데스크탑 PC 환경에서만 조회하고 제어할 수 있었던 APC 시스템은 실제 공정 근무자에게는 불편한 환경이였습니다.</p>
              <br/>
              <p className={`${dohyun.className} text-base font-bold`}>이에 사용자들이 휴대하며 공정 데이터를 확인하고 제어할 수 있는 테블릿 PC용 애플리케이션의 필요성이 대두되었고 프로젝트를 진행하게 된 배경이 됐습니다.</p>
              <br/>
            </div>

            <Divider orientation="vertical"></Divider>

            <div className="w-2/5">
              <h1 className={`${dohyun.className} text-7xl text-homeGreen font-black mb-12`}>기술 스택</h1>
              <Accordion variant="light" isCompact defaultExpandedKeys={["1"]}>
                <AccordionItem key="1" aria-label="Accordion 1" title="Android Studio" className="text-sm leading-5">
                  <p className="text-base mb-2">14.0.4 버전 / app router</p>
                  <p className="text-sm leading-5">백과사전, 지도 데이터 등 정적인 데이터가 많은 프로젝트 특성 상 SSR로 렌더링 시에 높은 사용자 경험과 메타데이터 동적 생성 등 SEO에도 높은 점수를 받을 수 있기에 React보다는 Next.js를 활용하기로 하였습니다.</p>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Kotlin">
                  <p className="text-base mb-2">Vercel 자동 배포, BLOB, PostgreSQL 활용</p>
                  <p className="text-sm leading-5 mb-2">Next.js는 Vercel과의 호환성이 매우 좋고 git repository를 등록해 놓으면 브랜치의 최신 푸쉬를 자동으로 배포해주기 때문에 선택하였습니다.</p>
                  <p className="text-sm leading-5 mb-2">또한 Vercel에서 제공하는 BLOB, PostgreSQL 데이터베이스를 활용하면 서버사이드 data fetch가 용이하고 쿼리문을 서버에서 직접 작성할 수 있는 등 다양한 장점이 있습니다.</p>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Spring Security & Redis">
                  <p className="text-sm leading-5 mb-2">유틸리티 우선의 접근 방식, 빠른 개발 속도를 가능하게 하기때문에 tailwindCSS를 선택하였습니다. 또한 ratio, scrollbar-hide등의 확장 프로그램 설치를 통해 복잡한 UI도 쉽게 가능합니다.</p>
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 3" title="Spring Boot">
                  <p className="text-sm leading-5 mb-2">typescript의 사용은 에러를 미리 감자하여 주어 버그를 줄일 수 있기 때문입니다. 또한 다양한 인터페이스와 prop데이터에 대해 custom type을 지정할 수 있어 효율성도 크게 상승하고 유지보수성도 높아집니다.</p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 세 번쨰 슬라이드 */}
      <SwiperSlide className="bg-backgroundColor">
        <div className={`${bebasNeue.className} h-screen bg-backgroundColo px-10 py-16 xl:px-32 flex flex-col`}>
          <div className="flex flex-row justify-between h-6 flex-none h-md:mb-12">
            <p className="text-3xl mb-12">APC SYSTEM APPLICATION</p>
            <p className="text-3xl mb-12">page 3 of 4</p>
          </div>

          <div className="flex justify-center relative h-md:mb-16">
            <div className={`${fastHand.className} absolute text-7xl text-homeRed`}>page</div>
            <div className="text-vxl">Description</div>
          </div>

          <div className="flex flex-row gap-20 overflow-x-auto h-80">

            {/* 첫 번째 카드 */}
            <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl relative">
              <div className="absolute w-60 h-12 bg-homeRed left-9 -bottom-6 rounded-lg text-backgroundColor text-xl border-4 border-black flex items-center justify-center">
                <Modals project={'story of arda'} page={'회원가입 화면'} backgroundColor="red"></Modals>
              </div>
              <div className="w-72 h-40 absolute top-8 left-3">
                <Image
                  src='/APC_signup.jpg'
                  alt='냥'
                  fill={true}
                  className="object-cover rounded-xl"
                ></Image>
              </div>
            </div>

            {/* 두 번째 카드 */}
            <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl relative">
              <div className="absolute w-60 h-12 bg-homeYellow left-10 -bottom-6 rounded-lg text-black text-xl border-4 border-black flex items-center justify-center">
                <Modals project={'story of arda'} page={'회원 권한 부여'} backgroundColor="yellow"></Modals>
              </div>
              <div className="w-72 h-40 absolute top-8 left-3">
                <Image
                  src='/APC_admin_approval.jpg'
                  alt='냥'
                  fill={true}
                  className="object-cover rounded-xl"
                ></Image>
              </div>
            </div>

            {/* 세 번째 카드 */}
            <div>
              <ImageCard imageSrc="/APC_ontime_chart.jpg" width={80} heigth={64}></ImageCard>
            </div>
            {/* <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl relative">
              <div className="absolute w-60 h-12 bg-homeGreen left-10 -bottom-6 rounded-lg text-black text-xl border-4 border-black flex items-center justify-center">
                <Modals project={'story of arda'} page={'실시간 데이터 그래프'} backgroundColor="green"></Modals>
              </div>
              <div className="w-72 h-40 absolute top-8 left-3">
                <Image
                  src='/APC_ontime_chart.jpg'
                  alt='냥'
                  fill={true}
                  className="object-cover rounded-xl"
                ></Image>
              </div>
            </div> */}

            {/* 네 번째 카드 */}
            <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl"></div>

            {/* 다섯 번째 카드 */}
            <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl"></div>
          </div>

        </div>
      </SwiperSlide>

      {/* 네 번쨰 슬라이드 */}
      <SwiperSlide className="bg-backgroundColor">
        <div className={`${bebasNeue.className} h-screen bg-backgroundColor px-10 px-10 py-16 xl:px-32 flex flex-col`}>
          <div className="flex flex-row justify-between h-8 flex-none mb-2 h-md:mb-8">
            <p className="text-3xl mb-12">APC SYSTEM APPLICATION</p>
            <p className="text-3xl mb-12">page 4 of 4</p>
          </div>

          <div className="text-7xl font-black mb-10 h-md:mb-20 text-center">Issues and solving</div>

          <div className="flex flex-row flex-initial h-full justify-between">
            {/* 첫 번째 */}
            <div className="w-1/4">
              <h1 className={`${dohyun.className} text-5xl text-homeRed font-black mb-12`}>기업 데이터 보안</h1>
              <p className={`${dohyun.className} text-base font-bold mb-12`}>{"지도 화면을 구현할 때 Next.js Image태그의 '레이아웃 쉬프트 방지', '자동 레이지 로딩' 등의 장점을 이용하기 위해 Image태그를 사용하였습니다. 근데 img태그를 사용할 때에 비해 현저하게 낮은 화질을 보여주었고 priority 속성을 100으로 맞춰도 조금 나아지는 정도였습니다."}</p>
              <Link
                href="https://www.notion.so/img-vs-Image-3ad44470daf240f3a14238431692157a?pvs=4"
              >
                <div className="flex flex-row w-full bg-homeRed border-2 border-black rounded-lg justify-center gap-4 w-1/2 max-w-44">
                  <p className="text-3xl text-backgroundColor">See More</p>
                  <OuterLinkRed></OuterLinkRed>
                </div>
              </Link>
            </div>

            <Divider orientation="vertical"></Divider>
            {/* 두 번째 */}
            <div className="w-1/4">
              <h1 className="text-5xl text-homeGreen font-black mb-12">Passive Event Listener</h1>
              <p className={`${dohyun.className} text-base font-bold mb-12`}>{"Full Page UI로 디자인을 하여 한 페이지 내에서 가로 스크롤, 드래그 등의 이벤트를 많이 사용해야 했습니다. 화면 전체가 스크롤 되는 것을 막기 위해"} <Code>e.preventdefault()</Code>{"를 적용하였는데 'Passive Event Listener' 때문에 성능이 저하될 수 있다는 경고문이 발생하였습니다."}</p>
              <Link
                href="https://www.notion.so/img-vs-Image-3ad44470daf240f3a14238431692157a?pvs=4"
              >
                <div className="flex flex-row w-full bg-homeGreen  border-2 border-black rounded-lg justify-center gap-4 w-1/2 max-w-44">
                  <p className="text-3xl text-backgroundColor">See More</p>
                  <OuterLinkRed></OuterLinkRed>
                </div>
              </Link>
            </div>

            <Divider orientation="vertical"></Divider>
            {/* 세 번째 */}
            <div className="w-1/4">
              <h1 className="text-5xl text-homeRed font-black mb-12">While Loop & repaint</h1>
              <p className={`${dohyun.className} text-base font-bold mb-12`}>지도 이미지 위에서 지역을 클릭하거나 검색창에 검색하였을 때 화면 중앙에 해당 지역이 위치하게끔 img태그의 위치를 움지역야했습니다. 처음에는 while문으로 태그의 위치를 점차적으로 변화시키려 했지만 아무런 변화도 일어나지 않았습니다.</p>
              <Link
                href="https://www.notion.so/While-UI-d398fc00f32f43619f221ca05e7a0508?pvs=4"
              >
                <div className="flex flex-row w-full bg-homeRed border-2 border-black rounded-lg justify-center gap-4 w-1/2 max-w-44">
                  <p className="text-3xl text-backgroundColor">See More</p>
                  <OuterLinkRed></OuterLinkRed>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}