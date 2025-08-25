import { Button } from "@headlessui/react";

import Cart from "./components/Cart";
import DialogModel from "./components/Ui/DialogModel";
// import ServicesList from "./components/notifi";
import { prodList, formInputList } from "./data";
import { useState } from "react";
import Input from "./components/Ui/Input";

const App = () => {
  //
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  //
  const renderProducts = prodList.map((product) => {
    return <Cart key={product.id} product={product} />;
  });

  const renderformInputList = formInputList.map((input) => (
    <div className="flex flex-col">
      <label htmlFor={input.id}>{input.label}</label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));

  return (
    <main>
      <Button
        children={"Add"}
        onClick={openModal}
        className={" bg-blue-500 w-30 rounded-sm h-10 mt-5 "}
      />
      <div className="border-2 border-white m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-25 pr-25 bg-white gap-3">
        {/* <ServicesList /> */}
        {renderProducts}
      </div>

      <DialogModel
        isOpen={isOpen}
        closeModal={closeModal}
        title="Add new product"
      >
        <form action="">
        {renderformInputList}
        <div className="flex  gap-2 mt-2">
          <Button
            children={"submit"}
            className={" bg-blue-300 w-full rounded-sm h-10 "}
          />
          <Button
            children={"cancel"}
            className={" bg-red-500 w-full rounded-sm "}
          />
        </div>
        </form>
      </DialogModel>
    </main>
  );
};

export default App;
