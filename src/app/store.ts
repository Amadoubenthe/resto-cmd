import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PouletCroquant, SuperCremeux } from "./common/model";

// Interface for Product
interface Product {
  title: string;
  price: number;
}

// Interface for State
export interface State {
  value: Product | null;
  list: Product[];
  owner?: {
    firstName?: string;
  };
}

// Initial state
const initialState: State = {
  value: null,
  list: [SuperCremeux, PouletCroquant],
  owner: {},
};

// Create slice with reducers
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.list.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((_, index) => index !== action.payload);
    },
    applyVoucher: (state, action: PayloadAction<{ price: number }>) => {
      state.list = state.list.map((item) =>
        item.title === "Super Crémeux"
          ? { ...item, price: action.payload.price }
          : item
      );
    },
    updateFirstName: (state, action: PayloadAction<string>) => {
      state.owner = {
        ...state.owner,
        firstName: action.payload,
      };
    },
  },
});

// Create store
export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

// Export actions
export const { addProduct, removeProduct, applyVoucher, updateFirstName } =
  productSlice.actions;

// Define RootState and Dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
