import { Button } from "@headlessui/react";
import Cart from "./components/Cart";
import DialogModel from "./components/Ui/DialogModel";
import { prodList, formInputList, Colors } from "./data";
import { useState, type FormEvent } from "react";
import Input from "./components/Ui/Input";
import { type Product } from "./interfaces";
import { productValidation } from "./validation/index";
import Error from "./components/Ui/Error";
import CircleColor from "./components/Ui/CircleColor";
import { v4 as uuid } from "uuid";

const App = () => {
  const [products, setProducts] = useState<Product[]>(prodList);

  const [productToEdit, setProductToEdit] = useState<Product>({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  });

  const [product, setProduct] = useState<Product>({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  const [tempColors, settempColors] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenToEdit, setIsOpenToEdit] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
    });

    console.log(errors);

    const hasErrors =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrors) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors },
      ...prev,
    ]);

    setProduct({
      title: "",
      description: "",
      imageUrl: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageUrl: "",
      },
    });
    settempColors([]);
  };

  const onCancel = () => {
    console.log("cancel");
    setProduct({
      title: "",
      description: "",
      imageUrl: "",
      price: "",
      colors: [],
      category: {
        name: "",
        imageUrl: "",
      },
    });
    closeModal();
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

 

  const renderProducts = products.map((product) => (
    <Cart key={product.id} product={product} />
  ));

  const renderformInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name as keyof Product] as string}
        onChange={onChangeHandler}
      />
      <Error msg={errors[input.name]} />
    </div>
  ));

  const rederColors = Colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          settempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        settempColors((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main>
      <Button
        children={"Add"}
        onClick={openModal}
        className={" bg-blue-500 w-30 rounded-sm h-10 mt-5 "}
      />
      <div className="border-2 border-white m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-25 pr-25 bg-white gap-3">
        {renderProducts}
      </div>

      <DialogModel
        isOpen={isOpen}
        closeModal={closeModal}
        title="Add new product"
      >
        <form onSubmit={submitHandler}>
          {renderformInputList}

          <div className="flex flex-wrap gap-3 mt-2">
            {" "}
            {tempColors.map((color) => (
              <span
                key={color}
                className=" flex-row flex-wrap gap-3 mt-2 rounded-md  "
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}{" "}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">{rederColors}</div>

          <div className="flex gap-2 mt-3">
            <Button
              children={"submit"}
              className={" bg-blue-300 w-full rounded-sm h-10 "}
              type="submit"
            />
            <Button
              children={"cancel"}
              className={" bg-red-500 w-full rounded-sm "}
              onClick={onCancel}
            />
          </div>
        </form>
      </DialogModel>

      
    </main>
  );
};

export default App;
