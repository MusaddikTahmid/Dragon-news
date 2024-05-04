import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center lg:mt-12 lg:mb-9 mt-6 mb-4">
      <img className="mx-auto lg:mb-4" src={logo} alt="" />
      <p className="text-[#706F6F] text-lg lg:mt-3 lg:mb-2">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
