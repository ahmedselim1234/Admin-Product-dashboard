interface Iprops {
  msg: string;
}

const Error = ({ msg }: Iprops) => {
  return msg ? (
    <span className="block text-red-700 text-sm ">{msg}</span>
  ) : null;
};

export default Error;
