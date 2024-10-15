import Image from "next/image";
import bookstoreFront from "./boogz.png";
import products from "./products"; // Importing the products

export default function Home() {
  return (
    <div className="pt-6 pb-6 text-center space-y-4 flex flex-col justify-center bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black font-extrabold text-xl">my bookstore</h1>
        <p className="text-black font-semibold">get your banned books here</p>
        <Image src={bookstoreFront} alt="Bookstore Front" />
      </div>
      <div className="pt-6 space-y-4 flex flex-row justify-center items-start space-x-20">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={70}
              height={100}
            />
            <h2 className="text-black">{product.name}</h2>
            <p className="text-black ">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
