import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <nav className="mb-8 flex items-center justify-between py-4">
                <div className="flex flex-shrink-0 items-center">
              <h1 className="text-white text-4xl font-bold">rk</h1>
                </div>
                <div className=" flex items-center justify-center gap-4 text-2xl text-white">
                    <FaLinkedin></FaLinkedin>
                    <FaGithub></FaGithub>
                    <FaSquareXTwitter></FaSquareXTwitter>
                    <FaInstagram></FaInstagram>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;