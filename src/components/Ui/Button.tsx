
interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement>{
children:React.ReactNode;
className:string;

}

const Button = ({children,className,...rest}:Iprops) => {
  return (
    <button className={`${className} p-2 w-full rounded-md cursor-pointer `}  {...rest} >{children}</button>
  )
}

export default Button           