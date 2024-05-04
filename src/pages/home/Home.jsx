import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news);

  return (
    <>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container */}
        <div className="lg:col-span-2 ">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  );
};

export default Home;
