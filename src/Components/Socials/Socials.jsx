import React from "react";
export default function Socials({custom, size}) {
  return (
    <ul className={`list-unstyled d-flex align-items-center mb-0 ${custom}`}>
      <li className="">
        <a
          className="text-decoration-none"
          href="https://www.linkedin.com/in/beshoy-s-said/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className={`fa-brands fa-linkedin ${size}`}></i>{" "}
        </a>
      </li>
      <li className="ms-4">
        <a
          className="text-decoration-none"
          href="https://github.com/BeshoyS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className={`fa-brands fa-github ${size}`}></i>{" "}
        </a>
      </li>
      <li className="ms-4">
        <a
          className="text-decoration-none"
          href="https://www.instagram.com/beshoo.sam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className={`fa-brands fa-instagram ${size}`}></i>{" "}
        </a>
      </li>
      <li className="ms-4">
        <a
          className="text-decoration-none"
          href="mailto:beshoys.said@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="beshoys.said@gmail.com"          
        >
          {" "}
          <i className={`fa-solid fa-at ${size}`}></i>{" "}
        </a>
      </li>
    </ul>
  );
}
