import React from "react";
import DealImage from "../assets/Images/DealImage.svg";
import MemberImage from "../assets/Images/MemberImage.svg";
import PurrImage from "../assets/Images/PurrImage.svg";
import { FaArrowRight } from "react-icons/fa";

function DealSection() {
  return (
    <div className="flex flex-col gap-8 p-10 text-textblack sm:px-20 lg:flex-row">
      <div
        className="flex h-60 w-full items-center rounded-lg bg-lightBlue sm:h-auto lg:w-1/2"
        style={{
          backgroundImage: `url(${DealImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full flex-col justify-between px-2 py-3 sm:px-10 sm:py-24">
          <div className=" ">
            <p className="font-light" style={{ fontFamily: "Urbanist" }}>
              Snag a Deal
            </p>
            <h1
              className="w-2/3 text-lg font-medium sm:text-3xl"
              style={{ fontFamily: "Urbanist" }}
            >
              Buy One, Get One 50% Off!
            </h1>
          </div>

          <button className="w-1/2 rounded-3xl bg-button-gradient p-2 text-white sm:w-1/3">
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 text-textblack lg:w-1/2">
        <div
          className="relative rounded-lg bg-lightPeach py-5"
          style={{
            backgroundImage: `url(${MemberImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex size-full flex-col justify-between px-2 text-right sm:px-10">
            <div className="flex flex-col items-end gap-0 text-right md:gap-10">
              <p
                className="w-1/2 text-left font-light"
                style={{ fontFamily: "Urbanist" }}
              >
                Make Your Pet Happier
              </p>
              <h1
                className="w-1/2 text-left text-lg font-medium sm:text-3xl"
                style={{ fontFamily: "Urbanist" }}
              >
                Become a Member & Save 30%
              </h1>

              <div>
                <button className="flex items-center gap-2 p-2 text-furriesOrange">
                  Become a Member{" "}
                  <span>
                    <FaArrowRight />{" "}
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg bg-furriesBeige" style={{
            backgroundImage: `url(${PurrImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Text Section */}
          <div className="flex size-full flex-col justify-between px-2 py-3 text-right sm:px-10">
            <div className="flex h-full flex-col items-start gap-2 py-10 text-right md:gap-10">
              <h1
                className="w-full text-left text-lg font-medium sm:text-3xl md:w-1/2"
                style={{ fontFamily: "Urbanist" }}
              >
                Pounce Into Purrfection
              </h1>
              <button className="w-1/2 rounded-3xl bg-button-gradient p-2 text-white sm:w-1/4">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealSection;
