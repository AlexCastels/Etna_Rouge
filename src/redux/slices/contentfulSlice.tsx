import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../contentful/client";


interface Contents {
  contents: any;
  loading: boolean;
  error: string | null;
}

const initialState: Contents = {
  contents: [],
  loading: false,
  error: null,
};

export const fetchContentfulData = createAsyncThunk("contents/fetchContentfulData", async () => {
  try {
      const data = await client.getEntries();
      return data.items;

  } catch (error) {
    throw new Error("Network error");
  }
});

export const contentfulSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContentfulData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContentfulData.fulfilled, (state, action) => {
        state.loading = false;
        state.contents = action.payload;
      })
      .addCase(fetchContentfulData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default contentfulSlice.reducer;
