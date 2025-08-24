interface Iprops {
  url: string;
  alt: string;
  className?:string;
}

const Img = ({ url, alt,className }: Iprops) => {
  return (
    <div>
      <img
        src={url} alt={alt} className={className} />
    </div>
  );
};

export default Img;
