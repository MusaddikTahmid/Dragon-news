import { useParams } from "react-router-dom";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import Navbar from "../shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Details</h2>
          <p>{id}</p>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  );
};

export default News;
