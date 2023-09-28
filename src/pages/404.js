import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../public/images/errorpage.jpg";
const ErrorPage = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100%" }} className="">
      <Image src={image} alt="error" width={"1400px"} height={300} />
      <Link href={"/"}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
