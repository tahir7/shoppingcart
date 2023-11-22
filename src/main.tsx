import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { Provider } from "react-redux/es/exports";
import { store } from "./store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes";
// import { getTotalPriceQuantity } from "./store/slices/productSlice.ts";

const queryClient = new QueryClient();
// store.dispatch(getTotalPriceQuantity());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>

    <ReactQueryDevtools />
  </QueryClientProvider>
);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
