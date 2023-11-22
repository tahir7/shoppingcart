import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/slices/productSlice";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Spacer,
  HStack,
  Heading,
  VStack,
  Text,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";
import { getTotalPriceQuantity } from "../store/slices/productSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getTotalPriceQuantity(""));
  }, [data]);

  console.log("data --- ", data);

  const handleClearCart = (products) => {
    console.log(products);
    dispatch(clearCart(products));
  };
  console.log("data  ", data);
  console.log("data  products  ", data.products);
  return (
    <>
      <Box bg={useColorModeValue("blue.200", "blue.900")} px={4}>
        <Flex as="nav" p="10px" alignItems="center">
          <Link to="/">
            <Heading as="h2">
              <Button colorScheme="blue" size={"md"}>
                Unique E-Shop
              </Button>
            </Heading>
          </Link>

          <Spacer />

          <HStack>
            <SimpleGrid columns={2} spacing={1}>
              <Link to="/cart">
                <Button colorScheme="blue" size={"md"}>
                  {data.length === 0 || data.products.length === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-cart-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  )}
                </Button>
              </Link>
              <Badge borderRadius="full" px="0" colorScheme="blue" size={"md"}>
                <Text as="b"> Price-${data.totalPrice.toFixed(2)}</Text>
                <Spacer />
                <Text as="b"> Quantity-{data.totalQuantity}</Text>
              </Badge>
            </SimpleGrid>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
