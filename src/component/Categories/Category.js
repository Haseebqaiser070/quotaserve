import React from "react";
import Heading from "../Fashion/Heading";
import Img from "../../assets/Group 38.png";
const Category = () => {
  return (
    <>
      <div className="container mt-5">
        <Heading
          heading="Categories"
          para="Our New and Top Trending Products"
        />
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-between flex-wrap w-75">
            <div className=" ">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="category-item">
                <img src={Img} alt="img" />
                <div className="category-content">
                  <p>Asphalt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
