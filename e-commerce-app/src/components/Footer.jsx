import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import React from "react";

function Footer() {
  const socialStyle =
    "m-3 rounded-full cursor-pointer bg-blue-700 p-2 text-white ";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        {/* Store information */}
        <h1 className="text-[25px]">Summer Kings</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
          animi soluta dolore laudantium qui esse quam officia, aliquid et
          possimus quibusdam! Consequuntur vero repudiandae doloremque atque
          eveniet ipsa eligendi sint?
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={`${socialStyle} bg-blue-700`}>
            <Facebook />
          </div>
          <div className={`${socialStyle} bg-orange-500`}>
            <Instagram />
          </div>
          <div className={`${socialStyle} bg-sky-400`}>
            <Twitter />
          </div>
          <div className={`${socialStyle} bg-red-600`}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        {/* Contact information */}
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">Lahore, Punjab, Pakistan</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">+92 3001234567</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">summerkings@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
