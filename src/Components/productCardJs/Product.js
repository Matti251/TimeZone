import Product from ".././productCard/Product";
import { useUserContext } from "../../context/context";
const Products = () => {
  const { data } = useUserContext();
  return (
    <div className="flex flex-wrap gap-16 justify-center">
      {data?.map((item, i) => {
        return (
          <Product
            item={item}
            key={"products--card--js" + i}
          />
        );
      })}
    </div>
  );
};
export default Products;
