"use client";
import Image from "next/image";
interface AvaterProps {
  src?: string | null | undefined;
}
const Avater: React.FC<AvaterProps> = ({ src }) => {
  return (
    <div className="">
      <Image
        alt="avater"
        className=" rounded-full "
        height="30"
        width="30"
        src={src || "/images/placeholder.jpg"}
      ></Image>
    </div>
  );
};
export default Avater;
