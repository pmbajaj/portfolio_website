import img_logo from "../assets/logo_pmb.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
            <a href="#"><img className="mx-2 w-20" src={img_logo} alt="Logo" /></a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/piyush-mangalam-bajaj-6a995a236/"><FaLinkedin /></a>
            <a href="https://github.com/pmbajaj"><FaGithub /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram /></a>
            <a href="https://x.com/?lang=en"><FaSquareTwitter /></a>
            <a href="https://leetcode.com/u/Piyush_bajaj_999/"><SiLeetcode /></a>
        </div>
    </nav>
    );
};

export default Navbar;
