import Img from "./Img";
import Button from "./Ui/Button";
import type { Product } from "../interfaces/index";
import { slicer } from "./utils/functions";

const colorMap: Record<string, string> = {
  red: "bg-red-600",
  blue: "bg-blue-600",
  yellow: "bg-yellow-600",
  green: "bg-green-600",
  pink: "bg-pink-600",
  purple: "bg-purple-600",
  gray: "bg-gray-600",
};

interface Iprops {
  product: Product;
}

const Cart = ({ product }: Iprops) => {
  return (
    <div className=" max-w-sm md:max-w-lg  mx-auto md:mx-0  border border-black p-2 bg-blue-50 rounded-sm grid  ">
      <Img url={product.imageUrl} alt={"fi"} className="max-h-64 w-full" />
      <h3>{product.title}</h3>

      <p>{slicer(product.description)}</p>

      <div className="flex my-3 space-x-2">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className={`w-5 h-5 rounded-full ${
              colorMap[color] || "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span>{product.price}</span>
        <Img
          url={product.category.imageUrl}
          alt={"fi"}
          className="w-10 h-10 rounded-full "
        />
      </div>

      <div className="  flex justify-between items-center gap-2 mt-3">
        <Button children={"Edit"} className=" bg-amber-700" />
        <Button children={"send"} className={" bg-amber-300"} />
      </div>
    </div>
  );
};

export default Cart;
