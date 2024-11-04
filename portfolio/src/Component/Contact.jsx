import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function Contact() {
  return (
    <>
      <div
        className="conatoner-contac " id='contact'
        style={{ textAlign: "left", margin: "30px" }}
      >
        <h1>CONATCT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
          <a href='https://www.linkedin.com/in/kapil-yadav-40bb05268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' className="itam">
            <FaLinkedin className="icons" />
          </a>
          <a href='https://github.com/Kapily25 ' className="itam">
            <FaGithub className="icons" />
          </a>
          <a href='https://wa.link/j77rgp' className="itam">
            <FaWhatsapp className="icons" />
          </a>
          <a href='mailto:kapilyadav.ry25@gmail.com' className="itam">
            <IoIosMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact