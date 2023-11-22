import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { productSchema } from "../hooks/useProduct";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/productSlice";

interface Props {
  product: productSchema;
}

interface productAddRequestArg1 {
  name: string;
  id: number;
  price: number;
  currency: string;
  sku: string;
}
// interface productAddRequestArg2 {
// count: number;
// product_metadata: { type: string };
// price_metadata: { someKey: string };
// }
// let prodArg1: productAddRequestArg1 = {
// name: "",
// id: 0,
// price: 0,
// currency: "CAD",
// sku: "",
// };
const addRequestArg1 = (p: productSchema) => {
  let prodArg1: productAddRequestArg1 = {
    name: "",
    id: 0,
    price: 0,
    currency: "CAD",
    sku: "",
  };
  (prodArg1.name = p.title),
    (prodArg1.id = p.id),
    (prodArg1.price = p.price),
    (prodArg1.currency = "CAD"),
    (prodArg1.sku = p.id + "_" + p.title);

  return prodArg1;
};

const Product = ({ product }: Props) => {
  // console.log("Prod ", product);
  const dispatch = useDispatch();

  const handleAddtoCart = (p: productSchema) => {
    console.log("Add to Cart  ", p);

    dispatch(addItem<action.payload>(p));

    // let additemArg1 = addRequestArg1(p);
    // addItem(additemArg1, {
    // count: 1,
    // product_metadata: { type: p.id + "_" + p.category },
    // price_metadata: { someKey: p.id + "_" + p.price },
    // });
  };

  return (
    <>
      {/* {product.id % 2 === 0 ? (color = "red") : color} */}
      <Card borderRadius={10}>
        <CardHeader>
          <Heading size="xs">{product.title}</Heading>
        </CardHeader>
        <Image src={product.image} boxSize="120px" alt={product.title} />

        <CardBody>{product.description}</CardBody>
        <Text color="blue.600" fontSize="2xl">
          ${product.price}
        </Text>
        <CardFooter>
          <Button colorScheme="blue" onClick={() => handleAddtoCart(product)}>
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Product;
