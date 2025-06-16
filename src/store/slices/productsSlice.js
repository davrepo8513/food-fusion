import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsByCategory } from '../../services/api';

// Async thunks
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

export const fetchProductsCategory = createAsyncThunk(
  'products/fetchProductsCategory',
  async (category) => {
    const response = await fetchProductsByCategory(category);
    return response;
  }
);

const initialState = {
  items: [],
  filteredItems: [],
  categories: ['all', 'pizza', 'burger', 'dessert', 'drink'],
  selectedCategory: 'all',
  loading: false,
  error: null,
  searchTerm: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload === 'all') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(item => 
          item.category?.toLowerCase() === action.payload.toLowerCase()
        );
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      const searchTerm = action.payload.toLowerCase();
      
      let filtered = state.selectedCategory === 'all' 
        ? state.items 
        : state.items.filter(item => 
            item.category?.toLowerCase() === state.selectedCategory.toLowerCase()
          );
      
      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.title?.toLowerCase().includes(searchTerm) ||
          item.description?.toLowerCase().includes(searchTerm)
        );
      }
      
      state.filteredItems = filtered;
    },
    clearFilters: (state) => {
      state.selectedCategory = 'all';
      state.searchTerm = '';
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProductsCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCategory, setSearchTerm, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;