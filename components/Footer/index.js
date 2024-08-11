import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold"> How can we help? <br /><br />Let&apos;s talk about it. A real human will read your email and respond.<br /> It will probably be one of the founders of Decise, Kyle or Keela. ☺️<br /><br /><a href="mailto:hello@decise.io">hello@decise.io</a></h1>
          <br /><br />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
      Decise was founded in 2022 in Chicago, Illinois. ❤ 
      </h1>
    </>
  );
};

export default Footer;
