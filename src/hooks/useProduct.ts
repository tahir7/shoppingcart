import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import data from "../initialData.json"
import { productSchema } from './useProduct';

export interface productSchema {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
    totalQuantity : number,
    totalPrice : number
  }

const useProduct = () => {

    // console.log("data in file  " , data);
    const fetchProducts = () => 
        axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data)
          

        // useQuery<productSchema[], Error> , initialData was not working with it
    return  useQuery({
        queryKey: ["Products"],
        queryFn: fetchProducts,
        initialData: data  ,
        retry : 3,
        staleTime : 10 * 60 * 1000,          
        
});
}
// 1*60*1000 = 1 minute
export default useProduct
