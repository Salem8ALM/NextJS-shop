import Image from "next/image";
import products from "./products";
import ProductItem from "./components/ProductItem";
import bookStore from "./boogz.png";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="pt-6 pb-6 text-center space-y-4 flex flex-col justify-center bg-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black font-extrabold text-xl">my bookstore</h1>
        <p className="text-black font-semibold">get your banned books here</p>
        <Image src={bookStore} alt="Bookstore Front" width={500} height={300} />
      </div>

      <div className="pt-6 space-y-4 flex flex-row justify-center items-center space-x-20">
        <ProductList />
      </div>
    </div>
  );
}
