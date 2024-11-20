"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

interface FeatureTabProps extends ComponentPropsWithoutRef<"div"> {
  icon: string;
  title: string;
  isNew: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
  selected: boolean;
}
const FeatureTab: React.FC<FeatureTabProps> = ({
  icon,
  title,
  isNew,
  backgroundPositionX,
  backgroundPositionY,
  backgroundSizeX,
  selected,
  ...divProps
}) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;
  useEffect(() => {
    if (!tabRef.current || !selected) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };
  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="border border-white/15 flex p-4 rounded-xl gap-x-4 items-center lg:flex-1 relative"
      {...divProps}
    >
      {selected && (
        <motion.div
          style={{
            maskImage,
            WebkitMaskImage: maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
        />
      )}

      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={icon}
          className="h-5 w-5"
          autoplay
        />
      </div>
      <h3 className="font-medium">{title}</h3>
      {isNew && (
        <span className="text-xs rounded-full px-4 py-1 bg-[#8c44ff] text-black font-semibold">
          new
        </span>
      )}
    </div>
  );
};

const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const handleSelectTab = (i: number) => {
    setSelectedTab(i);
    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[i].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), 0, tabs[i].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), 0, tabs[i].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="px-6 lg:px-8">
        <h2 className="text-center text-5xl md:text-6xl   font-medium tracking-tighter">
          Elevate you SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl tracking-tight max-w-2xl mx-auto text-center mt-6">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-12 flex flex-col gap-4 lg:flex-row">
          {tabs.map((tab, i) => (
            <FeatureTab
              key={i}
              onClick={() => handleSelectTab(i)}
              {...tab}
              selected={selectedTab === i}
            />
          ))}
        </div>
        <div className="border border-white/20 p-4 rounded-xl mt-4">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition,
              backgroundSize,
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Features;
