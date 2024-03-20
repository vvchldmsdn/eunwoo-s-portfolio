'use client';

import ReactFullpage from '@fullpage/react-fullpage';
import { Bebas_Neue, Fasthand, Poppins } from "next/font/google";
import { MenuIcon } from "../lib/icons";
import { useEffect, useState } from "react";

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};

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

export default function FullPage() {
	const credits: Credits = {
    enabled: true,
    label: "my custom",
  };

	const [text, setText] = useState<string>('');
  const fullText = 'B Y EUNWOO CHOI';
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
  }, [])


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
							<div className={`${bebasNeue.className} flex flex-col justify-between h-screen bg-backgroundColor p-10 xl:px-32 snap-start`}>
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
									<div className={`${poppins.className}`}>www.portolio.com</div>
									<div>오른쪽 하단</div>
								</div>
							</div>
						</div>
						<div className="section">
							<p>Section 2</p>
						</div>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	)
}