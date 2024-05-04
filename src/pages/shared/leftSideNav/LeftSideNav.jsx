import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [latestnews, setLatestnews] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("latestnews.json")
      .then((res) => res.json())
      .then((data) => setLatestnews(data));
  }, []);

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">All Categories</h2>
        {categories.map((category) => (
          <Link
            className="block text-xl font-semibold  text-[#9F9F9F] hover:text-black hover:bg-[#E7E7E7] py-4 px-5"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="my-12">
        {latestnews.map((news) => (
          <div className="my-6 space-y-5" key={news.id}>
            <img className=" w-full " src={news.img_url} alt="" />
            <h3 className="text-xl font-semibold">{news.heading}</h3>
            <span className="flex justify-between">
              <p className="font-semibold">{news.category}</p>
              <p className="flex items-center gap-2 text-[#9F9F9F]">
                <CiCalendarDate />
                {news.date}
              </p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftSideNav;
