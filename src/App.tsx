import { Button } from "@headlessui/react";
import Cart from "./components/Cart";
import DialogModel from "./components/Ui/DialogModel";
// import Notifications from "./components/notifi";
import { prodList } from "./data";
import { useState } from "react";

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
  return (
    <main>
      <Button
        children={"Add"}
        onClick={openModal}
        className={" bg-blue-300 w-30 rounded-sm h-10 mt-5 "}
      />
      <div className="border-2 border-white m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-25 pr-25 bg-white gap-3">
        {/* <Notifications /> */}
        {renderProducts}
      </div>

      <DialogModel
        isOpen={isOpen}
        closeModal={closeModal}
        title="Add new product"
      >
        <div className="flex  gap-2">
          <Button
            children={"submit"}
            className={" bg-blue-300 w-full rounded-sm h-10 "}
          />
          <Button
            children={"cancel"}
            className={" bg-red-500 w-full rounded-sm "}
          />
        </div>
      </DialogModel>
    </main>
  );
};

export default App;
