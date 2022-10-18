import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="container">
        <div className="container-text">
          Made by{" "} by 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span> Himadri Kumar Das.</span>
        </div>
        <div className="github">
          <a href="https://github.com/him-adri" target={'_blank'}>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
