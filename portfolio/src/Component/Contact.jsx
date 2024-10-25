import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
function Contact() {
  return (
    <>
      <div
        className="conatoner-contac "
        style={{ textAlign: "left", margin: "30px" }}
      >
        <h1>CONATCT ME</h1>
        <div className="contact-icon">
          <a href='' className="itam">
            <FaLinkedin className="icons" />
          </a>
          <a href='' className="itam">
            <FaGithub className="icons" />
          </a>
          <a href='' className="itam">
            <FaWhatsapp className="icons" />
          </a>
          <a href='' className="itam">
            <IoIosContact className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact