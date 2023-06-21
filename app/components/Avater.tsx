"use client";
import Image from "next/image";
const Avater = () => {
  return (
    <div className="">
      <Image
        alt="avater"
        className=" rounded-full "
        height="30"
        width="30"
        src="/images/placeholder.jpg"
      ></Image>
    </div>
  );
};
export default Avater;
