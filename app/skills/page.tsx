'use client'

import { Bebas_Neue } from "next/font/google";
import { useState, useRef } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});


export default function () {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [draggingIcon, setDraggingIcon] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);

  const icons: Array<{ id: number, name: string }> = [
    {
      id: 1,
      name: 'React',
    },
    {
      id: 2,
      name: 'HTML',
    },
    {
      id: 3,
      name: 'CSS',
    },
    {
      id: 4,
      name: 'Next.js',
    },
    {
      id: 5,
      name: 'javascript',
    },
  ];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
    setIsDragging(true)
    setDraggingIcon(id);
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
    console.log(e.clientX, e.clientY)
  };

  const handleDragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      console.log(mousePosition, draggingIcon)
      const dx = e.clientX - mousePosition.x;
      const dy = e.clientY - mousePosition.y;
      // if (iconRef.current) {
      //   iconRef.current.style.transform = `translate(${dx}px, ${dy}px)`
      // }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false)
    // if (iconRef.current) {
    //   iconRef.current.style.transform = `translate(0, 0)`
    // }
  };

  return (
    <div className={`${bebasNeue.className} h-screen bg-backgroundColor px-10 px-10 py-12 h-md:py-24 xl:px-52 flex flex-row`}>
      {/* 아이콘들 있을 곳 */}
      <div className="flex flex-col flex-none w-48 gap-8 justify-center">
        {icons.map((icon) => {
          return (
            <div className="w-10 h-10 rounded-full bg-homeGreen"
              draggable="true"
              key={icon.id}
              onMouseDown={(e) => handleMouseDown(e, icon.id)}
              onMouseMove={(e) => handleDragging(e)}
              onMouseUp={() => handleMouseUp()}
            ></div>
          )
        })}
      </div>

      {/* 설명 나오는 곳 */}
      <div className="flex-initial bg-homeRed w-full"></div>
    </div>
  )
}