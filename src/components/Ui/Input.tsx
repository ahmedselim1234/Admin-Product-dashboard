import React from "react";

interface Iprops extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input = ({...rest}: Iprops) => {
  return (
      <input  id="" className="border-1 border-gray-300 
      shadow-md focus:border-indigo-500 focus:outline-none rounded-md h-12 mb-4 " {...rest} />
  );
};

export default Input;
