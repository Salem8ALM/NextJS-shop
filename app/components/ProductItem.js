import Image from "next/image";

function ProductItem({ product }) {
  return (
    <div className="flex flex-col items-center">
      <Image src={product.image} alt={product.name} width={70} height={100} />
      <h2 className="text-black">{product.name}</h2>
      <p className="text-black">{product.price}</p>
    </div>
  );
}

export default ProductItem;
