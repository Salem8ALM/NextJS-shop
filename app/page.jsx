import Image from "next/image";
import bookStore from "./boogz.png";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className="pt-6 pb-6 text-center space-y-4 flex flex-col justify-center flex-center bg-white">
      <Header />

      <div className="pt-6 space-y-4 flex flex-row justify-center items-center space-x-20">
        <ProductList />
      </div>
    </div>
  );
}
