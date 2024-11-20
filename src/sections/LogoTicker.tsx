"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { src: acmeLogo, alt: "acme" },
  { src: apexLogo, alt: "apex" },
  { src: celestialLogo, alt: "celestial" },
  { src: quantumLogo, alt: "quantum" },
  { src: pulseLogo, alt: "pulse" },
  { src: echoLogo, alt: "echo" },
];
const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="px-6 md:px-8">
        <div className="flex items-center gap-x-6">
          <div className=" flex-1 md:flex-none">
            <h2 className="">Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
              className="flex flex-none gap-14 pr-14"
            >
              {[...items, ...items].map(({ src, alt }, i) => (
                <Image key={i} src={src} alt={alt} className="h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LogoTicker;
