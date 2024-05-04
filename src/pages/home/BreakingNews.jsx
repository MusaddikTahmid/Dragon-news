import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-4 bg-[#F3F3F3] p-4">
      <button className="py-2 px-5 bg-[#D72050] text-white font-semibold">
        Latest
      </button>
      <Marquee speed={76}>
        <Link className="mr-10">
          Global leaders convene for urgent climate talks amidst mounting
          pressure for decisive action.....
        </Link>
        <Link className="mr-10">
          Breakthrough in cancer research as scientists identify promising new
          treatment pathway.....
        </Link>
        <Link className="mr-10">
          Tech giants face scrutiny over data privacy concerns following
          widespread breaches.....
        </Link>
        <Link className="mr-10">
          Artificial intelligence ethics debate reignites following
          controversial decision-making algorithms.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
