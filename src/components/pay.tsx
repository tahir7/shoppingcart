import axios from "axios";
import { Button } from "@chakra-ui/react";
import { productSchema } from "./../hooks/useProduct";

const handleCheckout = (p) => {
  console.log("Checkout ", p);
};
const Pay = ({ productsInCart }) => {
  debugger;
  console.log("Express ");
  axios
    .post("http://localhost:5173/api/stripe/create-checkout-session", {
      productsInCart,
    })
    .then((res) => {
      console.log(res);
      if (res.data.url) window.location.href = res.data.url;
    })
    .catch((error) => console.log("error.... ", error.message));
  return (
    <>
      <Button colorScheme="blue" onClick={() => handleCheckout(productsInCart)}>
        Checkout
      </Button>
    </>
  );
};

export default Pay;
