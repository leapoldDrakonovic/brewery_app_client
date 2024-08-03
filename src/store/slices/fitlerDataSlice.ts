// src/redux/idSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IFilterData {
    city: string | null;
    state: string | null;
    type: string | null;
    search?: string;
}

const initialState: {filterData: IFilterData} = {
  filterData: {
    city: "",
    state: "",
    type: "",
    search: "",
  },
};

export const selectedFilters = (state: RootState) => state.filterData.filterData;


const filterDataSlice = createSlice({
  name: 'filterData',
  initialState,
  reducers: {
    addFilterCity: (state, action: PayloadAction<string | null>) => {
      state.filterData.city = action.payload;
    },
    addFilterState: (state, action: PayloadAction<string | null>) => {
      state.filterData.state = action.payload;

    },
    addFilterType: (state, action: PayloadAction<string | null>) => {
        state.filterData.type = action.payload;

    },
    addFilterSearch: (state, action: PayloadAction<string>) => {
        state.filterData.search = action.payload;
    }
  },
});

export const { addFilterCity, addFilterState, addFilterType, addFilterSearch } = filterDataSlice.actions;
export default filterDataSlice.reducer;
