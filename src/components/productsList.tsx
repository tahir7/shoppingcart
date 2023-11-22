import { SimpleGrid, Text } from "@chakra-ui/react";

import Product from "./product";
import useProduct from "../hooks/useProduct";
import { productSchema } from "./../hooks/useProduct";

const ProductsList = () => {
  const { data, error, isLoading } = useProduct();

  if (isLoading)
    return (
      <Text color="blue.900" fontSize="2xl">
        Loading.......
      </Text>
    );

  if (error)
    return (
      <Text color="blue.900" fontSize="2xl">
        {error.message}
      </Text>
    );

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding="15px">
        {data?.map((prod: productSchema) => (
          <Product key={prod.id} product={prod} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsList;
