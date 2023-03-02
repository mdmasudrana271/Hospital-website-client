import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from './../../assets/img/insurance.png'

const BannerLongCard = () => {
  return (
    <div className="card card-side bg-base-100 w-80 h-32 shadow hover:shadow-xl">
      <figure>
        <img
          src={img}
          alt="Movie"
          className="w-14 ml-6"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-start items-center gap-5">
        <h2 className="text-sm font bold">Hubungkan Asuransi </h2>
        <span><FaArrowRight className="text-red-500"></FaArrowRight></span>
        </div>
        <p className="text-xs">Nikmati manfaat asuransimu untuk layanan Halodoc</p>
      </div>
    </div>
  );
};

export default BannerLongCard;
