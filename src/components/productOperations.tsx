import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/slices/productSlice";

function handleAddtoCart(p) {
  const dispatch = useDispatch();

  dispatch(addItem(p));
  console.log("Add to Cart  ", p);
}

export default handleAddtoCart;
