

interface Iprops extends React.HTMLAttributes<HTMLSpanElement> {
  color: string;

}

const CircleColor = ({ color,...rest }: Iprops) => {
  return (
    <span
      className="w-5 h-5 rounded-full cursor-pointer"
      style={{ backgroundColor: color }} {...rest}
    ></span>
  );
};

// const CircleColor = ({ color }: Iprops) => {
//   return (
//     <span
//       className="w-5 h-5 rounded-full cursor-pointer border"
//       style={{ backgroundColor: color }}
//     ></span>
//   );
// };

export default CircleColor;
// style={{backgroundColor:color}}
