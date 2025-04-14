import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
    <h1
            
              className="text-2xl tablet:text-3xl laptop:text-2xl laptopl:text-4xl p-1 tablet:p-1 text-bold w-4/5 mob:w-full laptop:w-4/5"
            ><br />If you&apos;re looking for a trusted partner, let&apos;s talk. <br /><br /><a href="mailto:hello@decise.io">hello@decise.io</a>
            <br /><br /></h1>
      
            <div className="w-full text-black dark:text-white text-center text-sm py-2 font-semibold top-0 z-50">
  Want to join us? We&rsquo;re hiring! <a href="https://decise.io/20250402DeciseOpportunity.pdf" className="underline hover:text-red-600 dark:hover:text-yellow-300 ml-1">View opportunity →</a>
</div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
      Decise LLC was founded in 2022 and is located at 200 W. Adams Street Suite 2950 Chicago, Illinois 60606
 
      </h1>
    </>
  );
};

export default Footer;
