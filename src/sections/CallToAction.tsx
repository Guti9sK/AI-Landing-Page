"use client";
import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const updateMousePosition = (e: MouseEvent) => {
        if (!to.current) return;
        const {top, left} = to.current.getBoundingClientRect();
        
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    }
    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.addEventListener('mousemove', updateMousePosition);
        }
    },[])
    return [mouseX, mouseY];
};

const CallToAction = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const borderedDivRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
    });
    const backgroundPositionY = useTransform(
      scrollYProgress,
      [0, 1],
      [-300, 300]
    );
    const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
    const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`
  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="px-6 md:px-8">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundImage: `url(${starsBg.src})`,
            backgroundPositionY,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(64,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-[rgb(64,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl tracking-tighter text-center max-w-sm mx-auto font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-6 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CallToAction;
