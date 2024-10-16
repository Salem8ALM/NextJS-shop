import ProductItem from "./ProductItem";
import products from "../products";

function ProductList() {
  return (
    <div class="pt-6 space-y-4 flex flex-row justify-center items-center space-x-20">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
