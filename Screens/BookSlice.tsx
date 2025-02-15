import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
    name: 'books',
    initialState: {
        booksData: [],
    },
    reducers: {
        storeBooks: (state, action) => {
            //console.log("Books data : ", action.payload);
            state.booksData = action.payload;
        }
    }
})

export const { storeBooks } = BookSlice.actions;
export default BookSlice.reducer;