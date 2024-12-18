"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
      className="h-[488px] md:h-[800px] flex items-center overflow-hidden justify-center relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,.5),rgba(14,0,36,.5)_78%,transparent)]" />
      {/* Start Planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-400 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,.5),-20px_-20px_80px_rgba(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />
      {/* End Planet */}
      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{ rotate: "1turn" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:h-[576px] md:w-[576px] border rounded-full border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className="absolute h-2 w-2 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className="absolute h-5 w-5 left-full top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full flex items-center justify-center">
          <div className="bg-white h-2 w-2 rounded-full" />
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[440px] w-[440px] md:h-[776px] md:w-[776px] rounded-full border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[976px] md:w-[976px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className="absolute h-2 w-2 left-full top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
      </motion.div>
      {/* End Ring 3 */}
      <div className="px-6 lg:px-8 relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-white/70 mt-6 text-center mx-auto">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-6">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
export default Hero;
