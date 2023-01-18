import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.svg";

// icons
import { BiSearchAlt2, BiBell } from "react-icons/bi";

// components
import User_Account from "../../components/HeaderPopover";
import HeaderNavigation from "../../components/headerNavigation/HeaderNavigation";
import { memo } from "react";

const Header = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="header">
      <section className="header-root container">
        <div className="header-logo-wrapper">
          <button
            className="header-mobile-icon"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
            >
              <use href="#humburger" />
            </svg>
          </button>
          <Link to="/">
            <div className="header-logo">
              <img src={logo} alt="logo" />
              <svg
                width="101"
                height="19"
                viewBox="0 0 101 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#logo-text" />
              </svg>
            </div>
          </Link>
        </div>

        <HeaderNavigation
          isNavExpanded={isNavExpanded}
          setIsNavExpanded={setIsNavExpanded}
        />

        <div className="header-right">
          <div className="header-right_search-box">
            <input
              className="header-search"
              type="text"
              placeholder="Search"
              name="search"
              autoComplete="off"
            />
            <i>
              <BiSearchAlt2 />
            </i>
          </div>

          {auth && auth.token ? (
            <>
              <div className="notification_icon">
                <BiBell />
              </div>
              <div className="user_icon">
                <User_Account />
              </div>
            </>
          ) : (
            <div className="buttons-box">
              <Link className="btn-text-secondary " to="/login">
                Sign in
              </Link>
              <button className="btn btn-header ">
                <Link className="btn-text-secondary " to="/register">
                  Sign up
                </Link>
              </button>
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default memo(Header);
