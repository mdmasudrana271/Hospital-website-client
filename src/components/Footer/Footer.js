import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import footerImg from "./../../assets/img/halodoc-footer-logo.svg";
import appstorebadge from "./../../assets/img/app-store-badge-us-white.svg";
import googlestorebadge from "./../../assets/img/google-play-badge-us.svg";

const Footer = () => {
  return (
    <section>
      <footer className="divide-y bg-primaryColor dark:text-gray-100">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <img src={footerImg} alt="" />
            </a>
          </div>
          <div className="grid grid-cols-3 text-sm gap-x-3 gap-y-8 lg:w-2/4 ">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Site Map
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Promo
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Karir
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Security
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Media
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Corporate Partnership
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Hubungi Kami
              </h3>
              <ul className="space-y-3">
                <li>
                  <p>
                    Gedung Halodoc, Jl. HR Rasuna Said <br /> Kav. B32-33,
                    Jakarta Selatan 12940
                  </p>
                </li>
                <li>
                  <p>
                    Phone: +62 21-5095-9900 <br />
                    Email: help@halodoc.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
          <div className="space-y-3 mb-10">
            <div className="uppercase text-end dark:text-gray-50 text-xs font-semibold">
              Download App di
            </div>
            <div className="flex justify-start space-x-3">
              <img src={googlestorebadge} alt="" />
              <img src={appstorebadge} alt="" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-end dark:text-gray-50 text-xs font-semibold">
            Apakah kamu Dokter?
            </div>
            <div className="flex justify-end space-x-3">
            <button className="btn btn-accent btn-sm text-white px-5 rounded uppercase">Register</button>
            </div>
          </div>
          </div>
        </div>
      </footer>
      <div className="py-6 px-8 text-white w-full bg-secondaryColor flex justify-between items-center">
        <div>
          <p>©HALODOC, 2023. ALL RIGHTS RESERVED</p>
        </div>
        <div className="flex justify-between gap-3 items-center">
          <p className="text-sm text-gray-300">Follow kami di</p>
          <FaTwitter></FaTwitter>
          <FaFacebookF></FaFacebookF>
          <FaInstagram></FaInstagram>
          <FaYoutube></FaYoutube>
        </div>
      </div>
    </section>
  );
};

export default Footer;
