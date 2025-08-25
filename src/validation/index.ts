

export const productValidation = (product: {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
  } = { title: "", description: "", imageUrl: "", price: "" };

  function checkURL(url:string) {
     return /\.(jpeg|jpg|png|gif)\d*/i.test(url);
}

const validateImage=checkURL(product.imageUrl)

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "title between 10 and 80";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description = "description between 10 and 90";
  }


  if (
    !product.imageUrl.trim() || !validateImage
  ) {
    errors.imageUrl = "imageUrl not valid";
  }

  if (
   ! product.price.trim() || isNaN(Number(product.price))
  ) {
    errors.price = "price not valid ";
  }
  return errors;
};
