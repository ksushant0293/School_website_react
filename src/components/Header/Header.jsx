import React from "react";
import Navbtn from "../Button/Navbtn";
import slogo from "../../assets/slogo.png";
import "../../App.css";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="linkContainer">
            <Link to="/"><img src={slogo} alt="school_logo" className="slogo-img" /></Link>
            <div className="innerLinkContainer">
              <ul className="mainUl">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-200" : "text-white"
                      }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/aboutUs"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-200" : "text-white"
                      }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/academics"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-200" : "text-white"
                      }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                    }
                  >
                    Academics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faculty"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-200" : "text-white"
                      }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                    }
                  >
                    Faculty
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/students"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-200" : "text-white"
                      }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                    }
                  >
                    Students
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-200" : "text-white"
                      }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-200" : "text-white"
                      }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex justify-center gap-3">
              <NavLink
                to="/admission"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-yellow-200" : "text-white"
                  }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                }
              >
                Admissions
              </NavLink>
              <NavLink
                to="/Fees"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-yellow-200" : "text-white"
                  }  border-gray-100 hover:bg-gray-50 hover:text-orange-500 hover:bg-transparent text-sm sm:text-base md:text-md lg:text-lg xl:text-xl`
                }
              >
                PayOnline Fees
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
