import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const { title, image_url, rating, details, _id, total_view, author } = news;

  return (
    <div className="border rounded-lg mb-10">
      <div className="w-full bg-[#F3F3F3] flex justify-between">
        <div className="flex items-center gap-4 p-5 ">
          <img className="rounded-full size-12" src={author.img} alt="" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-[#706F6F]">{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center pr-5">
          <span className="flex gap-4 text-xl">
            <IoShareSocialOutline />
            <BsBookmark />
          </span>
        </div>
      </div>
      <div className="w-full py-5  px-4">
        <h4 className="text-2xl mb-5 font-bold">{title}</h4>
        <figure className="mt-5 mb-8">
          <img src={image_url} alt="Shoes" />
        </figure>

        {details.length > 200 ? (
          <p className="border-b-2 pb-5">
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="font-bold text-[#FF8C47]">
              Read More..
            </Link>{" "}
          </p>
        ) : (
          <p className="border-b-2 pb-5">{details}</p>
        )}
        <div className="flex justify-between mt-5">
          <span className="flex items-center gap-2">
            <FaStar className="text-orange-600" />
            {rating.number}
          </span>
          <span className="flex items-center gap-2">
            <FaEye />
            {total_view}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  children: PropTypes.node.isRequired,
};
