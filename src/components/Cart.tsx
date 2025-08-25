import Img from "./Img";
import Button from "./Ui/Button";
import type { Product } from "../interfaces/index";
import { slicer } from "./utils/functions";
import CircleColor from "./Ui/CircleColor";



interface Iprops {
  product: Product;
  setProductToEdit:(product:Product)=>void
}



const Cart = ({ product ,setProductToEdit}: Iprops) => {
    const rederColors = product.colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      
    />
  ));

   const onEdit=()=>{
    setProductToEdit(product)
  }

  return (
    <div className=" max-w-sm md:max-w-lg  mx-auto md:mx-0  border border-black p-2 bg-blue-50 rounded-sm grid  ">
      <Img url={product.imageUrl} alt={"fi"} className="max-h-64 w-full" />
      <h3>{product.title}</h3>

      <p>{slicer(product.description)}</p>

    
      <div className="flex flex-wrap my-3 space-x-2">
          {rederColors}
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
        <Button children={"Edit"} className=" bg-green-500" onClick={onEdit} />
        <Button onClick={()=>{}} children={"Delete"} className={" bg-red-500"} />
      </div>
    </div>
  );
};

export default Cart;
