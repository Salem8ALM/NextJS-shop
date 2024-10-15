import Image from "next/image";
import bookstoreFront from "./boogz.png";

export default function Home() {
  return (
    <div className=" pt-6 pb-6 text-center space-y-4 flex flex-col bg-white">
      <h1 className="text-black font-extrabold text-xl">my bookstore</h1>
      <p className="text-black font-semibold">get your banned books here</p>
      <Image src={bookstoreFront} alt="" width={1000} height={500} />
    </div>
  );
}
