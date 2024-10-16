import Image from "next/image";
import bookStore from "../boogz.png";

function Header() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-black font-extrabold text-xl">my bookstore</h1>
      <p className="text-black font-semibold">get your banned books here</p>
      <div className="flex flex-col justify-center flex-center mx-auto">
        <Image src={bookStore} alt="Bookstore Front" width={500} height={300} />
      </div>
    </div>
  );
}

export default Header;
