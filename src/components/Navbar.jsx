import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div>
            <nav className="mb-8 flex items-center justify-between py-4">
                <div className="flex flex-shrink-0 items-center">
              <h1 className="text-white text-4xl font-bold">rk</h1>
                </div>
                <div className=" flex items-center justify-center gap-4 text-2xl text-white">
                    <a target="blank" href="https://www.linkedin.com/in/rayhanul-karim-8584042a2"><FaLinkedin></FaLinkedin></a>
                    <a target="blank" href="https://github.com/rkshawn"><FaGithub></FaGithub></a>
                    <a target="blank" href="https://x.com/rkshawn785?s=08"> <FaSquareXTwitter></FaSquareXTwitter></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;