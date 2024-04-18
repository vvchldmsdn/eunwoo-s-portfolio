import Image from "next/image";
import Modals from "./project/modal";

export default function ImageCard(
  {imageSrc, width, heigth}: 
  {
    imageSrc: string,
    width: number,
    heigth: number
  }
) {
  return (
    <div className="w-80 h-64 bg-darkbg flex-shrink-0 border-4 border-black rounded-xl relative">
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
    </div>
  )
}