import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  getTotalPriceQuantity,
  removeItem,
  clearCart,
} from "../store/slices/productSlice";

import NavBar from "./navBar";
import {
  Box,
  Container,
  StackDivider,
  VStack,
  Text,
  Image,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { productSchema } from "../hooks/useProduct";
import Pay from "./pay";

const Cart = () => {
  const cartData: productSchema = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPriceQuantity(""));
    console.log("useEffect");
  }, [cartData]);

  const handleAddtoCart = (p) => {
    console.log("Add to Cart  ", p);
    dispatch(addItem(p));
  };

  const HandleRemoveItem = (p) => {
    console.log("Remove from Cart  ", p);
    dispatch(removeItem(p));
  };

  const handleClearCart = (products) => {
    console.log(products);
    dispatch(clearCart(products));
  };

  console.log("cartData   ", cartData);
  console.log(
    "cartData   length and products",
    cartData.length,
    "  ",
    cartData.products
  );

  // if (cartData.length === 0) return <NavBar />;

  return (
    <>
      <NavBar />
      {cartData.length === 0 ? (
        <Box as="h2"> No Data</Box>
      ) : (
        <Container maxW="lg" bg="Green 90" color="black">
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            {" "}
            {cartData.products.map((p) => (
              <Box key={p.id}>
                <Text as="b"> {p.title}</Text>
                <SimpleGrid columns={2} spacing={2}>
                  <Image src={p.image} boxSize="120px" alt={p.description} />
                  <Box>
                    <SimpleGrid columns={3} spacing={5}>
                      <Text as="b">
                        <Center color="gray">Unit Price ${p.price}</Center>
                      </Text>
                      <Text> {"  "}</Text>
                      <Text as="b">
                        <Center color="gray">
                          Item(s) Price ${(p.price * p.quantity).toFixed(2)}
                        </Center>
                      </Text>
                    </SimpleGrid>
                    <SimpleGrid columns={3} spacing={0}>
                      <Button
                        colorScheme="blue"
                        height="40px"
                        width="70px"
                        onClick={() => handleAddtoCart(p)}
                      >
                        +
                      </Button>
                      <Text as="b" color="gray" height="40px" width="70px">
                        <Center>{p.quantity}</Center>
                      </Text>
                      <Button
                        colorScheme="blue"
                        height="40px"
                        width="70px"
                        onClick={() => HandleRemoveItem(p)}
                      >
                        -
                      </Button>
                    </SimpleGrid>
                  </Box>
                </SimpleGrid>
              </Box>
            ))}
            <SimpleGrid columns={3} spacing={2}>
              <Text as="b"> Total Products {cartData.totalQuantity}</Text>
              <Text as="b">Total Price $ {cartData.totalPrice.toFixed(2)}</Text>
              <Pay productsInCart={cartData} />
              <Box>
                <Button
                  colorScheme="blue"
                  width="100px"
                  onClick={() => handleClearCart(data.products)}
                >
                  Clear Cart
                </Button>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      )}
    </>
  );
};
export default Cart;
