import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "../../interfaces";

interface ProductState {
  products: Card[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk("product/fetchData", async () => {
  try {
    const response = await fetch("http://localhost:3000/products?limit=3");
    if (!response.ok) {
      throw new Error("Errore durante il recupero dei dati");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Errore di rete");
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Errore sconosciuto";
      });
  },
});

export default productSlice.reducer;
