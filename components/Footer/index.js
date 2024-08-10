import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">You&apos;ve made it this far.  Ready to say hi? <br /><br /> Let&apos;s talk about what you need and if we&apos;re the right fit. <a href="mailto:hello@decise.io">Email us</a>: hello@decise.io</h1>
          <br /><br />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
      Decise was founded in 2022 in Chicago, Illinois ❤
      </h1>
    </>
  );
};

export default Footer;
