import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import Button from "@/components/Button";
const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden" />
      <div className="px-6 lg:px-8">
        <div className="flex justify-between place-items-center md:border border-white/15 md:p-2 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block" />
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-white/70 transition text-sm">
              <Link href="#" className="hover:text-white duration-500">
                Features
              </Link>
              <Link href="#" className="hover:text-white duration-500">
                Developer
              </Link>
              <Link href="#" className="hover:text-white duration-500">
                Pricing
              </Link>
              <Link href="#" className="hover:text-white duration-500">
                Changelog
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
