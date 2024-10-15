import Image from "next/image";
import bookstoreFront from "./boogz.png";
import products from "./products";
export default function Home() {
  return (
    <div className=" pt-6 pb-6 text-center space-y-4 flex flex-col justify-center bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black font-extrabold text-xl">my bookstore</h1>
        <p className="text-black font-semibold">get your banned books here</p>
        <Image src={bookstoreFront} alt="" />
      </div>
      <div className="pt-6 space-y-4 flex flex-row justify-center items-start space-x-20">
        <div className="flex flex-col items-center">
          <Image src={products[0].image} alt="" width={70} />
          <h2 className="text-black">{products[0].name}</h2>
          <p className="text-black ">{products[0].price}</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={products[1].image} alt="" width={70} />
          <h2 className="text-black">{products[1].name}</h2>
          <p className="text-black ">{products[1].price}</p>
        </div>
      </div>
    </div>
  );
}
