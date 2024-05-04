import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import QZone1 from "../../../assets/qZone1.png";
import QZone2 from "../../../assets/qZone2.png";
import QZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Login With</h2>
        <button className="border-2 border-blue-500 rounded-xl py-2 w-full flex  justify-center items-center gap-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
          <FaGoogle />
          Login With Google
        </button>
        <button className="mt-3 border-2 border-black rounded-xl py-2 w-full flex  justify-center items-center gap-2 font-semibold text-black hover:bg-black hover:text-white">
          <FaGithub />
          Login With GitHub
        </button>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
        <a
          className="p-4 border-2 rounded-t-lg flex items-center text-xl font-semibold text-[#3B599C] hover:bg-[#3B599C] hover:text-white"
          href=""
        >
          <FaFacebook className="mr-3" />
          Facebook
        </a>
        <a
          className="p-4 border-x-2  flex items-center text-xl font-semibold hover:bg-[#58A7DE] hover:text-white text-[#58A7DE]"
          href=""
        >
          <FaTwitter className="mr-3" />
          Twitter
        </a>
        <a
          className="p-4 border-2 hover:bg-[#D82D7E] hover:text-white rounded-b-lg flex items-center text-xl font-semibold text-[#D82D7E]"
          href=""
        >
          <FaInstagram className="mr-3" />
          Instagram
        </a>
      </div>
      {/* Q-Zone */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Q-Zone</h2>
        <img src={QZone1} alt="" />
        <img className="my-6" src={QZone2} alt="" />
        <img src={QZone3} alt="" />
      </div>
    </>
  );
};

export default RightSideNav;
