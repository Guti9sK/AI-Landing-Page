import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-white/15">
      <div className="px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 lg:flex-1 items-center">
            <Logo className="h-6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:flex-1 text-white/70 transition text-xs md:text-sm lg:justify-center">
            <Link href="#" className="hover:text-white duration-500">
              Features
            </Link>
            <Link href="#" className="hover:text-white duration-500">
              Developers
            </Link>
            <Link href="#" className="hover:text-white duration-500">
              Company
            </Link>
            <Link href="#" className="hover:text-white duration-500">
              Blog
            </Link>
            <Link href="#" className="hover:text-white duration-500">
              Changelog
            </Link>
          </nav>
          <div className="flex gap-6 transition text-white/40 lg:flex-1 lg:justify-end">
            <XSocial className="hover:text-white duration-500" />
            <InstaSocial className="hover:text-white duration-500" />
            <YTSocial className="hover:text-white duration-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
